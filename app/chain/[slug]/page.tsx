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
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
      }}
    >
      <div style={{ maxWidth: 460, textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "clamp(26px, 5vw, 36px)",
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          This trail was not saved.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 15,
            lineHeight: 1.65,
            color: T.inkFaint,
            marginBottom: 8,
          }}
        >
          Shareable links need a database, and this app does not write trails anywhere yet.
          The map on a question still shows the hole you are in, on this device, until you leave.
        </p>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            color: T.inkFaint,
            marginBottom: 20,
          }}
        >
          Unknown trail: {params.slug}
        </p>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 600,
            color: T.accent,
            textDecoration: "none",
          }}
        >
          ← All topics
        </Link>
      </div>
    </div>
  );
}
