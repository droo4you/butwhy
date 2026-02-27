"use client";

import { CardData } from "@/types";
import { T, CAT_COLORS } from "@/lib/tokens";

interface MapOverlayProps {
  chain: CardData[];
  onClose: () => void;
  onJumpTo: (index: number) => void;
}

export default function MapOverlay({
  chain,
  onClose,
  onJumpTo,
}: MapOverlayProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(28,24,18,0.96)",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={onClose}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px 24px 16px",
          borderBottom: "1px solid rgba(200,191,168,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-baskerville), Georgia, serif",
              fontSize: "18px",
              fontWeight: 700,
              color: T.paper,
            }}
          >
            Your rabbit hole
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "12px",
              color: T.inkMuted,
              marginLeft: "12px",
            }}
          >
            {chain.length} {chain.length === 1 ? "level" : "levels"} deep
          </span>
        </div>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "1px solid rgba(200,191,168,0.3)",
            color: T.inkMuted,
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "12px",
            padding: "6px 14px",
            borderRadius: "2px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>

      {/* Chain list */}
      <div
        style={{ overflowY: "auto", padding: "20px 24px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {chain.map((card, i) => {
          const catColor = CAT_COLORS[card.cat] || T.inkFaint;
          return (
            <button
              key={card.id}
              onClick={() => {
                onJumpTo(i);
                onClose();
              }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "14px 0",
                borderBottom: "1px solid rgba(200,191,168,0.12)",
              }}
            >
              {/* Depth indicator */}
              <div
                style={{
                  flexShrink: 0,
                  marginTop: "3px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: i === 0 ? catColor : "rgba(200,191,168,0.15)",
                    border: `1px solid ${i === 0 ? catColor : "rgba(200,191,168,0.3)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                  }}
                >
                  {card.emoji}
                </div>
                {i < chain.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      height: "100%",
                      minHeight: "16px",
                      background: "rgba(200,191,168,0.2)",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "10px",
                    color: catColor,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {i === 0 ? "Start" : `Level ${i}`}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-baskerville), Georgia, serif",
                    fontSize: "15px",
                    color: T.paper,
                    lineHeight: 1.4,
                    marginBottom: "4px",
                  }}
                >
                  {card.topic}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "11px",
                    color: T.inkFaint,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {card.hook}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
