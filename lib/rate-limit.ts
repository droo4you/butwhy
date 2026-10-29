import { DiveError } from "@/lib/errors";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 24;
const buckets = new Map<string, number[]>();

export function clientIp(headerValue: string | null, realIp: string | null): string {
  const forwarded = headerValue?.split(",")[0]?.trim();
  const ip = forwarded || realIp || "local";
  return ip.slice(0, 64) || "local";
}

/**
 * Best-effort limiter. On Vercel each instance has its own memory,
 * so this slows a hot loop on one instance. It is not a global quota.
 * Preset trails never call this.
 */
export function enforceRateLimit(ip: string): void {
  const now = Date.now();
  const recent = (buckets.get(ip) ?? []).filter((stamp) => now - stamp < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    const retryAfter = Math.max(1, Math.ceil((recent[0]! + WINDOW_MS - now) / 1000));
    throw new DiveError(
      "rate_limited",
      `That is a lot of whys in a short time. Wait about ${retryAfter} seconds, then ask again.`,
      retryAfter
    );
  }
  recent.push(now);
  buckets.set(ip, recent);
  if (buckets.size > 5000) {
    const oldest = buckets.keys().next().value;
    if (oldest) buckets.delete(oldest);
  }
}
