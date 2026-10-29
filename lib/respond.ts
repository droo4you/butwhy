import { NextResponse } from "next/server";
import { COPY, DiveError, statusFor } from "@/lib/errors";

export function respond(
  body: unknown,
  status = 200,
  extra?: Record<string, string>
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      ...extra,
    },
  });
}

export function respondError(error: unknown, logLabel: string) {
  if (error instanceof DiveError) {
    const headers: Record<string, string> = {};
    if (error.retryAfter) headers["Retry-After"] = String(error.retryAfter);
    return respond({ error: error.message, code: error.code }, statusFor(error.code), headers);
  }
  const message = error instanceof Error ? error.message : "unknown";
  console.error(logLabel, message.slice(0, 240));
  return respond({ error: COPY.model_error, code: "model_error" }, 502);
}
