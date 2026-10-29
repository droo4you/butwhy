"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { T, CAT_COLORS } from "@/lib/tokens";
import type { CardData } from "@/types";

interface MapOverlayProps {
  chain: CardData[];
  onClose: () => void;
  onJumpTo: (index: number) => void;
}

export default function MapOverlay({ chain, onClose, onJumpTo }: MapOverlayProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const previously = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const items = Array.from(
        root.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])")
      ).filter((item) => !item.hasAttribute("disabled"));
      if (items.length === 0) return;
      const first = items[0]!;
      const last = items[items.length - 1]!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previously?.focus?.();
    };
  }, [mounted, onClose]);

  const dialog = (
    <div
      ref={dialogRef}
      id="rabbit-map"
      role="dialog"
      aria-modal="true"
      aria-labelledby="map-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: T.ink,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "18px 20px 14px",
          borderBottom: "1px solid rgba(200,191,168,0.22)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div>
          <h2
            id="map-title"
            style={{
              fontFamily: "var(--font-baskerville), Georgia, serif",
              fontSize: "clamp(20px, 4vw, 26px)",
              fontWeight: 700,
              color: T.paper,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            The rabbit hole
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13,
              color: "#D9D0C1",
              margin: "6px 0 0",
            }}
          >
            {chain.length} {chain.length === 1 ? "level" : "levels"} on one thread
          </p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          style={{
            background: "transparent",
            border: "1px solid rgba(232,220,200,0.4)",
            color: T.paper,
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            minHeight: 44,
            padding: "8px 14px",
            borderRadius: 2,
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>

      <ol
        style={{
          listStyle: "none",
          margin: 0,
          padding: "22px 20px 48px",
          overflowY: "auto",
          maxWidth: 680,
          width: "100%",
          alignSelf: "center",
        }}
      >
        {chain.map((card, index) => {
          const catColor = CAT_COLORS[card.cat] || "#D9D0C1";
          const here = index === chain.length - 1;
          return (
            <li key={card.id}>
              <button
                type="button"
                onClick={() => {
                  onJumpTo(index);
                  onClose();
                }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  width: "100%",
                  textAlign: "left",
                  background: here ? "rgba(245,240,232,0.06)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 8px 8px 0",
                  borderRadius: 2,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: `2px solid ${here ? T.accentSoft : "rgba(232,220,200,0.55)"}`,
                    background: index === 0 ? catColor : "transparent",
                    color: T.paper,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {index + 1}
                </span>
                <span style={{ minWidth: 0 }}>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: here ? T.accentSoft : "#D9D0C1",
                      marginBottom: 4,
                    }}
                  >
                    {here ? "You are here" : index === 0 ? "The question" : `Level ${index}`}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-baskerville), Georgia, serif",
                      fontSize: "clamp(16px, 3vw, 20px)",
                      color: T.paper,
                      lineHeight: 1.35,
                    }}
                  >
                    {card.topic}
                  </span>
                </span>
              </button>
              <p className="map-thread" style={{ marginTop: 4 }}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#B7AB96",
                    marginBottom: 4,
                  }}
                >
                  {here ? "The next but" : "The but that led on"}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-baskerville), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "#E7D3C4",
                  }}
                >
                  {card.hook}
                </span>
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );

  if (!mounted) return null;
  return createPortal(dialog, document.body);
}
