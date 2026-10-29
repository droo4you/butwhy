export type ProviderName = "groq" | "gemini" | "openai" | "claude";

const DEFAULT_MODELS: Record<ProviderName, string> = {
  groq: "llama-3.1-8b-instant",
  gemini: "gemini-2.5-flash-lite",
  openai: "gpt-4o-mini",
  claude: "claude-haiku-4-5-20251001",
};

const KEY_NAMES: Record<ProviderName, string> = {
  groq: "GROQ_API_KEY",
  gemini: "GEMINI_API_KEY",
  openai: "OPENAI_API_KEY",
  claude: "ANTHROPIC_API_KEY",
};

const MODEL_NAMES: Record<ProviderName, string> = {
  groq: "GROQ_MODEL",
  gemini: "GEMINI_MODEL",
  openai: "OPENAI_MODEL",
  claude: "ANTHROPIC_MODEL",
};

/** Dynamic lookup so keys stay runtime values on Vercel, not build-time blanks. */
export function env(name: string): string {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

export interface LiveProvider {
  kind: "live";
  provider: ProviderName;
  model: string;
  apiKey: string;
}

export interface MockProvider {
  kind: "mock";
}

export interface NoProvider {
  kind: "none";
}

export type ResolvedProvider = LiveProvider | MockProvider | NoProvider;

export const PROVIDER_ORDER: ProviderName[] = ["groq", "gemini", "openai", "claude"];

export function providerKey(provider: ProviderName): string {
  return env(KEY_NAMES[provider]);
}

export function providerModel(provider: ProviderName, useGlobalOverride: boolean): string {
  if (useGlobalOverride) {
    const globalOverride = env("LLM_MODEL");
    if (globalOverride) return globalOverride;
  }
  return env(MODEL_NAMES[provider]) || DEFAULT_MODELS[provider];
}

/**
 * off (the default): written trails only. No model call, even if a key is present.
 * auto: cheapest configured provider first (Groq 8B, then Gemini Flash-Lite).
 * A named provider is used alone, so cost stays predictable.
 * mock is local only. Vercel production never serves practice cards.
 */
export function resolveProvider(): ResolvedProvider {
  const choice = (env("LLM_PROVIDER") || "off").toLowerCase();
  if (choice === "off" || choice === "none" || choice === "preset" || choice === "") {
    return { kind: "none" };
  }
  if (choice === "mock") {
    if (env("VERCEL_ENV") === "production") {
      console.warn("[llm] LLM_PROVIDER=mock is ignored in production");
      return { kind: "none" };
    }
    return { kind: "mock" };
  }

  const named = PROVIDER_ORDER.find((provider) => provider === choice);
  if (named) {
    const apiKey = providerKey(named);
    if (!apiKey) return { kind: "none" };
    return {
      kind: "live",
      provider: named,
      model: providerModel(named, true),
      apiKey,
    };
  }

  for (const provider of PROVIDER_ORDER) {
    const apiKey = providerKey(provider);
    if (!apiKey) continue;
    return {
      kind: "live",
      provider,
      model: providerModel(provider, false),
      apiKey,
    };
  }
  return { kind: "none" };
}

export function fallbackProviders(primary: ProviderName): LiveProvider[] {
  const found: LiveProvider[] = [];
  for (const provider of PROVIDER_ORDER) {
    if (provider === primary) continue;
    const apiKey = providerKey(provider);
    if (!apiKey) continue;
    found.push({
      kind: "live",
      provider,
      model: providerModel(provider, false),
      apiKey,
    });
  }
  return found;
}

export function callBudget(): number {
  const raw = Number(env("LLM_CALL_BUDGET") || "200");
  if (!Number.isFinite(raw) || raw < 1) return 200;
  return Math.floor(raw);
}
