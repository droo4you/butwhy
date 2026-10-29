import { COPY } from "@/lib/errors";
import type { DiveErrorCode } from "@/types";

const CHILD =
  /\b(child|children|kid|kids|minor|minors|toddler|toddlers|preteen|underage|baby|babies|infant|infants|teen|teens)\b/i;

const SEXUAL_CONTEXT =
  /\b(sex|sexual|porn|nude|nudes|naked|rape|molest|penis|vagina|erotic|nsfw|xxx|intercourse|genital|genitals)\b/i;

const EXPLICIT =
  /\b(porn|pornography|hentai|nsfw|xxx|erotic|orgasm|blowjob|handjob|masturbat\w*|rape|molest\w*|incest|boobs|horny|whore|slut)\b|\b(dick|pussy|cock)s?\b/i;

const SLUR =
  /\b(nigger|nigga|faggot|fag|retard|tranny|kike|spic|chink|wetback)\b/i;

const SELF_HARM =
  /\b(suicide|suicidal|kill myself|killing myself|self-harm|self harm|cut myself|hang myself|want to die|end my life)\b/i;

const HOWTO_HARM =
  /\bhow (?:do i |to |can i )?(?:make|build|create|assemble) (?:a |an )?(?:bomb|explosive|gun|weapon|meth|poison)\b|\bhow (?:do i |to |can i )(?:hack|steal|murder|kill)\b/i;

const INJECTION =
  /\bignore (?:all |any |the )?(?:previous |prior |above )?instructions\b|\b(system prompt|developer message)\b/i;

export type SafetyResult =
  | { ok: true }
  | { ok: false; code: Extract<DiveErrorCode, "invalid" | "unsafe">; message: string };

export function cleanQuestion(raw: unknown): string {
  if (typeof raw !== "string") return "";
  return raw
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180);
}

export function isUnsafe(text: string): boolean {
  if (CHILD.test(text) && SEXUAL_CONTEXT.test(text)) return true;
  if (EXPLICIT.test(text)) return true;
  if (SLUR.test(text)) return true;
  if (SELF_HARM.test(text)) return true;
  if (HOWTO_HARM.test(text)) return true;
  return false;
}

export function assessQuestion(question: string): SafetyResult {
  const letters = question.match(/[a-z]/gi)?.length ?? 0;
  if (question.length < 8 || letters < 6) {
    return { ok: false, code: "invalid", message: COPY.invalid };
  }
  if (!/\s/.test(question) && !question.includes("?")) {
    return { ok: false, code: "invalid", message: COPY.invalid };
  }
  const collapsed = question.toLowerCase().replace(/[^a-z]/g, "");
  if (collapsed.length >= 8 && /^(.)\1+$/.test(collapsed)) {
    return { ok: false, code: "invalid", message: COPY.invalid };
  }
  if (INJECTION.test(question)) {
    return { ok: false, code: "invalid", message: COPY.invalid };
  }
  if (isUnsafe(question)) {
    return { ok: false, code: "unsafe", message: COPY.unsafe };
  }
  return { ok: true };
}

export function assertSafeText(text: string): SafetyResult {
  if (isUnsafe(text) || INJECTION.test(text)) {
    return { ok: false, code: "unsafe", message: COPY.unsafe };
  }
  return { ok: true };
}
