"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { RETRYABLE_CODES } from "@/lib/errors";
import { T } from "@/lib/tokens";
import type { CardData, DiveErrorCode, DiveResponse } from "@/types";
import BreadcrumbBar from "./BreadcrumbBar";
import Card from "./Card";
import MapOverlay from "./MapOverlay";

interface DiveScreenProps {
  root: CardData;
  presetId: string | null;
}

function motion(): ScrollBehavior {
  if (typeof window === "undefined") return "auto";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export default function DiveScreen({ root, presetId }: DiveScreenProps) {
  const [chain, setChain] = useState<CardData[]>([root]);
  const [showMap, setShowMap] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [error, setError] = useState<{ message: string; retryable: boolean } | null>(null);
  const [status, setStatus] = useState("");

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const latestRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const chainLengthRef = useRef(1);
  const mapButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeMap = useCallback(() => setShowMap(false), []);

  useEffect(() => {
    if (!loading) {
      setShowLoading(false);
      return;
    }
    const timer = window.setTimeout(() => setShowLoading(true), 180);
    return () => window.clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    if (chain.length > chainLengthRef.current) {
      chainLengthRef.current = chain.length;
      latestRef.current?.scrollIntoView({ behavior: motion(), block: "start" });
    }
  }, [chain.length]);

  useEffect(() => {
    if (showLoading) loadingRef.current?.scrollIntoView({ behavior: motion(), block: "start" });
  }, [showLoading]);

  const dive = useCallback(
    async (card: CardData) => {
      setLoading(true);
      setError(null);
      setStatus("Following that but.");
      try {
        const response = await fetch("/api/dive", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            hook: card.hook,
            depth: card.depth + 1,
            seedId: presetId,
            history: chain.map((item) => ({ topic: item.topic, hook: item.hook })),
          }),
        });
        const data = (await response.json()) as DiveResponse & {
          error?: string;
          code?: DiveErrorCode;
        };
        if (!response.ok || !data.topic || !data.answer || !data.hook) {
          const message =
            typeof data.error === "string"
              ? data.error
              : "The next answer did not come back. Nothing was invented to fill the gap.";
          setError({
            message,
            retryable: data.code ? RETRYABLE_CODES.has(data.code) : true,
          });
          setStatus(message);
          return;
        }
        const next: CardData = {
          id: crypto.randomUUID(),
          cat: card.cat,
          emoji: card.emoji,
          depth: card.depth + 1,
          parentId: card.id,
          topic: data.topic,
          answer: data.answer,
          hook: data.hook,
          _provider: data._provider,
        };
        setChain((prev) => [...prev, next]);
        setStatus(`${next.topic}. ${next.answer}`);
      } catch {
        const message = "The next answer did not come back. Nothing was invented to fill the gap.";
        setError({ message, retryable: true });
        setStatus(message);
      } finally {
        setLoading(false);
      }
    },
    [chain, presetId]
  );

  function jumpTo(index: number) {
    const card = chain[index];
    if (!card) return;
    cardRefs.current[card.id]?.scrollIntoView({ behavior: motion(), block: "start" });
  }

  const hasTrail = chain.length > 1;
  const latest = chain[chain.length - 1];

  return (
    <div style={{ background: T.paper, minHeight: "100svh" }}>
      <p className="sr-only" aria-live="polite">
        {status}
      </p>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: T.paper,
        }}
      >
        {hasTrail && <BreadcrumbBar chain={chain} onJumpTo={jumpTo} />}
        <div
          style={{
            minHeight: 52,
            borderBottom: `1px solid ${T.rule}`,
            padding: "6px 16px",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: 8,
          }}
        >
          <a
            href="/"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13,
              color: T.inkFaint,
              textDecoration: "none",
              justifySelf: "start",
              minHeight: 44,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            ← All topics
          </a>
          <a
            href="/"
            style={{
              fontFamily: "var(--font-baskerville), Georgia, serif",
              fontSize: 18,
              fontWeight: 700,
              color: T.ink,
              letterSpacing: "-0.02em",
              textDecoration: "none",
            }}
          >
            ButWhy
          </a>
          {hasTrail ? (
            <button
              ref={mapButtonRef}
              type="button"
              aria-expanded={showMap}
              aria-controls="rabbit-map"
              onClick={() => setShowMap(true)}
              style={{
                justifySelf: "end",
                background: "transparent",
                border: `1px solid ${T.rule}`,
                color: T.ink,
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13,
                minHeight: 36,
                padding: "6px 12px",
                borderRadius: 2,
                cursor: "pointer",
              }}
            >
              Map
            </button>
          ) : (
            <span />
          )}
        </div>
      </header>

      <main>
        {chain.map((card, index) => {
          const isLatest = index === chain.length - 1;
          return (
            <div
              key={card.id}
              className={isLatest && index > 0 ? "fu" : undefined}
              ref={(element) => {
                cardRefs.current[card.id] = element;
                if (isLatest) latestRef.current = element;
              }}
            >
              <Card
                card={card}
                onButWhy={dive}
                isLatest={isLatest}
                isLoading={loading}
                error={isLatest ? error : null}
                onRetry={isLatest && latest ? () => dive(latest) : undefined}
              />
            </div>
          );
        })}

        {showLoading && (
          <div
            ref={loadingRef}
            className="trail-card fu"
            aria-hidden="true"
            style={{
              minHeight: "calc(100svh - 5.5rem)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "48px 24px",
              background: T.paper,
            }}
          >
            <div style={{ maxWidth: 520 }}>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: T.inkFaint,
                  marginBottom: 14,
                }}
              >
                Following that but
              </p>
              <p
                style={{
                  fontFamily: "var(--font-baskerville), Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(18px, 3vw, 24px)",
                  color: T.accent,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {latest?.hook}
              </p>
            </div>
          </div>
        )}
      </main>

      {showMap && (
        <MapOverlay chain={chain} onClose={closeMap} onJumpTo={jumpTo} />
      )}
    </div>
  );
}
