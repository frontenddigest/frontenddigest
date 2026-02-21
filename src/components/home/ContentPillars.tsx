import Link from "next/link";
import {
  Code,
  Layers,
  LayoutDashboard,
  ClipboardCheck,
  Users,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { sections } from "@/lib/content";
import { cn } from "@/lib/utils";

const iconMap = {
  Code,
  Layers,
  LayoutDashboard,
  ClipboardCheck,
  Users,
  MessageSquare,
  Sparkles,
} as const;

export function ContentPillars() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What You&apos;ll Learn
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Six pillars of frontend engineering excellence — from code to
          leadership.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = iconMap[section.icon];
            return (
              <Link
                key={section.id}
                href={section.href}
                className={cn(
                  "group flex flex-col rounded-xl border border-border bg-card p-6",
                  "transition-all duration-200 hover:border-primary/30 hover:shadow-md",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
              >
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-lg",
                    section.bgColor,
                    section.color
                  )}
                >
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-semibold text-card-foreground transition-colors group-hover:text-primary">
                  {section.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {section.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Explore section
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
