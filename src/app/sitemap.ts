import type { MetadataRoute } from "next";
import { getAllArticles, sections } from "@/lib/content";

const BASE_URL = "https://frontenddigest.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/${article.section}/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: article.featured ? 0.8 : 0.6,
  }));

  const sectionUrls: MetadataRoute.Sitemap = sections.map((section) => ({
    url: `${BASE_URL}${section.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/roadmap`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/interview/practice`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [...staticPages, ...sectionUrls, ...articleUrls];
}
