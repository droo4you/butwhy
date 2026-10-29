import Link from "next/link";
import { T } from "@/lib/tokens";

export default function NotFound() {
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
      <div style={{ maxWidth: 460 }}>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: T.accent,
            marginBottom: 12,
          }}
        >
          Missing question
        </p>
        <h1
          style={{
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "clamp(28px, 5vw, 40px)",
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          This one is not on the shelf.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 15,
            lineHeight: 1.6,
            color: T.inkFaint,
            marginBottom: 20,
          }}
        >
          The written trails are the questions on the home page, plus a few you can ask by name.
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
