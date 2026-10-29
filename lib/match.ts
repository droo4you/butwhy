import { SEEDS } from "@/data/seeds";
import { tokens } from "@/lib/text";
import type { SeedTopic } from "@/types";

function keyOf(input: string): string {
  return tokens(input, 3).join(" ");
}

/**
 * Route a typed question onto a written trail when it is the same ask.
 * Loose matches allow a word or two of extra filler ("so", "really")
 * and nothing more, so nearby topics do not steal the question.
 */
export function matchSeed(question: string): SeedTopic | null {
  const qTokens = tokens(question, 3);
  if (qTokens.length === 0) return null;
  const qKey = qTokens.join(" ");

  let loose: SeedTopic | null = null;
  for (const seed of SEEDS) {
    const tTokens = tokens(seed.topic, 3);
    if (tTokens.join(" ") === qKey) return seed;
    if (loose || tTokens.length < 2) continue;
    const extra = qTokens.length - tTokens.length;
    const seedCovers =
      tTokens.every((word) => qTokens.includes(word)) && extra >= 0 && extra <= 2;
    const questionCovers =
      qTokens.length >= 2 &&
      qTokens.every((word) => tTokens.includes(word)) &&
      tTokens.length - qTokens.length <= 1;
    if (seedCovers || questionCovers) loose = seed;
  }
  return loose;
}

export function seedTokenKey(topic: string): string {
  return keyOf(topic);
}
