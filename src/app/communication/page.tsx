import type { Metadata } from "next";
import { SectionPage } from "@/components/content/SectionPage";

export const metadata: Metadata = {
  title: "Communication & Influence | Frontend Digest",
  description:
    "Tell compelling stories, present to executives, write winning proposals, and sell your technical vision.",
};

export default function CommunicationPage() {
  return <SectionPage sectionId="communication" />;
}
