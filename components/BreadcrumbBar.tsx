"use client";

import { useEffect, useRef } from "react";
import { T } from "@/lib/tokens";
import type { CardData } from "@/types";

interface BreadcrumbBarProps {
  chain: CardData[];
  onJumpTo: (index: number) => void;
}

export default function BreadcrumbBar({ chain, onJumpTo }: BreadcrumbBarProps) {
  const barRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    bar.scrollTo({ left: bar.scrollWidth, behavior: reduce ? "auto" : "smooth" });
  }, [chain.length]);

  return (
    <nav
      ref={barRef}
      aria-label="Questions in this trail"
      className="crumb-bar"
      style={{
        background: T.ink,
        minHeight: 48,
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        overflowX: "auto",
        gap: 0,
      }}
    >
      {chain.map((card, index) => {
        const current = index === chain.length - 1;
        return (
          <span
            key={card.id}
            style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}
          >
            {index > 0 && (
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13,
                  color: "#B7AB96",
                  padding: "0 4px",
                }}
              >
                →
              </span>
            )}
            <button
              type="button"
              onClick={() => onJumpTo(index)}
              aria-current={current ? "location" : undefined}
              title={card.topic}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                minHeight: 48,
                padding: "0 4px",
                color: current ? T.paper : "#E7E0D2",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13,
                fontWeight: current ? 600 : 500,
              }}
            >
              <span style={{ fontSize: 11, letterSpacing: "0.06em", opacity: 0.75 }}>
                {index + 1}
              </span>
              <span className={current ? "crumb-label crumb-label-current" : "crumb-label"}>
                {card.topic}
              </span>
            </button>
          </span>
        );
      })}
    </nav>
  );
}
