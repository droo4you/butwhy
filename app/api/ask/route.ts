import { NextRequest } from "next/server";
import { answerQuestion } from "@/lib/dive";
import { DiveError, COPY } from "@/lib/errors";
import { clientIp } from "@/lib/rate-limit";
import { respond, respondError } from "@/lib/respond";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const length = Number(req.headers.get("content-length") || "0");
    if (Number.isFinite(length) && length > 8_000) {
      throw new DiveError("invalid", COPY.invalid);
    }
    const body = await req.json().catch(() => {
      throw new DiveError("invalid", COPY.invalid);
    });
    const question =
      body && typeof body === "object" && "question" in body
        ? (body as { question?: unknown }).question
        : undefined;
    const result = await answerQuestion(
      question,
      clientIp(req.headers.get("x-forwarded-for"), req.headers.get("x-real-ip"))
    );
    if ("redirect" in result) return respond({ redirect: result.redirect });
    return respond({ card: result });
  } catch (error) {
    return respondError(error, "[/api/ask]");
  }
}
