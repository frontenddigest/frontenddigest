import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "Leading Frontend Teams | Frontend Digest",
  description:
    "Grow from individual contributor to technical leader. Build culture, mentor engineers, and drive impact.",
  alternates: { canonical: "https://frontenddigest.com/leadership" },
};

interface PageProps {
  searchParams?: Promise<{ topics?: string | string[] }>;
}

function parseTopics(input?: string | string[]): string[] {
  if (!input) return [];
  if (Array.isArray(input)) return input.flatMap((v) => v.split(","));
  return input.split(",");
}

export default async function LeadershipPage({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? {};
  const topics = parseTopics(sp.topics);
  return <SectionPage sectionId="leadership" topics={topics} />;
}
