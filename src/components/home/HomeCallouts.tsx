import Link from "next/link";
import { ArrowRight, Sparkles, LayoutDashboard, ClipboardCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const callouts = [
  {
    title: "New articles added",
    description: "See the latest content across fundamentals, architecture, system design, and more.",
    href: "/latest",
    label: "View latest",
    accent: "primary",
    icon: Sparkles,
  },
  {
    title: "Do you find frontend system design hard?",
    description: "Step-by-step guides for news feed, autocomplete, video player, chat, and other classic frontend system design problems.",
    href: "/topics/system-design",
    label: "Explore system design",
    accent: "teal",
    icon: LayoutDashboard,
  },
  {
    title: "Prepare for frontend interviews",
    description: "55+ questions with detailed answers. Practice randomly or browse by topic — JavaScript, React, CSS, TypeScript, performance.",
    href: "/interview",
    label: "Start practicing",
    accent: "amber",
    icon: ClipboardCheck,
  },
] as const;

const accentStyles = {
  primary: {
    border: "border-primary/30 hover:border-primary/50",
    bg: "bg-primary/5 dark:bg-primary/10",
    icon: "text-primary",
    link: "text-primary hover:text-primary/80",
  },
  teal: {
    border: "border-teal-500/30 hover:border-teal-500/50",
    bg: "bg-teal-500/5 dark:bg-teal-500/10",
    icon: "text-teal-600 dark:text-teal-400",
    link: "text-teal-600 dark:text-teal-400 hover:underline",
  },
  amber: {
    border: "border-amber-500/30 hover:border-amber-500/50",
    bg: "bg-amber-500/5 dark:bg-amber-500/10",
    icon: "text-amber-600 dark:text-amber-400",
    link: "text-amber-600 dark:text-amber-400 hover:underline",
  },
} as const;

export function HomeCallouts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16" aria-labelledby="callouts-heading">
      <h2 id="callouts-heading" className="sr-only">
        Highlights
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {callouts.map((item) => {
          const styles = accentStyles[item.accent];
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex flex-col rounded-xl border-2 p-6 transition-all",
                styles.border,
                styles.bg
              )}
            >
              <div className={cn("mb-3 flex h-10 w-10 items-center justify-center rounded-lg", styles.bg)}>
                <Icon className={cn("h-5 w-5", styles.icon)} aria-hidden />
              </div>
              <h3 className="font-semibold text-foreground group-hover:underline">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {item.description}
              </p>
              <span
                className={cn(
                  "mt-4 inline-flex items-center gap-1.5 text-sm font-medium",
                  styles.link
                )}
              >
                {item.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
