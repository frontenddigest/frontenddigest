import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "Frontend System Design — Interview Prep & Practice | Frontend Digest",
  description:
    "Master frontend system design for interviews. Step-by-step guides: news feed, autocomplete, video player, dashboard, chat, collaborative editor, and more. Frontend preparation for system design rounds.",
  keywords: [
    "frontend system design",
    "frontend interviews",
    "frontend preparation",
    "system design interview",
  ],
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
