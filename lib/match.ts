import { ALIASES } from "@/data/aliases";
import { SEEDS } from "@/data/seeds";
import { normalize, tokens } from "@/lib/text";
import type { SeedTopic } from "@/types";

function stem(word: string): string {
  if (word.length > 4 && word.endsWith("es") && !word.endsWith("ses")) return word.slice(0, -2);
  if (word.length > 4 && word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
  return word;
}

function wordSet(input: string): Set<string> {
  return new Set(tokens(input, 3).map(stem));
}

export interface RankedSeed {
  seed: SeedTopic;
  score: number;
}

export function rankSeeds(question: string): RankedSeed[] {
  const qWords = Array.from(wordSet(question));
  if (qWords.length === 0) return [];
  const normalizedQ = normalize(question);
  const ranked: RankedSeed[] = [];

  for (const seed of SEEDS) {
    const aliases = ALIASES[seed.id] ?? [];
    const hay = wordSet(`${seed.topic} ${aliases.join(" ")}`);
    let hits = 0;
    for (const word of qWords) if (hay.has(word)) hits += 1;
    let score = hits / qWords.length;
    for (const alias of aliases) {
      const phrase = normalize(alias);
      if (phrase.length >= 4 && normalizedQ.includes(phrase)) score = Math.max(score, 0.92);
    }
    if (tokens(seed.topic, 3).join(" ") === tokens(question, 3).join(" ")) score = 1;
    if (score > 0) ranked.push({ seed, score });
  }

  ranked.sort((a, b) => b.score - a.score || a.seed.topic.length - b.seed.topic.length);
  return ranked;
}

/**
 * Open a written trail when the typed question is clearly the same ask.
 * A near miss stays unmatched so the shelf can suggest a few trails instead.
 */
export function matchSeed(question: string): SeedTopic | null {
  const exactKey = tokens(question, 3).join(" ");
  for (const seed of SEEDS) {
    if (tokens(seed.topic, 3).join(" ") === exactKey) return seed;
  }

  const ranked = rankSeeds(question);
  const top = ranked[0];
  if (!top) return null;
  const second = ranked[1];
  const clear = !second || top.score - second.score >= 0.15;
  const qCount = wordSet(question).size;
  const strong = top.score >= 0.8 || (top.score >= 0.67 && qCount >= 2);
  if (strong && clear) return top.seed;
  return null;
}

const SHELF_SAMPLES = ["s1", "g1", "w1", "m1", "y1", "s2"];

export function suggestSeeds(question: string, limit = 3): { seeds: SeedTopic[]; close: boolean } {
  const closeOnes = rankSeeds(question).filter((row) => row.score >= 0.34);
  if (closeOnes.length > 0) {
    return { seeds: closeOnes.slice(0, limit).map((row) => row.seed), close: true };
  }
  const samples = SHELF_SAMPLES.map((id) => SEEDS.find((seed) => seed.id === id)).filter(
    (seed): seed is SeedTopic => Boolean(seed)
  );
  return { seeds: samples.slice(0, limit), close: false };
}

export function seedTokenKey(topic: string): string {
  return tokens(topic, 3).join(" ");
}
