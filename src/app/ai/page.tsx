import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "Frontend AI — AI for Frontend Developers | Frontend Digest",
  description:
    "Frontend AI guide: use AI to level up your frontend career — prompt engineering, AI-powered development, testing, design systems, and building AI features.",
  keywords: ["frontend AI", "AI frontend", "frontend career", "AI for developers"],
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
