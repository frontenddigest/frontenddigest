import { getAllArticlesByDate } from "@/lib/content";

export const runtime = "nodejs";

const BASE_URL = "https://frontenddigest.com";

function escapeXml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const articles = getAllArticlesByDate().slice(0, 50);
  const lastBuildDate = new Date().toUTCString();

  const items = articles
    .map((a) => {
      const url = `${BASE_URL}/${a.section}/${a.slug}`;
      const title = escapeXml(a.title);
      const description = escapeXml(a.description ?? "");
      const pub = new Date(a.date);
      const pubDate = Number.isFinite(pub.getTime())
        ? pub.toUTCString()
        : new Date().toUTCString();
      const categories = (a.tags ?? [])
        .map((t) => `<category>${escapeXml(String(t))}</category>`)
        .join("");

      return [
        "<item>",
        `<title>${title}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        description ? `<description>${description}</description>` : "",
        `<pubDate>${pubDate}</pubDate>`,
        categories,
        "</item>",
      ]
        .filter(Boolean)
        .join("");
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Frontend Digest</title>
    <link>${BASE_URL}</link>
    <description>Level up your frontend engineering career.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}

