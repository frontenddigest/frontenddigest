import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "Communication & Influence | Frontend Digest",
  description:
    "Tell compelling stories, present to executives, write winning proposals, and sell your technical vision.",
  alternates: { canonical: "https://frontenddigest.com/communication" },
};

interface PageProps {
  searchParams?: Promise<{ topics?: string | string[] }>;
}

function parseTopics(input?: string | string[]): string[] {
  if (!input) return [];
  if (Array.isArray(input)) return input.flatMap((v) => v.split(","));
  return input.split(",");
}

export default async function CommunicationPage({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? {};
  const topics = parseTopics(sp.topics);
  return <SectionPage sectionId="communication" topics={topics} />;
}
