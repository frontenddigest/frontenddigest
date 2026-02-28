import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "Frontend System Design | Frontend Digest",
  description:
    "Practice frontend system design with real interview questions — from autocomplete to video players to collaborative editors.",
  alternates: { canonical: "https://frontenddigest.com/system-design" },
};

interface PageProps {
  searchParams?: Promise<{ topics?: string | string[] }>;
}

function parseTopics(input?: string | string[]): string[] {
  if (!input) return [];
  if (Array.isArray(input)) return input.flatMap((v) => v.split(","));
  return input.split(",");
}

export default async function SystemDesignPage({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? {};
  const topics = parseTopics(sp.topics);
  return <SectionPage sectionId="system-design" topics={topics} />;
}
