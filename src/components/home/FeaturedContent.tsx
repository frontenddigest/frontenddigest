import type { ArticleMeta } from "@/lib/content";
import { ArticleCard } from "@/components/content/ArticleCard";

interface FeaturedContentProps {
  articles: ArticleMeta[];
}

export function FeaturedContent({ articles }: FeaturedContentProps) {
  return (
    <section className="border-t border-border bg-muted/20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Featured Articles
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Hand-picked reads to accelerate your frontend journey.
        </p>

        {articles.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={`${article.section}-${article.slug}`} article={article} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-xl border border-dashed border-border bg-card/50 px-8 py-16 text-center">
            <p className="text-lg font-medium text-muted-foreground">
              Coming soon
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              We&apos;re curating our best content. Check back soon for featured
              articles.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
