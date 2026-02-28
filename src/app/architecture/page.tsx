import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "Frontend Architecture | Frontend Digest",
  description:
    "Design scalable systems, choose the right patterns, and build frontend infrastructure that lasts.",
  alternates: { canonical: "https://frontenddigest.com/architecture" },
};

interface PageProps {
  searchParams?: Promise<{ topics?: string | string[] }>;
}

function parseTopics(input?: string | string[]): string[] {
  if (!input) return [];
  if (Array.isArray(input)) return input.flatMap((v) => v.split(","));
  return input.split(",");
}

export default async function ArchitecturePage({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? {};
  const topics = parseTopics(sp.topics);
  return <SectionPage sectionId="architecture" topics={topics} />;
}
