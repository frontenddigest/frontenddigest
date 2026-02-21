import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PracticeMode } from "@/components/interview/PracticeMode";

export const metadata: Metadata = {
  title: "Practice Interview Questions | Frontend Digest",
  description:
    "Practice frontend interview questions randomly. See the question first, think about your answer, then reveal the solution.",
};

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <div className="mb-8">
        <Link
          href="/interview"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Questions
        </Link>
      </div>

      <PracticeMode />
    </div>
  );
}
