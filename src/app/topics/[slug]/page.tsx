import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { getTopicPage, topicPages } from "@/lib/topics";
import { ArticleCard } from "@/components/content/ArticleCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function normalize(input: string): string {
  return input.trim().toLowerCase();
}

export function generateStaticParams() {
  return topicPages.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicPage(slug);
  if (!topic) return { title: "Not Found" };
  return {
    title: `${topic.title} | Frontend Digest`,
    description: topic.description,
    alternates: { canonical: `https://frontenddigest.com/topics/${topic.slug}` },
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getTopicPage(slug);
  if (!topic) notFound();

  const wantedTags = new Set(topic.tags.map(normalize));
  const articles = getAllArticles()
    .filter((a) => (a.tags ?? []).some((t) => wantedTags.has(normalize(String(t)))))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <div className="mb-10">
        <div className="mb-3">
          <Link href="/roadmap" className="text-sm text-muted-foreground hover:underline">
            ← Back to Roadmap
          </Link>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {topic.title}
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          {topic.description}
        </p>
        {topic.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {topic.tags.map((t) => (
              <span
                key={t}
                className="rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {articles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={`${article.section}-${article.slug}`} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-card/50 px-8 py-20 text-center">
          <p className="text-lg font-medium text-muted-foreground">
            No matching articles found
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try browsing by{" "}
            <Link href="/tags" className="underline hover:text-foreground">
              tags
            </Link>{" "}
            instead.
          </p>
        </div>
      )}
    </div>
  );
}

