"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface TocHeading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TocHeading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(
    headings[0]?.id ?? null
  );

  const updateActiveHeading = useCallback(() => {
    const headingElements = headings.map((h) => ({
      id: h.id,
      element: document.getElementById(h.id),
    }));

    const visibleHeadings = headingElements
      .filter(({ element }) => element !== null)
      .map(({ id, element }) => ({
        id,
        top: (element as HTMLElement).getBoundingClientRect().top,
      }))
      .filter(({ top }) => top <= 120);

    if (visibleHeadings.length === 0) {
      setActiveId(headings[0]?.id ?? null);
      return;
    }

    const nearest = visibleHeadings.reduce((prev, curr) =>
      curr.top > prev.top ? curr : prev
    );
    setActiveId(nearest.id);
  }, [headings]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      requestAnimationFrame(updateActiveHeading);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateActiveHeading();

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings, updateActiveHeading]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      className="sticky top-24 hidden w-48 shrink-0 lg:block"
      aria-label="Table of contents"
    >
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        On This Page
      </h2>
      <ul className="space-y-1">
        {headings.map((heading, index) => (
          <li
            key={heading.id || `heading-${index}`}
            style={
              heading.level === 3
                ? { paddingLeft: "0.75rem" }
                : undefined
            }
          >
            <button
              type="button"
              onClick={() => handleClick(heading.id)}
              className={cn(
                "block w-full text-left text-sm transition-colors",
                "hover:text-foreground",
                activeId === heading.id
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <span
                className={cn(
                  "border-l-2 pl-2",
                  activeId === heading.id
                    ? "border-primary"
                    : "border-transparent"
                )}
              >
                {heading.text}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
