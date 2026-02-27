"use client";

import { CardData } from "@/types";
import { T } from "@/lib/tokens";

interface BreadcrumbBarProps {
  chain: CardData[];
  onJumpTo: (index: number) => void;
}

export default function BreadcrumbBar({ chain, onJumpTo }: BreadcrumbBarProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: T.ink,
        height: "38px",
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        gap: "0",
        overflowX: "auto",
        scrollbarWidth: "none",
      }}
    >
      <style>{`.bc::-webkit-scrollbar{display:none}`}</style>
      {chain.map((card, i) => (
        <button
          key={card.id}
          onClick={() => onJumpTo(i)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0",
            padding: "0",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "11px",
              color: i === chain.length - 1 ? T.paper : T.inkMuted,
              fontWeight: i === chain.length - 1 ? 600 : 400,
              maxWidth: "120px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              padding: "0 4px",
            }}
          >
            {card.emoji} {card.topic.replace(/^Why /i, "").slice(0, 28)}…
          </span>
          {i < chain.length - 1 && (
            <span
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "11px",
                color: T.inkFaint,
                padding: "0 2px",
              }}
            >
              /
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
