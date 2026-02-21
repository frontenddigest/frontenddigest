import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "AI & Frontend Engineering | Frontend Digest",
  description:
    "Leverage AI to supercharge your workflow, build intelligent UIs, and stay ahead of the curve.",
};

export default function AiPage() {
  return <SectionPage sectionId="ai" />;
}
