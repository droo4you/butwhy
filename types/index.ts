export type Category =
  | "science"
  | "history"
  | "nature"
  | "philosophy"
  | "food"
  | "everyday"
  | "gamedev"
  | "web"
  | "music"
  | "body"
  | "question";

export interface TrailSuggestion {
  id: string;
  topic: string;
  hook: string;
  emoji: string;
  cat: Category;
}

export interface SeedTopic {
  id: string;
  cat: Category;
  emoji: string;
  topic: string;
  answer: string;
  hook: string;
  /** Hidden from the home grid. Still has a page and a written trail. */
  listed?: boolean;
}

export interface PresetCard {
  topic: string;
  answer: string;
  hook: string;
}

export interface CardData extends SeedTopic {
  depth: number;
  parentId: string | null;
  _provider?: string;
}

export interface HistoryItem {
  topic: string;
  hook: string;
}

export interface DiveResponse extends PresetCard {
  _provider: string;
}

export type DiveErrorCode =
  | "no_provider"
  | "model_error"
  | "unsafe"
  | "invalid"
  | "too_deep"
  | "rate_limited"
  | "budget"
  | "repeat";

export interface DiveErrorBody {
  error: string;
  code: DiveErrorCode;
}

// Supabase shapes kept for a future shareable-chain pass. Nothing writes them yet.
export interface ChainRecord {
  id: string;
  slug: string;
  seed_id: string;
  created_at: string;
  card_count: number;
}

export interface CardRecord {
  id: string;
  chain_id: string;
  parent_id: string | null;
  depth: number;
  topic: string;
  answer: string;
  hook: string;
  provider: string | null;
  created_at: string;
}
