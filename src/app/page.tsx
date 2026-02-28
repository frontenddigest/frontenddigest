import { Hero } from "@/components/home/Hero";
import { HomeCallouts } from "@/components/home/HomeCallouts";
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
      <HomeCallouts />
      <AudienceSelector />
      <ContentPillars />
      <FeaturedContent articles={featuredArticles} />
    </>
  );
}
