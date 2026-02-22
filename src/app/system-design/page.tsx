import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "Frontend System Design | Frontend Digest",
  description:
    "Practice frontend system design with real interview questions — from autocomplete to video players to collaborative editors.",
  alternates: { canonical: "https://frontenddigest.com/system-design" },
};

export default function SystemDesignPage() {
  return <SectionPage sectionId="system-design" />;
}
