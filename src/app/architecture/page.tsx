import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "Frontend Architecture | Frontend Digest",
  description:
    "Design scalable systems, choose the right patterns, and build frontend infrastructure that lasts.",
  alternates: { canonical: "https://frontenddigest.com/architecture" },
};

export default function ArchitecturePage() {
  return <SectionPage sectionId="architecture" />;
}
