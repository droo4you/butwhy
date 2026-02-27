import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SEEDS } from "@/data/seeds";
import DiveScreen from "@/components/DiveScreen";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return SEEDS.map((s) => ({ id: s.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const seed = SEEDS.find((s) => s.id === params.id);
  if (!seed) return { title: "ButWhy" };
  return {
    title: `${seed.topic} — ButWhy`,
    description: seed.answer,
    openGraph: {
      title: seed.topic,
      description: seed.hook,
    },
  };
}

export default function TopicPage({ params }: Props) {
  const seed = SEEDS.find((s) => s.id === params.id);
  if (!seed) notFound();

  return <DiveScreen seed={seed} />;
}
