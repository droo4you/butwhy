import { lowerFirst, tooSimilar, trimWords } from "@/lib/text";
import type { DiveResponse, HistoryItem } from "@/types";

const ANGLES = [
  (focus: string) => `Why is it that ${focus}?`,
  (focus: string) => `Why did ${focus} happen in the first place?`,
  (focus: string) => `Why does ${focus} matter one level down?`,
  (focus: string) => `Why is ${focus} not the bottom of this question?`,
  (focus: string) => `Why would ${focus} still be true further along?`,
  (focus: string) => `Why does explaining ${focus} open a new question?`,
  (focus: string) => `Why should anyone chase ${focus} past this card?`,
  (focus: string) => `Why does ${focus} refuse to be the final answer?`,
];

const MARKS = ["layer", "thread", "stratum", "vein", "root", "echo", "spur", "grain"];
const STEPS = ["alpha", "bravo", "cedar", "delta", "ember", "flint", "grove", "harbor"];

function focusClause(hook: string): string {
  const claim = hook.replace(/^but\s+/i, "").trim();
  const quoted = claim.match(/[“"]([^”"]+)[”"]/);
  const source = quoted
    ? quoted[1]!
    : (claim.split(/\s+[—–]\s+|\s+-\s+/).pop() || claim);
  return trimWords(lowerFirst(source.replace(/[.?!]+$/, "").trim()), 8);
}

/**
 * Local stand-in used only when LLM_PROVIDER=mock.
 * The card says, in the answer itself, that it is not a researched explanation.
 * Production on Vercel ignores this provider.
 */
export function mockDive(
  hook: string,
  depth: number,
  priorTopics: string[]
): DiveResponse {
  const focus = focusClause(hook);
  const angle = ANGLES[(Math.max(depth, 1) - 1) % ANGLES.length]!;
  const mark = MARKS[(Math.max(depth, 1) - 1) % MARKS.length]!;
  const step = STEPS[(Math.max(depth, 1) - 1) % STEPS.length]!;
  const base = angle(focus).replace(/\?$/, "");
  const extras = ["copper", "silver", "quartz", "linen", "amber", "basalt"];
  let topic = `${base} The ${step} ${mark}?`;
  let guard = 0;
  while (priorTopics.some((prior) => tooSimilar(prior, topic)) && guard < extras.length) {
    topic = `${base} The ${step} ${mark} of ${extras[guard]}?`;
    guard += 1;
  }
  const claim = trimWords(hook.replace(/^but\s+/i, "").trim(), 24);
  return {
    topic,
    answer:
      `Practice answer, not a researched explanation. The last twist was: ${claim}. ` +
      `A live model would give the real cause. This stand-in keeps the loop connected for a local test with no key.`,
    hook: `But “${trimWords(focus, 8)}” still hides the ${step} ${mark}.`,
    _provider: "mock",
  };
}

export function mockAsk(question: string): DiveResponse {
  const trimmed = question.trim().replace(/\?+$/, "");
  const topic = /^why\b/i.test(trimmed)
    ? `${trimmed}?`
    : `Why is this worth asking: ${lowerFirst(trimmed)}?`;
  const focus = trimWords(lowerFirst(trimmed.replace(/^why\s+/i, "")), 8);
  return {
    topic,
    answer:
      `Practice answer, not a researched explanation. You asked: ${trimWords(question, 20)}. ` +
      `A live model would answer for real. This stand-in opens a trail so the loop can be tested with no key.`,
    hook: `But “${focus}” depends on a cause this practice card will not pretend to know.`,
    _provider: "mock",
  };
}

export function priorTopics(history: HistoryItem[]): string[] {
  return history.map((item) => item.topic);
}
