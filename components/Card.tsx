"use client";

import { T, CAT_COLORS, CAT_LABELS, PROVIDER_LABELS } from "@/lib/tokens";
import type { CardData } from "@/types";
import DepthRuler from "./DepthRuler";

interface CardProps {
  card: CardData;
  onButWhy: (card: CardData) => void;
  isLatest: boolean;
  isLoading: boolean;
  error?: { message: string; retryable: boolean } | null;
  onRetry?: () => void;
}

export default function Card({
  card,
  onButWhy,
  isLatest,
  isLoading,
  error,
  onRetry,
}: CardProps) {
  const catColor = CAT_COLORS[card.cat] || T.inkFaint;
  const label = CAT_LABELS[card.cat] || card.cat;
  const provider = card._provider ? PROVIDER_LABELS[card._provider] : undefined;
  const practice = card._provider === "mock";

  return (
    <article
      className="trail-card"
      aria-labelledby={`q-${card.id}`}
      style={{
        minHeight: "calc(100svh - 5.5rem)",
        background: T.paper,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(28px, 6vw, 72px) clamp(20px, 5vw, 28px) clamp(48px, 8vw, 72px)",
        position: "relative",
        borderBottom: `1px solid ${T.rule}`,
      }}
    >
      <DepthRuler depth={card.depth} />
      <div
        className={card.depth > 0 ? "card-copy card-copy-deep" : "card-copy"}
        style={{ maxWidth: 580, width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "8px 10px",
            marginBottom: 18,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: catColor,
              letterSpacing: card.cat === "question" ? "0.04em" : "0.14em",
              textTransform: card.cat === "question" ? "none" : "uppercase",
            }}
          >
            <span aria-hidden="true">{card.emoji} </span>
            {label}
          </span>
          {card.depth > 0 && (
            <span
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 12,
                color: T.inkFaint,
              }}
            >
              {card.depth === 1 ? "1 level deep" : `${card.depth} levels deep`}
            </span>
          )}
          {provider && !practice && (
            <span
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 12,
                color: T.inkFaint,
              }}
            >
              {provider}
            </span>
          )}
        </div>

        {practice && (
          <p
            role="note"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13,
              lineHeight: 1.5,
              color: T.ink,
              background: T.cream,
              borderLeft: `3px solid ${T.accent}`,
              padding: "10px 12px",
              margin: "0 0 18px",
            }}
          >
            Practice mode. This card is a labeled stand-in, not a researched answer.
          </p>
        )}

        <h2
          id={`q-${card.id}`}
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "clamp(26px, 5vw, 40px)",
            fontWeight: 700,
            color: T.ink,
            lineHeight: 1.18,
            margin: "0 0 22px",
            letterSpacing: "-0.02em",
          }}
        >
          {card.topic}
        </h2>

        <div
          aria-hidden="true"
          style={{ width: 48, height: 2, background: T.ink, marginBottom: 22 }}
        />

        <p
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "clamp(16px, 2.4vw, 18px)",
            color: T.inkLight,
            lineHeight: 1.75,
            margin: "0 0 28px",
          }}
        >
          {card.answer}
        </p>

        <blockquote
          style={{
            borderLeft: `3px solid ${T.accent}`,
            paddingLeft: 18,
            margin: "0 0 36px 4px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-baskerville), Georgia, serif",
              fontSize: "clamp(16px, 2.3vw, 18px)",
              color: T.accent,
              lineHeight: 1.65,
              fontStyle: "italic",
              margin: 0,
            }}
          >
            {card.hook}
          </p>
        </blockquote>

        {isLatest && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14 }}>
            <button
              type="button"
              onClick={() => onButWhy(card)}
              disabled={isLoading}
              aria-busy={isLoading}
              style={{
                background: isLoading ? T.warm : T.ink,
                border: "none",
                color: isLoading ? T.inkLight : T.paper,
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 15,
                fontWeight: 600,
                minHeight: 48,
                padding: "12px 22px",
                borderRadius: 2,
                cursor: isLoading ? "wait" : "pointer",
                letterSpacing: "0.04em",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {isLoading ? (
                <>
                  <span className="spinner" aria-hidden="true" />
                  Following that but…
                </>
              ) : (
                "But Why? →"
              )}
            </button>
            {!isLoading && !error && (
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13,
                  color: T.inkFaint,
                  margin: 0,
                }}
              >
                The next why follows that But.
              </p>
            )}
            {error && (
              <div
                role="alert"
                style={{
                  maxWidth: 460,
                  borderLeft: `3px solid ${T.accent}`,
                  background: T.cream,
                  padding: "14px 16px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-baskerville), Georgia, serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: T.ink,
                    margin: "0 0 8px",
                  }}
                >
                  This trail pauses here
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: T.inkLight,
                    margin: 0,
                  }}
                >
                  {error.message}
                </p>
                {error.retryable && onRetry && (
                  <button
                    type="button"
                    onClick={onRetry}
                    style={{
                      marginTop: 12,
                      background: "transparent",
                      border: `1px solid ${T.ink}`,
                      color: T.ink,
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      minHeight: 44,
                      padding: "8px 14px",
                      cursor: "pointer",
                    }}
                  >
                    Try that why again
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
