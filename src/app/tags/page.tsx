import type { Metadata } from "next";
import Link from "next/link";
import { Tag } from "lucide-react";
import { getAllTags } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tags | Frontend Digest",
  description:
    "Browse all topics covered on Frontend Digest — React, JavaScript, performance, system design, and more.",
  alternates: { canonical: "https://frontenddigest.com/tags" },
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted text-foreground">
            <Tag className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tags
            </h1>
          </div>
        </div>
        <p className="mt-2 max-w-3xl text-lg text-muted-foreground">
          Explore articles by topic. Each tag page is a curated index that grows
          as new content is published.
        </p>
      </div>

      {tags.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tags.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className={cn(
                "group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3",
                "transition-colors hover:bg-muted/40 hover:border-border/80"
              )}
            >
              <span className="font-medium text-foreground group-hover:text-primary">
                {tag}
              </span>
              <span className="text-sm text-muted-foreground">{count}</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-card/50 px-8 py-20 text-center">
          <p className="text-lg font-medium text-muted-foreground">
            No tags found yet
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Add `tags` in article frontmatter to populate this page.
          </p>
        </div>
      )}
    </div>
  );
}

