import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-blue-500/5 dark:from-primary/10 dark:via-background dark:to-blue-500/10" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-[800px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-px w-[600px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      </div>

      {/* Decorative code-like element */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block text-muted-foreground/30 font-mono text-xs select-none"
        aria-hidden
      >
        <pre className="flex flex-col gap-1">
          <span>{"{"}</span>
          <span className="pl-4">career: "levelUp"</span>
          <span className="pl-4">path: "frontend"</span>
          <span>{"}"}</span>
        </pre>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
            <Code2 className="h-4 w-4 text-primary" aria-hidden />
            <span>Your comprehensive frontend guide</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Level Up Your Frontend{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-primary dark:via-blue-400 dark:to-purple-400">
              Engineering Career
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            From fundamentals to architecture, leadership to AI — your
            comprehensive guide to growing as a frontend engineer.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/fundamentals"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              Start Learning
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-border px-6 py-3 text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-muted/50"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
