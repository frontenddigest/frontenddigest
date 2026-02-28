export type TopicPage = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  sectionHint?: string;
};

export const topicPages: TopicPage[] = [
  {
    slug: "fundamentals",
    title: "Fundamentals",
    description: "HTML, CSS, and JavaScript essentials to get job-ready fast.",
    tags: ["html", "css", "javascript", "fundamentals"],
    sectionHint: "fundamentals",
  },
  {
    slug: "framework",
    title: "Framework (React)",
    description: "Core React concepts, components, hooks, and patterns.",
    tags: ["react", "components", "hooks", "jsx", "patterns"],
    sectionHint: "fundamentals",
  },
  {
    slug: "testing",
    title: "Testing",
    description:
      "Unit, integration, and E2E testing with Jest/Vitest, Testing Library, Cypress, and Playwright.",
    tags: ["testing", "jest", "cypress", "unit-testing"],
    sectionHint: "fundamentals",
  },
  {
    slug: "system-design",
    title: "System Design",
    description:
      "Frontend system design practice for interviews: feeds, autocomplete, editors, dashboards, and more.",
    tags: ["system-design", "interview"],
    sectionHint: "system-design",
  },
  {
    slug: "performance",
    title: "Performance",
    description: "Core Web Vitals, rendering performance, and optimization patterns.",
    tags: ["performance", "optimization", "rendering", "core-web-vitals"],
    sectionHint: "architecture",
  },
  {
    slug: "architecture-patterns",
    title: "Architecture Patterns",
    description: "Scalable patterns, design systems, and frontend architecture building blocks.",
    tags: ["architecture", "patterns", "design-systems", "tooling"],
    sectionHint: "architecture",
  },
  {
    slug: "technical-vision",
    title: "Technical Vision",
    description: "Roadmapping, strategy, and leading with technical direction.",
    tags: ["strategy", "leadership"],
    sectionHint: "leadership",
  },
  {
    slug: "team-leadership",
    title: "Team Leadership",
    description: "Mentoring, culture, code reviews, and running high-performing teams.",
    tags: ["leadership", "management", "culture", "code-review", "engineering"],
    sectionHint: "leadership",
  },
  {
    slug: "communication",
    title: "Communication",
    description: "Stakeholder alignment, writing, storytelling, and influence.",
    tags: ["communication", "collaboration", "influence", "storytelling", "writing"],
    sectionHint: "communication",
  },
  {
    slug: "hiring",
    title: "Hiring",
    description: "Hiring and growing teams: interviewing, roles, and career growth.",
    tags: ["hiring", "career", "management"],
    sectionHint: "leadership",
  },
  {
    slug: "scaling",
    title: "Scaling",
    description: "Scaling frontend systems: performance, caching, rendering, and tooling.",
    tags: ["performance", "caching", "rendering", "tooling", "monorepo"],
    sectionHint: "architecture",
  },
];

export function getTopicPage(slug: string): TopicPage | undefined {
  return topicPages.find((t) => t.slug === slug);
}

