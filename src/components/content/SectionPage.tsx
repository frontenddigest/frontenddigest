import {
  Code,
  Layers,
  LayoutDashboard,
  ClipboardCheck,
  Users,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { getArticlesBySection, sections } from "@/lib/content";
import { ArticleCard } from "@/components/content/ArticleCard";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Layers,
  LayoutDashboard,
  ClipboardCheck,
  Users,
  MessageSquare,
  Sparkles,
};

interface SectionPageProps {
  sectionId: string;
}

export function SectionPage({ sectionId }: SectionPageProps) {
  const section = sections.find((s) => s.id === sectionId);
  const articles = getArticlesBySection(sectionId);
  const Icon = section ? iconMap[section.icon] : Code;

  if (!section) return null;

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-xl",
              section.bgColor,
              section.color
            )}
          >
            <Icon className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {section.title}
            </h1>
          </div>
        </div>
        <p className="mt-2 max-w-3xl text-lg text-muted-foreground">
          {section.description}
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-card/50 px-8 py-20 text-center">
          <div
            className={cn(
              "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl",
              section.bgColor,
              section.color
            )}
          >
            <Icon className="h-8 w-8" />
          </div>
          <p className="text-lg font-medium text-muted-foreground">
            Content coming soon
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            We&apos;re crafting in-depth articles for this section. Check back
            soon.
          </p>
        </div>
      )}
    </div>
  );
}
