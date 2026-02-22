import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "Frontend Fundamentals | Frontend Digest",
  description:
    "Master the core building blocks of the web: HTML, CSS, JavaScript, browser internals, and modern frameworks.",
  alternates: { canonical: "https://frontenddigest.com/fundamentals" },
};

export default function FundamentalsPage() {
  return <SectionPage sectionId="fundamentals" />;
}
