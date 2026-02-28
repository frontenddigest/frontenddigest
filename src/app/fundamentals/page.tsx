import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "Frontend Fundamentals | Frontend Digest",
  description:
    "Master the core building blocks of the web: HTML, CSS, JavaScript, browser internals, and modern frameworks.",
  alternates: { canonical: "https://frontenddigest.com/fundamentals" },
};

interface PageProps {
  searchParams?: Promise<{ topics?: string | string[] }>;
}

function parseTopics(input?: string | string[]): string[] {
  if (!input) return [];
  if (Array.isArray(input)) return input.flatMap((v) => v.split(","));
  return input.split(",");
}

export default async function FundamentalsPage({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? {};
  const topics = parseTopics(sp.topics);
  return <SectionPage sectionId="fundamentals" topics={topics} />;
}
