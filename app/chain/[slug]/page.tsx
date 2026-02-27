// Shareable persistent chain — wired up in Session 3.
// Placeholder renders a friendly "coming soon" so the route exists.
import Link from "next/link";
import { T } from "@/lib/tokens";

interface Props {
  params: { slug: string };
}

export default function ChainPage({ params }: Props) {
  return (
    <div
      style={{
        minHeight: "100svh",
        background: T.paper,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 28px",
        textAlign: "center",
        gap: "20px",
      }}
    >
      <span style={{ fontSize: "40px" }}>🕳️</span>
      <h1
        style={{
          fontFamily: "var(--font-baskerville), Georgia, serif",
          fontSize: "clamp(22px, 5vw, 32px)",
          fontWeight: 700,
          color: T.ink,
          letterSpacing: "-0.02em",
        }}
      >
        Shareable chains coming in Session 3
      </h1>
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "14px",
          color: T.inkFaint,
          maxWidth: "360px",
          lineHeight: 1.7,
        }}
      >
        Chain <code>{params.slug}</code> will live here once Supabase
        persistence is wired up.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "13px",
          fontWeight: 600,
          color: T.accent,
          textDecoration: "none",
          letterSpacing: "0.04em",
        }}
      >
        ← Back to all topics
      </Link>
    </div>
  );
}
