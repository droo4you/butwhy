import type { DiveErrorCode } from "@/types";

export const COPY = {
  no_provider:
    "You hit bedrock. This trail was written all the way down, and that last card is the bottom.",
  no_provider_ask:
    "Nothing on the shelf is that exact question. The closest written trails are below, and they already go to bedrock.",
  model_error:
    "The next answer did not come back. Nothing was invented to fill the gap.",
  unsafe:
    "That question is not one this trail can follow. Try something you would ask out loud at the dinner table.",
  invalid: "That did not come through as a question. Try a short why, in a sentence or two.",
  too_deep:
    "This hole stops twelve steps past the start. Climb the trail and pick another thread.",
  budget:
    "The live storyteller is resting after a lot of questions. Written trails still work, and live questions open again when this server wakes up fresh.",
  repeat:
    "The next answer would have repeated a question already on this trail, so it was left out.",
} as const;

const STATUS: Record<DiveErrorCode, number> = {
  invalid: 400,
  unsafe: 422,
  rate_limited: 429,
  too_deep: 409,
  repeat: 409,
  model_error: 502,
  no_provider: 503,
  budget: 503,
};

export class DiveError extends Error {
  readonly code: DiveErrorCode;
  readonly retryAfter?: number;

  constructor(code: DiveErrorCode, message: string, retryAfter?: number) {
    super(message);
    this.name = "DiveError";
    this.code = code;
    this.retryAfter = retryAfter;
  }
}

export function statusFor(code: DiveErrorCode): number {
  return STATUS[code];
}

export const RETRYABLE_CODES = new Set<DiveErrorCode>([
  "model_error",
  "rate_limited",
  "budget",
  "repeat",
]);
