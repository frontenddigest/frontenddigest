import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "AI & Frontend Engineering | Frontend Digest",
  description:
    "Leverage AI to supercharge your workflow, build intelligent UIs, and stay ahead of the curve.",
  alternates: { canonical: "https://frontenddigest.com/ai" },
};

interface PageProps {
  searchParams?: Promise<{ topics?: string | string[] }>;
}

function parseTopics(input?: string | string[]): string[] {
  if (!input) return [];
  if (Array.isArray(input)) return input.flatMap((v) => v.split(","));
  return input.split(",");
}

export default async function AiPage({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? {};
  const topics = parseTopics(sp.topics);
  return <SectionPage sectionId="ai" topics={topics} />;
}
