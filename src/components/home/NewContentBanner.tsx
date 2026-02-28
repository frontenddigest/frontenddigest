"use client";

import Link from "next/link";

export function NewContentBanner() {
  return (
    <div
      className="relative overflow-hidden border-b border-amber-600/30 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 px-4 py-2 text-center dark:from-amber-700 dark:via-amber-600 dark:to-amber-700 dark:text-amber-50"
      role="banner"
    >
      <p className="text-sm font-medium tracking-wide">
        <span className="inline-block animate-soft-pulse">
          New articles added — explore the latest on fundamentals, architecture, system design, leadership, communication, and AI.
        </span>{" "}
        <Link
          href="/latest"
          className="ml-1 underline decoration-2 underline-offset-2 hover:no-underline dark:decoration-amber-200"
        >
          View latest →
        </Link>
      </p>
    </div>
  );
}
