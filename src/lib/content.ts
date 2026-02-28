import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  audience: string[];
  tags: string[];
  readingTime: string;
  section: string;
  order?: number;
  featured?: boolean;
}

export interface Article extends ArticleMeta {
  content: string;
}

const contentDirectory = path.join(process.cwd(), "content");

function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase();
}

function safeDateMs(dateStr: string): number {
  const ms = new Date(dateStr).getTime();
  return Number.isFinite(ms) ? ms : 0;
}

export function getArticlesBySection(section: string): ArticleMeta[] {
  const sectionDir = path.join(contentDirectory, section);

  if (!fs.existsSync(sectionDir)) {
    return [];
  }

  const files = fs.readdirSync(sectionDir).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(sectionDir, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      author: data.author || "Frontend Digest",
      audience: data.audience || [],
      tags: data.tags || [],
      readingTime: stats.text,
      section,
      order: data.order || 999,
      featured: data.featured || false,
    } as ArticleMeta;
  });

  return articles.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function getArticle(section: string, slug: string): Article | null {
  const fullPath = path.join(contentDirectory, section, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    author: data.author || "Frontend Digest",
    audience: data.audience || [],
    tags: data.tags || [],
    readingTime: stats.text,
    section,
    order: data.order || 999,
    featured: data.featured || false,
    content,
  };
}

export function getAllArticles(): ArticleMeta[] {
  const sections = [
    "fundamentals",
    "architecture",
    "system-design",
    "leadership",
    "communication",
    "ai",
  ];
  return sections.flatMap((section) => getArticlesBySection(section));
}

export function getFeaturedArticles(): ArticleMeta[] {
  return getAllArticles().filter((a) => a.featured);
}

export function getAllArticlesByDate(): ArticleMeta[] {
  return getAllArticles().sort((a, b) => safeDateMs(b.date) - safeDateMs(a.date));
}

export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const article of getAllArticles()) {
    for (const tag of article.tags ?? []) {
      const normalized = normalizeTag(tag);
      if (!normalized) continue;
      counts.set(normalized, (counts.get(normalized) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function getArticlesByTag(tag: string): ArticleMeta[] {
  const target = normalizeTag(tag);
  return getAllArticles()
    .filter((a) => (a.tags ?? []).some((t) => normalizeTag(t) === target))
    .sort((a, b) => safeDateMs(b.date) - safeDateMs(a.date));
}

export const sections = [
  {
    id: "fundamentals",
    title: "Frontend Fundamentals",
    description:
      "Master the core building blocks of the web: HTML, CSS, JavaScript, browser internals, and modern frameworks.",
    href: "/fundamentals",
    icon: "Code",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: "architecture",
    title: "Frontend Architecture",
    description:
      "Design scalable systems, choose the right patterns, and build frontend infrastructure that lasts.",
    href: "/architecture",
    icon: "Layers",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    id: "system-design",
    title: "System Design",
    description:
      "Practice frontend system design with real interview questions — from autocomplete to video players to collaborative editors.",
    href: "/system-design",
    icon: "LayoutDashboard",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    id: "interview",
    title: "Interview Prep",
    description:
      "55+ frontend interview questions with detailed answers. Practice randomly and master every topic area.",
    href: "/interview",
    icon: "ClipboardCheck",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    id: "leadership",
    title: "Leading Teams",
    description:
      "Grow from individual contributor to technical leader. Build culture, mentor engineers, and drive impact.",
    href: "/leadership",
    icon: "Users",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    id: "communication",
    title: "Communication & Influence",
    description:
      "Tell compelling stories, present to executives, write winning proposals, and sell your technical vision.",
    href: "/communication",
    icon: "MessageSquare",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    id: "ai",
    title: "AI & Frontend",
    description:
      "Leverage AI to supercharge your workflow, build intelligent UIs, and stay ahead of the curve.",
    href: "/ai",
    icon: "Sparkles",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
] as const;

export const audiences = [
  {
    id: "fresh-graduate",
    title: "Fresh Graduate",
    description:
      "Just starting your frontend journey? Build a strong foundation with fundamentals and best practices.",
    icon: "GraduationCap",
    recommendedSections: ["fundamentals", "ai"],
    href: "/fundamentals",
  },
  {
    id: "senior-developer",
    title: "Senior Developer",
    description:
      "Ready to level up? Dive into architecture, design patterns, and technical leadership.",
    icon: "Rocket",
    recommendedSections: ["architecture", "leadership", "communication"],
    href: "/architecture",
  },
  {
    id: "frontend-architect",
    title: "Frontend Architect",
    description:
      "Shape the technical direction. Master system design, team leadership, and executive communication.",
    icon: "Building2",
    recommendedSections: ["architecture", "leadership", "communication"],
    href: "/leadership",
  },
  {
    id: "startup-founder",
    title: "Startup Founder",
    description:
      "Build fast, scale smart. Learn architecture decisions that will save you months down the road.",
    icon: "Lightbulb",
    recommendedSections: ["architecture", "ai", "communication"],
    href: "/architecture",
  },
] as const;
