import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shuffle, BookOpen } from "lucide-react";
import { questions, categories, getQuestionStats } from "@/lib/questions";
import { QuestionCard } from "@/components/interview/QuestionCard";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Frontend Interview Questions | Frontend Digest",
  description:
    "55+ frontend technical interview questions with detailed answers. Practice with random questions covering JavaScript, React, CSS, TypeScript, performance, and more.",
  alternates: { canonical: "https://frontenddigest.com/interview" },
};

const categoryIcons: Record<string, string> = {
  JavaScript: "text-yellow-500 bg-yellow-500/10",
  "CSS & HTML": "text-blue-500 bg-blue-500/10",
  React: "text-cyan-500 bg-cyan-500/10",
  TypeScript: "text-blue-600 bg-blue-600/10",
  Performance: "text-red-500 bg-red-500/10",
  "Browser & Web APIs": "text-purple-500 bg-purple-500/10",
  Architecture: "text-green-500 bg-green-500/10",
  Testing: "text-orange-500 bg-orange-500/10",
};

export default function InterviewPage() {
  const stats = getQuestionStats();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500/10 text-teal-500">
            <BookOpen className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frontend Interview Questions
            </h1>
          </div>
        </div>
        <p className="mt-2 max-w-3xl text-lg text-muted-foreground">
          {stats.total} technical interview questions with detailed answers,
          covering {categories.length} key frontend topics. Browse by category
          or practice with random questions.
        </p>

        <div className="mt-6">
          <Link
            href="/interview/practice"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Shuffle className="h-4 w-4" />
            Random Practice Mode
          </Link>
        </div>
      </div>

      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => {
          const count = stats.byCategory[cat] || 0;
          const colors = categoryIcons[cat] || "text-gray-500 bg-gray-500/10";
          const [textColor, bgColor] = colors.split(" ");
          return (
            <div
              key={cat}
              className="rounded-xl border border-border bg-card p-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold",
                    bgColor,
                    textColor
                  )}
                >
                  {count}
                </div>
                <span className="font-medium text-sm">{cat}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-12">
        {categories.map((cat) => {
          const catQuestions = questions.filter((q) => q.category === cat);
          if (catQuestions.length === 0) return null;
          return (
            <section key={cat}>
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                {cat}
              </h2>
              <div className="space-y-3">
                {catQuestions.map((q, i) => (
                  <QuestionCard key={q.id} question={q} index={i + 1} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-16 rounded-xl bg-muted/50 border border-border p-8 text-center">
        <h2 className="text-2xl font-bold">Ready to Practice?</h2>
        <p className="mt-2 text-muted-foreground">
          Test yourself with random questions — see only the question first,
          then reveal the answer when you&apos;re ready.
        </p>
        <Link
          href="/interview/practice"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Shuffle className="h-4 w-4" />
          Start Random Practice
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
