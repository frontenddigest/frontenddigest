import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticle, getArticlesBySection, sections } from "@/lib/content";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ArticlePageClient } from "@/components/content/ArticlePage";
import { renderMDX } from "@/lib/mdx";

const SECTION_ID = "fundamentals";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(SECTION_ID, slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} | Frontend Digest`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export function generateStaticParams() {
  const articles = getArticlesBySection(SECTION_ID);
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(SECTION_ID, slug);
  if (!article) notFound();

  const section = sections.find((s) => s.id === SECTION_ID)!;
  const allArticles = getArticlesBySection(SECTION_ID);
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  const content = await renderMDX(article.content);

  return (
    <ArticlePageClient>
      <ArticleLayout
        article={article}
        section={section}
        prevArticle={prevArticle}
        nextArticle={nextArticle}
      >
        {content}
      </ArticleLayout>
    </ArticlePageClient>
  );
}
