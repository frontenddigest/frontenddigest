import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowRight, GraduationCap, Zap, Users, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Career Roadmap | Frontend Digest",
  description:
    "Visual career progression paths for frontend engineers at every stage.",
  alternates: { canonical: "https://frontenddigest.com/roadmap" },
};

const tracks = [
  {
    id: "junior",
    title: "Fresh Graduate → Junior Developer",
    description:
      "Build a strong foundation and land your first role. Master the essentials that every frontend hire needs.",
    accent: "blue",
    icon: GraduationCap,
    steps: [
      {
        title: "Fundamentals",
        description: "HTML, CSS, JavaScript",
        href: "/fundamentals",
      },
      {
        title: "Framework",
        description: "React & modern tooling",
        href: "/fundamentals",
      },
      {
        title: "Testing",
        description: "Unit, integration, E2E",
        href: "/fundamentals",
      },
      {
        title: "First Job Ready",
        description: "Portfolio & interviewing",
        href: "/fundamentals",
      },
    ],
  },
  {
    id: "staff",
    title: "Senior Developer → Staff Engineer",
    description:
      "Elevate to a staff-level IC. Focus on system thinking, performance, and driving technical direction.",
    accent: "purple",
    icon: Zap,
    steps: [
      {
        title: "System Design",
        description: "Scalable frontend systems",
        href: "/architecture",
      },
      {
        title: "Performance",
        description: "Optimization & metrics",
        href: "/architecture",
      },
      {
        title: "Architecture Patterns",
        description: "Design & abstractions",
        href: "/architecture",
      },
      {
        title: "Technical Vision",
        description: "Roadmap & influence",
        href: "/architecture",
      },
    ],
  },
  {
    id: "leader",
    title: "Frontend Architect → Engineering Leader",
    description:
      "Transition from technical depth to leadership. Grow teams, communicate strategy, and amplify impact.",
    accent: "green",
    icon: Users,
    steps: [
      {
        title: "Team Leadership",
        description: "Mentoring & delegation",
        href: "/leadership",
      },
      {
        title: "Communication",
        description: "Stakeholder & alignment",
        href: "/communication",
      },
      {
        title: "Strategy",
        description: "Prioritization & vision",
        href: "/leadership",
      },
      {
        title: "Organization Impact",
        description: "Culture & scaling",
        href: "/leadership",
      },
    ],
  },
  {
    id: "cto",
    title: "Startup Founder → CTO",
    description:
      "Scale from founder to CTO. Make architecture decisions, hire talent, and own technical strategy.",
    accent: "orange",
    icon: Rocket,
    steps: [
      {
        title: "Architecture Decisions",
        description: "Stack & tradeoffs",
        href: "/architecture",
      },
      {
        title: "Scaling",
        description: "Systems & processes",
        href: "/architecture",
      },
      {
        title: "Hiring",
        description: "Building the team",
        href: "/leadership",
      },
      {
        title: "Technical Strategy",
        description: "Long-term direction",
        href: "/architecture",
      },
    ],
  },
] as const;

const accentStyles = {
  blue: {
    bg: "bg-blue-500/10 dark:bg-blue-500/20",
    border: "border-blue-500/30 hover:border-blue-500/50",
    icon: "text-blue-600 dark:text-blue-400",
    connector: "bg-blue-500/40",
  },
  purple: {
    bg: "bg-purple-500/10 dark:bg-purple-500/20",
    border: "border-purple-500/30 hover:border-purple-500/50",
    icon: "text-purple-600 dark:text-purple-400",
    connector: "bg-purple-500/40",
  },
  green: {
    bg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    border: "border-emerald-500/30 hover:border-emerald-500/50",
    icon: "text-emerald-600 dark:text-emerald-400",
    connector: "bg-emerald-500/40",
  },
  orange: {
    bg: "bg-orange-500/10 dark:bg-orange-500/20",
    border: "border-orange-500/30 hover:border-orange-500/50",
    icon: "text-orange-600 dark:text-orange-400",
    connector: "bg-orange-500/40",
  },
} as const;

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      {/* Page header */}
      <header className="mb-16 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Frontend Engineering Career Roadmap
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Choose your path. Whether you&apos;re just starting out or scaling to
          CTO, we&apos;ve mapped the skills and milestones for every stage.
        </p>
      </header>

      {/* Roadmap tracks */}
      <div className="space-y-20">
        {tracks.map((track) => {
          const styles = accentStyles[track.accent];
          const Icon = track.icon;

          return (
            <section
              key={track.id}
              className="rounded-2xl border border-border/60 bg-card/50 p-6 shadow-sm sm:p-8"
            >
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                    styles.bg
                  )}
                >
                  <Icon className={cn("h-6 w-6", styles.icon)} aria-hidden />
                </div>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {track.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">{track.description}</p>
                </div>
              </div>

              {/* Steps - horizontal on desktop, vertical on mobile */}
              <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-between md:gap-2">
                {track.steps.map((step, index) => (
                  <Fragment key={step.title}>
                    {index > 0 && (
                      <div
                        className={cn(
                          "flex-shrink-0 self-center",
                          "h-6 w-0.5 md:h-0.5 md:w-8 md:min-w-8",
                          styles.connector
                        )}
                        aria-hidden
                      />
                    )}
                    <Link
                      href={step.href}
                      className={cn(
                        "group flex min-w-0 flex-1 flex-col rounded-xl border-2 p-4 shadow-sm transition-all sm:p-5 md:max-w-[240px]",
                        styles.border,
                        styles.bg
                      )}
                    >
                      <span className="text-sm font-medium text-muted-foreground">
                        Step {index + 1}
                      </span>
                      <h3 className="mt-1 font-semibold text-foreground group-hover:underline">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {step.description}
                      </p>
                      <span
                        className={cn(
                          "mt-3 inline-flex items-center text-sm font-medium",
                          styles.icon
                        )}
                      >
                        Learn more
                        <ArrowRight
                          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                    </Link>
                  </Fragment>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="mt-24 rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 via-background to-blue-500/5 dark:from-primary/10 dark:via-background dark:to-blue-500/10 p-8 shadow-sm sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Start Your Journey
          </h2>
          <p className="mt-4 text-muted-foreground">
            The best time to level up was yesterday. The next best time is now.
            Begin with fundamentals and build from there.
          </p>
          <Link
            href="/fundamentals"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            Explore Fundamentals
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
