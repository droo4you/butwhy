"use client";

import { CardData } from "@/types";
import { T, CAT_COLORS, PROVIDER_LABELS } from "@/lib/tokens";
import DepthRuler from "./DepthRuler";

interface CardProps {
  card: CardData;
  onButWhy: (card: CardData) => void;
  isLatest: boolean;
  isLoading: boolean;
}

export default function Card({
  card,
  onButWhy,
  isLatest,
  isLoading,
}: CardProps) {
  const catColor = CAT_COLORS[card.cat] || T.inkFaint;

  return (
    <div
      style={{
        minHeight: "100svh",
        background: T.paper,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 28px 60px",
        position: "relative",
        borderBottom: `1px solid ${T.rule}`,
      }}
    >
      <DepthRuler depth={card.depth} />

      <div
        style={{
          maxWidth: "580px",
          width: "100%",
          paddingLeft: card.depth > 0 ? "24px" : "0",
        }}
      >
        {/* Category label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "18px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              color: catColor,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {card.emoji} {card.cat}
          </span>
          {card.depth > 0 && (
            <>
              <span style={{ color: T.rule }}>·</span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "10px",
                  color: T.inkMuted,
                }}
              >
                {card.depth === 1 ? "1 level deep" : `${card.depth} levels deep`}
              </span>
            </>
          )}
          {card._provider && card._provider !== "fallback" && (
            <>
              <span style={{ color: T.rule }}>·</span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "10px",
                  color: T.inkMuted,
                }}
              >
                via {PROVIDER_LABELS[card._provider] ?? card._provider}
              </span>
            </>
          )}
        </div>

        {/* Question headline */}
        <h2
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "clamp(24px, 5vw, 38px)",
            fontWeight: 700,
            color: T.ink,
            lineHeight: 1.18,
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          {card.topic}
        </h2>

        {/* Thin rule */}
        <div
          style={{
            width: "48px",
            height: "2px",
            background: T.ink,
            marginBottom: "22px",
          }}
        />

        {/* Answer */}
        <p
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "clamp(15px, 2.5vw, 18px)",
            color: T.inkLight,
            lineHeight: 1.85,
            marginBottom: "28px",
          }}
        >
          {card.answer}
        </p>

        {/* Hook — pull-quote style */}
        <div
          style={{
            borderLeft: `3px solid ${T.accent}`,
            paddingLeft: "18px",
            marginBottom: "44px",
            marginLeft: "4px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-baskerville), Georgia, serif",
              fontSize: "clamp(14px, 2.2vw, 17px)",
              color: T.accentSoft,
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            {card.hook}
          </p>
        </div>

        {/* But Why button — only on the latest card */}
        {isLatest && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <button
              onClick={() => onButWhy(card)}
              disabled={isLoading}
              onMouseEnter={(e) => {
                if (!isLoading)
                  e.currentTarget.style.background = T.inkLight;
              }}
              onMouseLeave={(e) => {
                if (!isLoading)
                  e.currentTarget.style.background = T.ink;
              }}
              style={{
                background: isLoading ? T.warm : T.ink,
                border: "none",
                color: isLoading ? T.inkMuted : T.paper,
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "2px",
                cursor: isLoading ? "default" : "pointer",
                letterSpacing: "0.05em",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {isLoading ? (
                <>
                  <span
                    style={{
                      display: "inline-block",
                      animation: "spin 1s linear infinite",
                    }}
                  >
                    ◌
                  </span>
                  Digging deeper…
                </>
              ) : (
                <>But Why? →</>
              )}
            </button>
            {!isLoading && (
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "11px",
                  color: T.inkMuted,
                  fontStyle: "italic",
                }}
              >
                Scroll down after tapping
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
