import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import type { Article, ArticleMeta } from "@/lib/content";
import { AudienceTag } from "@/components/content/AudienceTag";
import { cn } from "@/lib/utils";

interface ArticleLayoutProps {
  article: Article;
  section: { id: string; title: string; href: string; color: string };
  prevArticle?: ArticleMeta | null;
  nextArticle?: ArticleMeta | null;
  children: React.ReactNode;
}

export function ArticleLayout({
  article,
  section,
  prevArticle,
  nextArticle,
  children,
}: ArticleLayoutProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <Link
          href={section.href}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {section.title}
        </Link>
      </div>

      <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-12">
        <div className="min-w-0">
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.audience.map((a) => (
                <AudienceTag key={a} audience={a} />
              ))}
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              {article.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readingTime}
              </span>
            </div>
            {article.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="max-w-none">{children}</div>

          <nav className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
            {prevArticle ? (
              <Link
                href={`/${prevArticle.section}/${prevArticle.slug}`}
                className={cn(
                  "group flex flex-col rounded-lg border border-border p-4",
                  "transition-colors hover:border-primary/30 hover:bg-muted/50"
                )}
              >
                <span className="text-xs font-medium text-muted-foreground">
                  Previous
                </span>
                <span className="mt-1 font-medium text-foreground group-hover:text-primary">
                  {prevArticle.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextArticle ? (
              <Link
                href={`/${nextArticle.section}/${nextArticle.slug}`}
                className={cn(
                  "group flex flex-col rounded-lg border border-border p-4 text-right",
                  "transition-colors hover:border-primary/30 hover:bg-muted/50"
                )}
              >
                <span className="text-xs font-medium text-muted-foreground">
                  Next
                </span>
                <span className="mt-1 font-medium text-foreground group-hover:text-primary">
                  {nextArticle.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24" id="toc-container" />
        </aside>
      </div>
    </article>
  );
}
