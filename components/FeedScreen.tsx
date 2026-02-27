"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SEEDS } from "@/data/seeds";
import { Category, SeedTopic } from "@/types";
import { T, CAT_COLORS } from "@/lib/tokens";

const CATS: { id: Category | "all"; label: string }[] = [
  { id: "all",        label: "All" },
  { id: "science",    label: "Science" },
  { id: "history",    label: "History" },
  { id: "nature",     label: "Nature" },
  { id: "philosophy", label: "Philosophy" },
  { id: "food",       label: "Food" },
  { id: "everyday",   label: "Everyday" },
];

export default function FeedScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");

  const filtered =
    activeFilter === "all"
      ? SEEDS
      : SEEDS.filter((s) => s.cat === activeFilter);

  function handleSelect(topic: SeedTopic) {
    router.push(`/topic/${topic.id}`);
  }

  return (
    <div style={{ background: T.paper, minHeight: "100svh" }}>
      {/* Masthead */}
      <div
        style={{
          padding: "clamp(40px,8vw,72px) 28px 32px",
          borderBottom: `1px solid ${T.rule}`,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "clamp(36px, 8vw, 64px)",
            fontWeight: 700,
            color: T.ink,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: "14px",
          }}
        >
          ButWhy
        </h1>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "clamp(13px, 2vw, 15px)",
            color: T.inkFaint,
            letterSpacing: "0.04em",
          }}
        >
          Pick a question. Go infinitely deeper.
        </p>
      </div>

      {/* Category filter — sticky */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: T.cream,
          borderBottom: `1px solid ${T.rule}`,
          padding: "0 20px",
          display: "flex",
          gap: "0",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {CATS.map((c) => {
          const isActive = activeFilter === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActiveFilter(c.id)}
              style={{
                background: "none",
                border: "none",
                borderBottom: `2px solid ${isActive ? T.ink : "transparent"}`,
                padding: "14px 14px 12px",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "12px",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? T.ink : T.inkFaint,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s, border-color 0.15s",
                letterSpacing: "0.04em",
              }}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Topic grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1px",
          background: T.rule,
          border: `1px solid ${T.rule}`,
          margin: "0",
        }}
      >
        {filtered.map((topic) => {
          const catColor = CAT_COLORS[topic.cat] || T.inkFaint;
          return (
            <button
              key={topic.id}
              onClick={() => handleSelect(topic)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = T.cream)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = T.paper)
              }
              style={{
                background: T.paper,
                border: "none",
                textAlign: "left",
                cursor: "pointer",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                transition: "background 0.15s",
              }}
            >
              {/* Cat badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "20px" }}>{topic.emoji}</span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: catColor,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {topic.cat}
                </span>
              </div>

              {/* Question */}
              <h3
                style={{
                  fontFamily: "var(--font-baskerville), Georgia, serif",
                  fontSize: "clamp(16px, 2.5vw, 20px)",
                  fontWeight: 700,
                  color: T.ink,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {topic.topic}
              </h3>

              {/* Hook preview */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "12px",
                  color: T.inkFaint,
                  lineHeight: 1.55,
                  margin: 0,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {topic.hook}
              </p>

              {/* CTA */}
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: T.accent,
                  letterSpacing: "0.06em",
                  marginTop: "4px",
                }}
              >
                But Why? →
              </span>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "32px 28px",
          textAlign: "center",
          borderTop: `1px solid ${T.rule}`,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "11px",
            color: T.inkMuted,
            letterSpacing: "0.06em",
          }}
        >
          {SEEDS.length} rabbit holes. Each one bottomless.
        </p>
      </div>
    </div>
  );
}
