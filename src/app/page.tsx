import { Hero } from "@/components/home/Hero";
import { AudienceSelector } from "@/components/home/AudienceSelector";
import { ContentPillars } from "@/components/home/ContentPillars";
import { FeaturedContent } from "@/components/home/FeaturedContent";
import { WebSiteJsonLd } from "@/components/seo/JsonLd";
import { getFeaturedArticles } from "@/lib/content";

export default function Home() {
  const featuredArticles = getFeaturedArticles();

  return (
    <>
      <WebSiteJsonLd />
      <Hero />
      <AudienceSelector />
      <ContentPillars />
      <FeaturedContent articles={featuredArticles} />
    </>
  );
}
