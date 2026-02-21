import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import type { ArticleMeta } from "@/lib/content";
import { AudienceTag } from "./AudienceTag";
import { cn } from "@/lib/utils";

const sectionBorderColors: Record<string, string> = {
  fundamentals: "border-l-blue-500",
  architecture: "border-l-purple-500",
  "system-design": "border-l-teal-500",
  leadership: "border-l-green-500",
  communication: "border-l-orange-500",
  ai: "border-l-pink-500",
};

function getSectionBorderClass(section: string): string {
  return sectionBorderColors[section.toLowerCase()] ?? "border-l-gray-500";
}

export function ArticleCard({ article }: { article: ArticleMeta }) {
  const href = `/${article.section}/${article.slug}`;

  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-lg border border-border bg-card p-5 transition-all duration-200",
        "hover:shadow-md hover:border-border/80",
        "border-l-4",
        getSectionBorderClass(article.section)
      )}
    >
      <h3 className="font-semibold text-card-foreground transition-colors group-hover:text-primary">
        {article.title}
      </h3>
      {article.description && (
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {article.description}
        </p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          {article.readingTime}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" aria-hidden />
          {new Date(article.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        {article.audience.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {article.audience.map((audience) => (
              <AudienceTag key={audience} audience={audience} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
