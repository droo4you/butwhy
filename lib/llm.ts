import { DiveResponse } from "@/types";

// Keys are server-side only — no NEXT_PUBLIC prefix
const LLM_CONFIG = {
  groq:   { apiKey: process.env.GROQ_API_KEY   || "", model: "llama-3.1-8b-instant" },
  gemini: { apiKey: process.env.GEMINI_API_KEY  || "", model: "gemini-1.5-flash-latest" },
  claude: { apiKey: process.env.ANTHROPIC_API_KEY || "", model: "claude-haiku-4-5-20251001" },
  openai: { apiKey: process.env.OPENAI_API_KEY  || "", model: "gpt-4o-mini" },
} as const;

type Provider = keyof typeof LLM_CONFIG;

/** Pull the first {...} block out of a raw string — handles extra prose from the model. */
function extractJSON(raw: string): string {
  const match = raw.match(/\{[\s\S]*\}/);
  return match ? match[0] : raw;
}

const SYSTEM_PROMPT = `You are ButWhy — a curiosity engine. Answer like explaining to a smart, curious teenager.
Respond ONLY with valid JSON (no markdown, no backticks, no preamble):
{
  "topic": "Short punchy question, max 10 words, starts with Why",
  "answer": "2-3 sentences. Clear, surprising, conversational. No jargon.",
  "hook": "One sentence starting with But that reveals a surprising twist that makes the reader want to keep asking why."
}`;

function pickProvider(depth: number): Provider | null {
  const order: Provider[] =
    depth < 4 ? ["groq", "gemini", "claude", "openai"] :
    depth < 8 ? ["gemini", "claude", "openai", "groq"] :
                ["claude", "openai", "gemini", "groq"];
  return order.find((p) => LLM_CONFIG[p].apiKey) ?? null;
}

async function callLLM(
  provider: Provider,
  hook: string,
  depth: number
): Promise<DiveResponse> {
  const cfg = LLM_CONFIG[provider];
  const userMsg = `Previous hook: "${hook}"\n\nDig one level deeper. Depth level: ${depth}. Return only JSON.`;

  if (provider === "gemini") {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${cfg.model}:generateContent?key=${cfg.apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `${SYSTEM_PROMPT}\n\n${userMsg}` }] }],
          generationConfig: { temperature: 0.85, maxOutputTokens: 320 },
        }),
      }
    );
    const d = await res.json();
    if (!res.ok) throw new Error(`gemini ${res.status}: ${JSON.stringify(d)}`);
    const raw = d.candidates[0].content.parts[0].text;
    return { ...JSON.parse(extractJSON(raw)), _provider: "gemini" };
  }

  if (provider === "claude") {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": cfg.apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: cfg.model,
        max_tokens: 320,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userMsg }],
      }),
    });
    const d = await res.json();
    if (!res.ok) throw new Error(`claude ${res.status}: ${JSON.stringify(d)}`);
    return { ...JSON.parse(extractJSON(d.content[0].text)), _provider: "claude" };
  }

  // Groq + OpenAI share the OpenAI-compatible format
  const endpoints: Record<string, string> = {
    groq:   "https://api.groq.com/openai/v1/chat/completions",
    openai: "https://api.openai.com/v1/chat/completions",
  };
  const res = await fetch(endpoints[provider], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cfg.apiKey}`,
    },
    body: JSON.stringify({
      model: cfg.model,
      temperature: 0.85,
      max_tokens: 320,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userMsg },
      ],
    }),
  });
  const d = await res.json();
  if (!res.ok) throw new Error(`${provider} ${res.status}: ${JSON.stringify(d)}`);
  return { ...JSON.parse(extractJSON(d.choices[0].message.content)), _provider: provider };
}

export async function fetchDeepDive(
  hook: string,
  depth: number
): Promise<DiveResponse> {
  const all: Provider[] = ["groq", "gemini", "claude", "openai"];
  const preferred = pickProvider(depth);
  const order = preferred
    ? [preferred, ...all.filter((p) => p !== preferred)]
    : all;

  for (const p of order) {
    if (!LLM_CONFIG[p].apiKey) continue;
    try {
      return await callLLM(p, hook, depth);
    } catch (e) {
      console.warn(`[llm] ${p} failed:`, e);
    }
  }

  // Built-in fallback — never leaves the user hanging
  return {
    topic: "Why does curiosity have no bottom?",
    answer:
      "Every answer reveals a deeper layer beneath. Physics bottoms out in math, math in axioms, axioms in choice. The universe may be questions all the way down.",
    hook: "But some mathematicians believe math isn't discovered — it's invented.",
    _provider: "fallback",
  };
}
