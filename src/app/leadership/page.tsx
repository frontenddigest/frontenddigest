import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "Frontend Lead & Team Leadership | Frontend Digest",
  description:
    "Become a frontend lead and technical leader. Resources for frontend architects and leads: mentoring engineers, building culture, code review, hiring, and driving impact.",
  keywords: [
    "frontend lead",
    "frontend architect",
    "technical leadership",
    "frontend career",
  ],
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
