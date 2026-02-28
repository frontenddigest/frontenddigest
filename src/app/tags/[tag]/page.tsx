import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTags, getArticlesByTag } from "@/lib/content";
import { ArticleCard } from "@/components/content/ArticleCard";

interface PageProps {
  params: Promise<{ tag: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const normalized = tag.trim().toLowerCase();
  const title = `${normalized} articles`;
  return {
    title: `${title} | Frontend Digest`,
    description: `Browse Frontend Digest articles tagged with “${normalized}”.`,
    alternates: {
      canonical: `https://frontenddigest.com/tags/${encodeURIComponent(normalized)}`,
    },
  };
}

export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const normalized = tag.trim().toLowerCase();
  const articles = getArticlesByTag(normalized);

  if (articles.length === 0) notFound();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Tag: <span className="text-primary">{normalized}</span>
        </h1>
        <p className="mt-2 max-w-3xl text-lg text-muted-foreground">
          {articles.length} article{articles.length === 1 ? "" : "s"} tagged with{" "}
          <span className="font-medium text-foreground">{normalized}</span>.
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

