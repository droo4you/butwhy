"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { SEEDS } from "@/data/seeds";
import { matchSeed } from "@/lib/match";
import { assessQuestion, cleanQuestion } from "@/lib/safety";
import { T } from "@/lib/tokens";

const SUGGESTIONS = SEEDS.filter((seed) => seed.listed === false).map((seed) => seed.topic);

export default function AskForm({ autoFocus = false }: { autoFocus?: boolean }) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [problem, setProblem] = useState<string | null>(null);

  function go(raw: string) {
    const question = cleanQuestion(raw);
    const check = assessQuestion(question);
    if (!check.ok) {
      setProblem(check.message);
      return;
    }
    setProblem(null);
    const seed = matchSeed(question);
    if (seed) {
      router.push(`/topic/${seed.id}`);
      return;
    }
    router.push(`/ask?q=${encodeURIComponent(question)}`);
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    go(value);
  }

  return (
    <form onSubmit={onSubmit} aria-describedby={problem ? "ask-problem" : undefined}>
      <div className="ask-row">
        <label className="sr-only" htmlFor="ask-question">
          Ask your own question
        </label>
        <input
          id="ask-question"
          className="ask-input"
          name="q"
          value={value}
          autoFocus={autoFocus}
          maxLength={180}
          enterKeyHint="search"
          placeholder="Why is the sky blue?"
          onChange={(event) => {
            setValue(event.target.value);
            if (problem) setProblem(null);
          }}
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            color: T.ink,
            background: T.paper,
            border: `1px solid ${T.rule}`,
            borderRadius: 2,
            padding: "12px 14px",
          }}
        />
        <button
          className="ask-submit"
          type="submit"
          style={{
            background: T.ink,
            color: T.paper,
            border: "none",
            minHeight: 48,
            padding: "12px 18px",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.04em",
            cursor: "pointer",
            borderRadius: 2,
          }}
        >
          Ask
        </button>
      </div>
      <ul className="chip-row">
        {SUGGESTIONS.map((suggestion) => (
          <li key={suggestion}>
            <button
              type="button"
              onClick={() => {
                setValue(suggestion);
                go(suggestion);
              }}
              style={{
                background: T.paper,
                color: T.inkLight,
                border: `1px solid ${T.rule}`,
                borderRadius: 999,
                minHeight: 36,
                padding: "6px 12px",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {suggestion}
            </button>
          </li>
        ))}
      </ul>
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 13,
          color: T.inkFaint,
          margin: "10px 0 0",
        }}
      >
        Keep it to something you would ask out loud.
      </p>
      {problem && (
        <p
          id="ask-problem"
          role="alert"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 14,
            color: T.accent,
            margin: "8px 0 0",
          }}
        >
          {problem}
        </p>
      )}
    </form>
  );
}
