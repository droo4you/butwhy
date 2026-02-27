import { T } from "@/lib/tokens";

export default function DepthRuler({ depth }: { depth: number }) {
  if (depth === 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: "28px",
        top: 0,
        bottom: 0,
        width: "1px",
        background: T.rule,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "50%",
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "9px",
          color: T.inkMuted,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          writingMode: "vertical-rl",
          transform: "rotate(180deg) translateY(50%)",
          paddingBottom: "8px",
          userSelect: "none",
        }}
      >
        {"↓ ".repeat(Math.min(depth, 4)).trim()}
      </div>
    </div>
  );
}
