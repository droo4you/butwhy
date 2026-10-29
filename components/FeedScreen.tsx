"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LISTED_SEEDS } from "@/data/seeds";
import { T, CAT_COLORS, CAT_LABELS } from "@/lib/tokens";
import type { Category } from "@/types";
import AskForm from "./AskForm";

const CATS: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "science", label: "Science" },
  { id: "history", label: "History" },
  { id: "nature", label: "Nature" },
  { id: "philosophy", label: "Philosophy" },
  { id: "food", label: "Food" },
  { id: "everyday", label: "Everyday" },
];

export default function FeedScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");
  const filtered =
    activeFilter === "all"
      ? LISTED_SEEDS
      : LISTED_SEEDS.filter((seed) => seed.cat === activeFilter);

  return (
    <div style={{ background: T.paper, minHeight: "100svh" }}>
      <header
        style={{
          padding: "clamp(36px, 8vw, 72px) clamp(20px, 4vw, 28px) 28px",
          borderBottom: `1px solid ${T.rule}`,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: T.accent,
            margin: "0 0 12px",
          }}
        >
          Curiosity, one but deeper
        </p>
        <h1
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "clamp(40px, 8vw, 68px)",
            fontWeight: 700,
            color: T.ink,
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
            margin: "0 0 14px",
          }}
        >
          ButWhy
        </h1>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "clamp(15px, 2vw, 17px)",
            color: T.inkFaint,
            margin: 0,
            maxWidth: 460,
            lineHeight: 1.5,
          }}
        >
          Pick a question. Go deeper. Every answer ends with a But.
        </p>
      </header>

      <section
        aria-labelledby="ask-heading"
        style={{
          background: T.cream,
          borderBottom: `1px solid ${T.rule}`,
          padding: "28px clamp(20px, 4vw, 28px) 26px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2
            id="ask-heading"
            style={{
              fontFamily: "var(--font-baskerville), Georgia, serif",
              fontSize: "clamp(22px, 4vw, 28px)",
              margin: "0 0 6px",
              color: T.ink,
            }}
          >
            Ask your own question
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 14,
              color: T.inkFaint,
              margin: "0 0 16px",
            }}
          >
            A few already have a written trail. Anything else waits for a live model.
          </p>
          <AskForm />
        </div>
      </section>

      <div
        role="group"
        aria-label="Topic categories"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: T.cream,
          borderBottom: `1px solid ${T.rule}`,
          padding: "0 12px",
          display: "flex",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {CATS.map((category) => {
          const selected = activeFilter === category.id;
          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveFilter(category.id)}
              style={{
                background: "none",
                border: "none",
                borderBottom: `2px solid ${selected ? T.ink : "transparent"}`,
                padding: "14px 12px 12px",
                minHeight: 48,
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13,
                fontWeight: selected ? 600 : 400,
                color: selected ? T.ink : T.inkFaint,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <main className="topic-grid" aria-label="Questions">
        {filtered.map((topic) => {
          const catColor = CAT_COLORS[topic.cat] || T.inkFaint;
          return (
            <button
              key={topic.id}
              type="button"
              className="topic-card"
              onClick={() => router.push(`/topic/${topic.id}`)}
              style={{
                border: "none",
                borderTop: `3px solid ${catColor}`,
                textAlign: "left",
                cursor: "pointer",
                padding: "24px 22px 26px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                minHeight: 44,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  color: catColor,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                <span aria-hidden="true">{topic.emoji} </span>
                {CAT_LABELS[topic.cat]}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-baskerville), Georgia, serif",
                  fontSize: "clamp(18px, 2.4vw, 22px)",
                  fontWeight: 700,
                  color: T.ink,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                }}
              >
                {topic.topic}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13,
                  color: T.inkFaint,
                  lineHeight: 1.5,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {topic.hook}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: T.accent,
                  marginTop: 4,
                }}
              >
                But Why? →
              </span>
            </button>
          );
        })}
      </main>

      <footer
        style={{
          padding: "28px 20px 36px",
          textAlign: "center",
          borderTop: `1px solid ${T.rule}`,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            color: T.inkFaint,
            margin: "0 0 8px",
          }}
        >
          {LISTED_SEEDS.length} rabbit holes. Each opening answer has four more whys already written.
        </p>
        <p
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontStyle: "italic",
            fontSize: 15,
            color: T.inkLight,
            margin: 0,
          }}
        >
          Started on a lunch break, after a second grader would not stop asking why.
        </p>
      </footer>
    </div>
  );
}
