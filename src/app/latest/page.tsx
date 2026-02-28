import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { getAllArticlesByDate } from "@/lib/content";
import { ArticleCard } from "@/components/content/ArticleCard";

export const metadata: Metadata = {
  title: "Latest Articles | Frontend Digest",
  description:
    "The newest Frontend Digest articles across fundamentals, architecture, system design, leadership, communication, and AI.",
  alternates: { canonical: "https://frontenddigest.com/latest" },
};

export default function LatestPage() {
  const articles = getAllArticlesByDate();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted text-foreground">
            <Clock className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Latest
            </h1>
          </div>
        </div>
        <p className="mt-2 max-w-3xl text-lg text-muted-foreground">
          Freshly published content across every section.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={`${article.section}-${article.slug}`} article={article} />
        ))}
      </div>
    </div>
  );
}

