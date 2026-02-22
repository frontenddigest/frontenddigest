import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "Leading Frontend Teams | Frontend Digest",
  description:
    "Grow from individual contributor to technical leader. Build culture, mentor engineers, and drive impact.",
  alternates: { canonical: "https://frontenddigest.com/leadership" },
};

export default function LeadershipPage() {
  return <SectionPage sectionId="leadership" />;
}
