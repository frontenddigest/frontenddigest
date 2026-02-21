import { generateOGImage } from "@/lib/og-image";
import { getArticle } from "@/lib/content";

const SECTION_ID = "leadership";

export const alt = "Frontend Digest";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(SECTION_ID, slug);
  if (!article) {
    return generateOGImage({ title: "Frontend Digest", section: SECTION_ID });
  }
  return generateOGImage({
    title: article.title,
    description: article.description,
    section: SECTION_ID,
  });
}
