import type { Metadata } from "next";
import { Suspense } from "react";
import AskExperience from "@/components/AskExperience";
import { T } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Ask your own question",
  description: "Ask ButWhy something new, or land on a trail that was already written.",
};

function Opening() {
  return (
    <div
      style={{
        minHeight: "100svh",
        background: T.paper,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-baskerville), Georgia, serif",
        fontStyle: "italic",
        color: "#6B5F4E",
      }}
    >
      Opening your question…
    </div>
  );
}

export default function AskPage() {
  return (
    <Suspense fallback={<Opening />}>
      <AskExperience />
    </Suspense>
  );
}
