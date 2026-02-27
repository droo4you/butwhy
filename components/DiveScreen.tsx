"use client";

import { useState, useRef, useEffect } from "react";
import { CardData, SeedTopic, DiveResponse } from "@/types";
import { T } from "@/lib/tokens";
import Card from "./Card";
import BreadcrumbBar from "./BreadcrumbBar";
import MapOverlay from "./MapOverlay";

interface DiveScreenProps {
  seed: SeedTopic;
}

export default function DiveScreen({ seed }: DiveScreenProps) {
  const [chain, setChain] = useState<CardData[]>([
    { ...seed, depth: 0, parentId: null },
  ]);
  const [showMap, setShowMap] = useState(false);
  const [loading, setLoading] = useState(false);

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const latestRef = useRef<HTMLDivElement | null>(null);
  const chainLengthRef = useRef(1);

  // Scroll to newest card only after React has committed the new DOM node
  useEffect(() => {
    if (chain.length > chainLengthRef.current) {
      chainLengthRef.current = chain.length;
      latestRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [chain.length]);

  async function handleButWhy(card: CardData) {
    setLoading(true);
    try {
      const res = await fetch("/api/dive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hook: card.hook, depth: card.depth + 1 }),
      });

      if (!res.ok) throw new Error(`API error ${res.status}`);

      const result: DiveResponse = await res.json();
      const newCard: CardData = {
        id: `d-${Date.now()}`,
        cat: card.cat,
        emoji: card.emoji,
        depth: card.depth + 1,
        parentId: card.id,
        ...result,
      };
      setChain((prev) => [...prev, newCard]);
    } catch (err) {
      console.error("[DiveScreen] handleButWhy:", err);
    } finally {
      setLoading(false);
    }
  }

  function jumpTo(index: number) {
    const card = chain[index];
    if (!card) return;
    cardRefs.current[card.id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const hasBreadcrumb = chain.length > 1;

  return (
    <div style={{ background: T.paper, minHeight: "100svh" }}>
      {/* Breadcrumb — only when chain has >1 card */}
      {hasBreadcrumb && (
        <BreadcrumbBar chain={chain} onJumpTo={jumpTo} />
      )}

      {/* Fixed nav bar — always at top:38px so layout never shifts */}
      <div
        style={{
          position: "fixed",
          top: "38px",
          left: 0,
          right: 0,
          zIndex: 99,
          background: T.paper,
          borderBottom: `1px solid ${T.rule}`,
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "none",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "12px",
            color: T.inkFaint,
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          ← All topics
        </a>
        <span
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "16px",
            fontWeight: 700,
            color: T.ink,
            letterSpacing: "-0.02em",
          }}
        >
          ButWhy
        </span>
        {hasBreadcrumb ? (
          <button
            onClick={() => setShowMap(true)}
            style={{
              background: "none",
              border: `1px solid ${T.rule}`,
              color: T.inkFaint,
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "11px",
              padding: "5px 10px",
              borderRadius: "2px",
              cursor: "pointer",
              letterSpacing: "0.04em",
            }}
          >
            Map
          </button>
        ) : (
          <div style={{ width: "60px" }} />
        )}
      </div>

      {/* Card stack — always 76px top (38 breadcrumb + 38 nav), no layout shift */}
      <div style={{ paddingTop: "76px" }}>
        {chain.map((card, i) => {
          const isLatest = i === chain.length - 1;
          return (
            <div
              key={card.id}
              className={isLatest && i > 0 ? "fu" : ""}
              ref={(el) => {
                cardRefs.current[card.id] = el;
                if (isLatest) latestRef.current = el;
              }}
            >
              <Card
                card={card}
                onButWhy={handleButWhy}
                isLatest={isLatest}
                isLoading={loading}
              />
            </div>
          );
        })}
      </div>

      {/* Map overlay */}
      {showMap && (
        <MapOverlay
          chain={chain}
          onClose={() => setShowMap(false)}
          onJumpTo={jumpTo}
        />
      )}
    </div>
  );
}
