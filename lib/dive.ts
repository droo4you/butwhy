import { unstable_cache } from "next/cache";
import { presetAt } from "@/data/presets";
import { COPY, DiveError } from "@/lib/errors";
import { resolveProvider } from "@/lib/env";
import { generateLive } from "@/lib/llm";
import { matchSeed, suggestSeeds } from "@/lib/match";
import { memoryGet, memorySet } from "@/lib/memory-cache";
import { mockAsk, mockDive } from "@/lib/mock";
import { enforceRateLimit } from "@/lib/rate-limit";
import { assessQuestion, assertSafeText, cleanQuestion } from "@/lib/safety";
import { tooSimilar } from "@/lib/text";
import type { DiveResponse, HistoryItem, TrailSuggestion } from "@/types";

export const MAX_DEPTH = 12;

const cachedLive = unstable_cache(
  async (payload: string) => {
    const parsed = JSON.parse(payload) as {
      mode: "dive" | "ask";
      hook?: string;
      question?: string;
      depth?: number;
      topics?: string[];
    };
    return generateLive({
      mode: parsed.mode,
      hook: parsed.hook,
      question: parsed.question,
      depth: parsed.depth ?? 1,
      history: (parsed.topics ?? []).map((topic) => ({ topic, hook: "" })),
    });
  },
  ["butwhy-live-v1"],
  { revalidate: 60 * 60 * 24 * 30 }
);

function cacheKey(parts: Record<string, unknown>): string {
  const mode = resolveProvider();
  return JSON.stringify({
    v: 1,
    kind: mode.kind,
    provider: mode.kind === "live" ? mode.provider : mode.kind,
    model: mode.kind === "live" ? mode.model : mode.kind,
    ...parts,
  });
}

async function fromModel(key: string, mode: "mock" | "live", buildMock: () => DiveResponse): Promise<DiveResponse> {
  const remembered = memoryGet(key);
  if (remembered) return remembered;
  const result = mode === "mock" ? buildMock() : await cachedLive(key);
  memorySet(key, result);
  return result;
}

export function parseDiveBody(body: unknown): {
  hook: string;
  depth: number;
  seedId?: string;
  history: HistoryItem[];
} {
  if (!body || typeof body !== "object") throw new DiveError("invalid", COPY.invalid);
  const record = body as Record<string, unknown>;
  if (typeof record.hook !== "string") throw new DiveError("invalid", COPY.invalid);
  const hook = record.hook.replace(/[\u0000-\u001F\u007F]/g, "").replace(/\s+/g, " ").trim();
  if (hook.length < 8 || hook.length > 500) throw new DiveError("invalid", COPY.invalid);

  if (typeof record.depth !== "number" || !Number.isInteger(record.depth) || record.depth < 1) {
    throw new DiveError("invalid", COPY.invalid);
  }

  let seedId: string | undefined;
  if (record.seedId != null && record.seedId !== "") {
    if (typeof record.seedId !== "string" || !/^[a-z][a-z0-9-]{0,24}$/.test(record.seedId)) {
      throw new DiveError("invalid", COPY.invalid);
    }
    seedId = record.seedId;
  }

  if (record.history != null && !Array.isArray(record.history)) {
    throw new DiveError("invalid", COPY.invalid);
  }

  const history: HistoryItem[] = [];
  const source = Array.isArray(record.history) ? record.history.slice(-12) : [];
  for (const item of source) {
    if (!item || typeof item !== "object") throw new DiveError("invalid", COPY.invalid);
    const row = item as Record<string, unknown>;
    if (typeof row.topic !== "string" || typeof row.hook !== "string") {
      throw new DiveError("invalid", COPY.invalid);
    }
    history.push({
      topic: row.topic.replace(/\s+/g, " ").trim().slice(0, 200),
      hook: row.hook.replace(/\s+/g, " ").trim().slice(0, 400),
    });
  }

  return { hook, depth: record.depth, seedId, history };
}

function assertTrailSafe(hook: string, history: HistoryItem[]): void {
  const hookCheck = assertSafeText(hook);
  if (!hookCheck.ok) throw new DiveError(hookCheck.code, hookCheck.message);
  for (const item of history) {
    const topicCheck = assertSafeText(item.topic);
    if (!topicCheck.ok) throw new DiveError(topicCheck.code, topicCheck.message);
    const itemHook = assertSafeText(item.hook);
    if (!itemHook.ok) throw new DiveError(itemHook.code, itemHook.message);
  }
}

export async function nextCard(input: {
  hook: string;
  depth: number;
  seedId?: string;
  history: HistoryItem[];
  ip: string;
}): Promise<DiveResponse> {
  if (input.seedId) {
    const preset = presetAt(input.seedId, input.depth);
    if (preset && !input.history.some((item) => tooSimilar(item.topic, preset.topic))) {
      return { ...preset, _provider: "preset" };
    }
  }

  if (input.depth > MAX_DEPTH) throw new DiveError("too_deep", COPY.too_deep);
  assertTrailSafe(input.hook, input.history);

  const mode = resolveProvider();
  if (mode.kind === "none") throw new DiveError("no_provider", COPY.no_provider);
  enforceRateLimit(input.ip);

  const key = cacheKey({
    mode: "dive",
    hook: input.hook,
    depth: input.depth,
    topics: input.history.map((item) => item.topic),
  });

  const result = await fromModel(key, mode.kind, () =>
    mockDive(input.hook, input.depth, input.history.map((item) => item.topic))
  );

  if (input.history.some((item) => tooSimilar(item.topic, result.topic))) {
    throw new DiveError("repeat", COPY.repeat);
  }
  return result;
}

export interface ShelfSuggestions {
  message: string;
  suggestions: TrailSuggestion[];
}

export async function answerQuestion(
  question: unknown,
  ip: string
): Promise<{ redirect: string } | ShelfSuggestions | DiveResponse> {
  const cleaned = cleanQuestion(question);
  const check = assessQuestion(cleaned);
  if (!check.ok) throw new DiveError(check.code, check.message);

  const seed = matchSeed(cleaned);
  if (seed) return { redirect: `/topic/${seed.id}` };

  const mode = resolveProvider();
  if (mode.kind === "none") {
    const { seeds, close } = suggestSeeds(cleaned);
    return {
      message: close
        ? "Nothing on the shelf is that exact question. These written trails are the closest, and each one goes to bedrock."
        : "That one is not on the shelf. These trails are written all the way down, with no model required.",
      suggestions: seeds.map((item) => ({
        id: item.id,
        topic: item.topic,
        hook: item.hook,
        emoji: item.emoji,
        cat: item.cat,
      })),
    };
  }
  enforceRateLimit(ip);

  const key = cacheKey({ mode: "ask", question: cleaned, depth: 0, topics: [] });
  return fromModel(key, mode.kind, () => mockAsk(cleaned));
}
