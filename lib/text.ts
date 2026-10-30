const STOP = new Set([
  "why", "does", "what", "that", "this", "with", "from", "have", "been", "were",
  "was", "but", "the", "and", "for", "its", "into", "over", "they", "them",
  "their", "than", "then", "some", "more", "most", "very", "just", "only",
  "also", "when", "where", "which", "while", "about", "because", "there",
  "here", "would", "could", "should", "might", "still", "even", "each",
  "other", "such", "your", "are", "has", "had", "his", "her", "she", "him",
  "who", "how", "all", "any", "our", "out", "off", "too", "via", "per", "may",
  "can", "did", "not", "you", "like", "make", "made", "many", "much", "same",
  "back", "down", "around", "along", "away", "after", "before", "again",
  "across", "under", "between", "through", "during", "without", "within",
  "another", "every", "always", "never", "really", "actually", "something",
  "someone", "people", "human", "humans", "onto", "upon", "dont", "isnt",
  "its", "cant", "wont", "will", "shall", "must", "need", "needs", "keep",
  "kept", "come", "came", "going", "goes", "went", "ever", "once", "let",
  "got", "get", "now", "nor", "yes", "own", "both", "few", "further", "above",
  "below", "since", "whose", "whom", "itself", "theyre", "youre", "thats",
  "whats", "heres", "arent", "wasnt", "werent", "doesnt", "didnt", "havent",
  "hasnt", "hadnt", "wouldnt", "couldnt", "shouldnt", "ourselves",
  "themselves", "yourself", "been", "being", "into", "from", "with", "this",
  "that", "those", "these", "them", "then", "than", "very", "just", "only",
]);

export function normalize(input: string): string {
  return input
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokens(input: string, minLen = 3): string[] {
  return normalize(input)
    .split(" ")
    .filter((word) => word.length >= minLen && !STOP.has(word));
}

export function sharesContentWord(a: string, b: string): boolean {
  const right = new Set(tokens(b, 4));
  return tokens(a, 4).some((word) => right.has(word));
}

/** True when two questions are the same ask, not merely about a shared noun. */
export function tooSimilar(a: string, b: string): boolean {
  const left = normalize(a);
  const right = normalize(b);
  if (!left || !right) return false;
  if (left === right) return true;
  const ta = tokens(a, 3);
  const tb = tokens(b, 3);
  if (ta.length === 0 || tb.length === 0) return false;
  const setB = new Set(tb);
  let overlap = 0;
  for (const word of ta) if (setB.has(word)) overlap += 1;
  const union = new Set([...ta, ...tb]).size;
  return overlap >= 3 && union > 0 && overlap / union >= 0.72;
}

export function trimWords(input: string, max: number): string {
  const words = input.replace(/\s+/g, " ").trim().split(" ");
  if (words.length <= max) return words.join(" ");
  return words.slice(0, max).join(" ");
}

export function lowerFirst(input: string): string {
  if (!input) return input;
  return input.charAt(0).toLowerCase() + input.slice(1);
}
