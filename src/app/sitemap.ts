import type { MetadataRoute } from "next";
import { getAllArticles, getAllTags, sections } from "@/lib/content";
import { topicPages } from "@/lib/topics";

const BASE_URL = "https://frontenddigest.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const tags = getAllTags();
  const siteLastModified = new Date(
    Math.max(0, ...articles.map((a) => new Date(a.date).getTime()).filter(Number.isFinite))
  );

  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/${article.section}/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: article.featured ? 0.8 : 0.6,
  }));

  const sectionUrls: MetadataRoute.Sitemap = sections.map((section) => ({
    url: `${BASE_URL}${section.href}`,
    lastModified: siteLastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const tagUrls: MetadataRoute.Sitemap = tags.map(({ tag }) => ({
    url: `${BASE_URL}/tags/${encodeURIComponent(tag)}`,
    lastModified: siteLastModified,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const topicUrls: MetadataRoute.Sitemap = topicPages.map((t) => ({
    url: `${BASE_URL}/topics/${t.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/latest`,
      lastModified: siteLastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tags`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/roadmap`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/interview/practice`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [...staticPages, ...sectionUrls, ...topicUrls, ...tagUrls, ...articleUrls];
}
