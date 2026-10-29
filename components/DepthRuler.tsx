import { T } from "@/lib/tokens";

export default function DepthRuler({ depth }: { depth: number }) {
  if (depth === 0) return null;

  return (
    <div
      className="depth-ruler"
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 28,
        top: 0,
        bottom: 0,
        width: 1,
        background: T.rule,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "50%",
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 10,
          color: T.inkFaint,
          letterSpacing: "0.14em",
          writingMode: "vertical-rl",
          transform: "rotate(180deg) translateY(50%)",
          paddingBottom: 8,
        }}
      >
        {depth === 1 ? "1 level down" : `${depth} levels down`}
      </div>
    </div>
  );
}
