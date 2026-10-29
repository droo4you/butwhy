import { NextRequest } from "next/server";
import { DiveError, COPY } from "@/lib/errors";
import { nextCard, parseDiveBody } from "@/lib/dive";
import { clientIp } from "@/lib/rate-limit";
import { respond, respondError } from "@/lib/respond";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const length = Number(req.headers.get("content-length") || "0");
    if (Number.isFinite(length) && length > 20_000) {
      throw new DiveError("invalid", COPY.invalid);
    }
    const body = await req.json().catch(() => {
      throw new DiveError("invalid", COPY.invalid);
    });
    const parsed = parseDiveBody(body);
    const card = await nextCard({
      ...parsed,
      ip: clientIp(req.headers.get("x-forwarded-for"), req.headers.get("x-real-ip")),
    });
    return respond(card);
  } catch (error) {
    return respondError(error, "[/api/dive]");
  }
}
