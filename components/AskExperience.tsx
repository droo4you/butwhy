"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { matchSeed } from "@/lib/match";
import { assessQuestion, cleanQuestion } from "@/lib/safety";
import { T } from "@/lib/tokens";
import type { CardData, DiveResponse, TrailSuggestion } from "@/types";
import AskForm from "./AskForm";
import DiveScreen from "./DiveScreen";

type Phase = "form" | "loading" | "ready" | "error" | "suggest";

export default function AskExperience() {
  const params = useSearchParams();
  const router = useRouter();
  const raw = params.get("q")?.trim() ?? "";
  const [phase, setPhase] = useState<Phase>(raw ? "loading" : "form");
  const [root, setRoot] = useState<CardData | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<TrailSuggestion[]>([]);

  useEffect(() => {
    if (!raw) {
      setPhase("form");
      setRoot(null);
      setMessage(null);
      setSuggestions([]);
      return;
    }

    const question = cleanQuestion(raw);
    const check = assessQuestion(question);
    if (!check.ok) {
      setMessage(check.message);
      setPhase("error");
      return;
    }

    const seed = matchSeed(question);
    if (seed) {
      router.replace(`/topic/${seed.id}`);
      return;
    }

    let cancel = false;
    setPhase("loading");
    setMessage(null);

    fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    })
      .then(async (response) => {
        const data = (await response.json()) as {
          redirect?: string;
          card?: DiveResponse;
          error?: string;
          message?: string;
          suggestions?: TrailSuggestion[];
        };
        if (cancel) return;
        if (data.redirect) {
          router.replace(data.redirect);
          return;
        }
        if (response.ok && data.suggestions) {
          setSuggestions(data.suggestions);
          setMessage(data.message || "These written trails are close.");
          setPhase("suggest");
          return;
        }
        if (!response.ok || !data.card) {
          setMessage(
            data.error ||
              "That question is not on the written shelf yet. A live storyteller can take it once one is connected."
          );
          setPhase("error");
          return;
        }
        setRoot({
          id: "ask-root",
          cat: "question",
          emoji: "❓",
          depth: 0,
          parentId: null,
          topic: data.card.topic,
          answer: data.card.answer,
          hook: data.card.hook,
          _provider: data.card._provider,
        });
        setPhase("ready");
      })
      .catch(() => {
        if (cancel) return;
        setMessage("The next answer did not come back. Nothing was invented to fill the gap.");
        setPhase("error");
      });

    return () => {
      cancel = true;
    };
  }, [raw, router]);

  if (phase === "ready" && root) {
    return <DiveScreen root={root} presetId={null} />;
  }

  return (
    <div style={{ background: T.paper, minHeight: "100svh" }}>
      <header
        style={{
          minHeight: 52,
          borderBottom: `1px solid ${T.rule}`,
          padding: "6px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            color: T.inkFaint,
            textDecoration: "none",
            minHeight: 44,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          ← All topics
        </a>
        <span
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          ButWhy
        </span>
        <span style={{ width: 72 }} />
      </header>

      <main
        style={{
          maxWidth: 680,
          margin: "0 auto",
          padding: "clamp(32px, 8vw, 72px) 20px 64px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "clamp(28px, 5vw, 40px)",
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          Ask your own question
        </h1>

        {phase === "loading" && (
          <p
            role="status"
            style={{
              fontFamily: "var(--font-baskerville), Georgia, serif",
              fontSize: 18,
              color: T.inkFaint,
              fontStyle: "italic",
            }}
          >
            Following “{raw}”…
          </p>
        )}

        {phase === "suggest" && (
          <div role="status" style={{ marginBottom: 28 }}>
            <p
              style={{
                fontFamily: "var(--font-baskerville), Georgia, serif",
                fontSize: 22,
                margin: "0 0 8px",
              }}
            >
              Try a trail that is already written
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 15,
                lineHeight: 1.6,
                color: T.inkFaint,
                margin: "0 0 16px",
              }}
            >
              {message}
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 }}>
              {suggestions.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/topic/${item.id}`}
                    style={{
                      display: "block",
                      textDecoration: "none",
                      background: T.cream,
                      borderLeft: `3px solid ${T.accent}`,
                      padding: "12px 14px",
                      color: T.ink,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-baskerville), Georgia, serif",
                        fontSize: 18,
                        fontWeight: 700,
                      }}
                    >
                      <span aria-hidden="true">{item.emoji} </span>
                      {item.topic}
                    </span>
                    <span
                      style={{
                        display: "block",
                        marginTop: 4,
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 13,
                        color: T.inkFaint,
                        lineHeight: 1.45,
                      }}
                    >
                      {item.hook}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {phase === "error" && message && (
          <div
            role="alert"
            style={{
              borderLeft: `3px solid ${T.accent}`,
              background: T.cream,
              padding: "16px 18px",
              marginBottom: 24,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-baskerville), Georgia, serif",
                fontSize: 20,
                fontWeight: 700,
                margin: "0 0 8px",
              }}
            >
              This trail pauses here
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 15,
                lineHeight: 1.6,
                color: T.inkLight,
                margin: 0,
              }}
            >
              {message}
            </p>
          </div>
        )}

        {phase !== "loading" && <AskForm autoFocus={phase === "form"} />}
      </main>
    </div>
  );
}
