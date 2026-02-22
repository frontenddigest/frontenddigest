import type { Article } from "@/lib/content";

const BASE_URL = "https://frontenddigest.com";

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Frontend Digest",
    url: BASE_URL,
    description:
      "Your comprehensive guide to growing as a frontend engineer. From fundamentals to architecture, leadership to AI — content for every career stage.",
    publisher: {
      "@type": "Organization",
      name: "Frontend Digest",
      url: BASE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({ article }: { article: Article }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Frontend Digest",
      url: BASE_URL,
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/${article.section}/${article.slug}`,
    },
    url: `${BASE_URL}/${article.section}/${article.slug}`,
    keywords: article.tags,
    articleSection: article.section,
    image: `${BASE_URL}/${article.section}/${article.slug}/opengraph-image`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
