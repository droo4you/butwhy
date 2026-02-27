export type Category =
  | "science"
  | "history"
  | "nature"
  | "philosophy"
  | "food"
  | "everyday";

export interface SeedTopic {
  id: string;
  cat: Category;
  emoji: string;
  topic: string;
  answer: string;
  hook: string;
}

export interface CardData extends SeedTopic {
  depth: number;
  parentId: string | null;
  _provider?: string;
}

export interface DiveResponse {
  topic: string;
  answer: string;
  hook: string;
  _provider: string;
}

// Supabase DB shapes (used in Session 3)
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
