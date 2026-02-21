import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Target, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Frontend Digest",
  description:
    "Frontend Digest is your comprehensive guide to growing as a frontend engineer — from fundamentals to architecture, leadership, and AI.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        About Frontend Digest
      </h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Frontend Digest is a free, comprehensive resource for frontend engineers
        at every stage of their career. Whether you&apos;re writing your first
        line of CSS or designing systems that serve millions, this site is for
        you.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        <div className="rounded-xl border border-border p-6">
          <BookOpen className="h-8 w-8 text-blue-500 mb-4" />
          <h3 className="font-semibold text-lg">Learn</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Deep, practical articles on frontend fundamentals, architecture, and
            modern tooling.
          </p>
        </div>
        <div className="rounded-xl border border-border p-6">
          <Target className="h-8 w-8 text-purple-500 mb-4" />
          <h3 className="font-semibold text-lg">Grow</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Level up from developer to architect to leader with guidance on
            communication and strategy.
          </p>
        </div>
        <div className="rounded-xl border border-border p-6">
          <Users className="h-8 w-8 text-green-500 mb-4" />
          <h3 className="font-semibold text-lg">Lead</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Build high-performing teams, mentor engineers, and drive technical
            vision across organizations.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">Our Mission</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The frontend engineering landscape evolves rapidly. New frameworks,
          patterns, and tools emerge constantly. But the principles of great
          engineering — clean architecture, thoughtful design, effective
          communication, and strong leadership — remain constant.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Frontend Digest bridges the gap between technical skills and career
          growth. We believe that the best engineers aren&apos;t just great
          coders — they&apos;re great communicators, leaders, and strategic
          thinkers. Our content covers the full spectrum of what it takes to
          thrive in frontend engineering.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">
          Who Is This For?
        </h2>
        <ul className="mt-4 space-y-3 text-muted-foreground">
          <li className="flex gap-3">
            <span className="font-semibold text-foreground shrink-0">
              Fresh Graduates:
            </span>
            Build a rock-solid foundation in frontend fundamentals.
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground shrink-0">
              Senior Developers:
            </span>
            Level up to architect-level thinking and technical leadership.
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground shrink-0">
              Frontend Architects:
            </span>
            Sharpen your system design, communication, and organizational
            impact.
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground shrink-0">
              Startup Founders:
            </span>
            Make smart technical decisions that scale with your business.
          </li>
        </ul>
      </div>

      <div className="mt-12 rounded-xl bg-muted/50 border border-border p-8 text-center">
        <h2 className="text-2xl font-bold">Ready to Start?</h2>
        <p className="mt-2 text-muted-foreground">
          Explore our content pillars or check out the career roadmap.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/fundamentals"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Learning
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            View Roadmap
          </Link>
        </div>
      </div>
    </div>
  );
}
