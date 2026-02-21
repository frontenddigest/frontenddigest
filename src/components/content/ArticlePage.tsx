"use client";

import { useEffect, useState } from "react";
import { ReadingProgress } from "@/components/content/ReadingProgress";
import { TableOfContents } from "@/components/content/TableOfContents";

interface ArticlePageClientProps {
  children: React.ReactNode;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function ArticlePageClient({ children }: ArticlePageClientProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const extracted: Heading[] = Array.from(elements)
      .filter((el) => el.id && el.textContent)
      .map((el) => ({
        id: el.id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      }));
    setHeadings(extracted);

    const container = document.getElementById("toc-container");
    if (container && extracted.length > 0) {
      container.dataset.hasContent = "true";
    }
  }, []);

  return (
    <>
      <ReadingProgress />
      {children}
      {headings.length > 0 && (
        <div className="fixed right-8 top-24 hidden xl:block w-[220px]">
          <TableOfContents headings={headings} />
        </div>
      )}
    </>
  );
}
