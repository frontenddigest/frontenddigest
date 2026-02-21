import Link from "next/link";
import {
  GraduationCap,
  Rocket,
  Building2,
  Lightbulb,
} from "lucide-react";
import { audiences } from "@/lib/content";
import { cn } from "@/lib/utils";

const iconMap = {
  GraduationCap,
  Rocket,
  Building2,
  Lightbulb,
} as const;

export function AudienceSelector() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Where Are You in Your Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Choose your path and discover content tailored to your experience level.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => {
            const Icon = iconMap[audience.icon];
            return (
              <Link
                key={audience.id}
                href={audience.href}
                className={cn(
                  "group relative flex flex-col rounded-xl border border-border bg-card p-6",
                  "transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
              >
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-200 group-hover:scale-110"
                  )}
                >
                  <Icon className="h-6 w-6 text-primary" aria-hidden />
                </div>
                <h3 className="font-semibold text-card-foreground transition-colors group-hover:text-primary">
                  {audience.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {audience.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  Explore path
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
