# Contributing to Frontend Digest

Thank you for your interest in contributing to Frontend Digest! This project aims to be the go-to resource for frontend engineers at every career stage, and community contributions make it better for everyone.

## Ways to Contribute

### 1. Write a New Article

Articles are the core of Frontend Digest. We're always looking for well-written, practical content across all sections.

**Sections accepting contributions:**

| Section | Topics |
|---------|--------|
| Fundamentals | JavaScript, HTML, CSS, React, TypeScript, browser internals, testing, performance |
| Architecture | Design patterns, state management, rendering strategies, build tools, infrastructure |
| System Design | Frontend system design breakdowns for real-world or interview scenarios |
| Leadership | Tech lead skills, mentoring, planning, hiring, managing tech debt |
| Communication | Writing RFCs, presenting to executives, storytelling, cross-functional collaboration |
| AI & Frontend | AI tools, prompt engineering, building AI features, future of frontend |

### 2. Improve Existing Content

- Fix typos, grammar, or formatting issues
- Add missing context or clarify explanations
- Update outdated information
- Add code examples or diagrams

### 3. Improve the Website

- Bug fixes
- Accessibility improvements
- Performance optimizations
- New features (please open an issue first to discuss)

### 4. Add Interview Questions

We maintain 55+ interview questions in `src/lib/questions.ts`. You can add new questions or improve existing answers.

## Writing an Article

### Article Structure

All articles live in the `content/` directory, organized by section. Each article is an MDX file with frontmatter metadata.

**Create a new file:** `content/{section}/{slug}.mdx`

**Frontmatter template:**

```yaml
---
title: "Your Article Title"
description: "A concise description (1-2 sentences) for SEO and article cards."
date: "2026-02-20"
author: "Your Name"
audience: ["beginner", "senior", "architect", "founder"]
tags: ["relevant", "tags"]
order: 10
featured: false
---
```

**Frontmatter fields:**

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Article title |
| `description` | Yes | 1-2 sentence description |
| `date` | Yes | Publication date (YYYY-MM-DD) |
| `author` | Yes | Your name or "Frontend Digest" |
| `audience` | Yes | Array of target audiences: `beginner`, `senior`, `architect`, `founder` |
| `tags` | Yes | Array of relevant tags |
| `order` | No | Sort order within the section (lower = first) |
| `featured` | No | `true` to show on the homepage |

### Content Guidelines

- **Be practical.** Explain the *why*, not just the *what*. Include real-world context.
- **Use clear headings.** Structure with `##` (h2) for main sections and `###` (h3) for subsections. The article title is automatically rendered as h1.
- **Include code examples** when relevant. Use fenced code blocks with language tags.
- **Keep it focused.** Each article should cover one topic well rather than many topics superficially.
- **Link to related articles** within Frontend Digest when relevant.
- **Cite sources** for statistics, quotes, or external references.
- **Target reading time:** 4-8 minutes (roughly 800-1600 words).

### Style Guide

- Use American English spelling
- Use sentence case for headings ("How browsers render pages", not "How Browsers Render Pages")
- Use Oxford commas
- Use backticks for inline code, file names, and CLI commands
- Avoid first person ("I think...") — prefer second person ("You'll find...")
- Avoid marketing language — be direct and technical

## Adding Interview Questions

Interview questions live in `src/lib/questions.ts`. Each question follows this structure:

```typescript
{
  id: 56, // Next sequential ID
  category: "JavaScript", // One of the defined categories
  difficulty: "intermediate", // "beginner" | "intermediate" | "advanced"
  question: "What is the event loop in JavaScript?",
  answer: "The event loop is a mechanism that...",
  tags: ["event-loop", "async", "browser"],
}
```

**Categories:** JavaScript, CSS & HTML, React, TypeScript, Performance, Testing, Browser & Web APIs

## Development Workflow

### Setting Up

```bash
git clone https://github.com/frontenddigest/frontenddigest.git
cd frontenddigest
pnpm install
pnpm dev
```

### Before Submitting

1. **Run the build** to catch errors:
   ```bash
   pnpm build
   ```
2. **Check your content** renders correctly at `http://localhost:3000`
3. **Verify links** and code examples work

### Pull Request Process

1. Fork the repository and create a branch from `main`
2. Name your branch descriptively: `add-article-web-workers`, `fix-typo-react-basics`, `feature-search`
3. Make your changes
4. Run `pnpm build` to verify everything compiles
5. Submit a pull request with:
   - A clear title describing the change
   - A description of what was added/changed and why
   - Screenshots if there are visual changes

### Review Criteria

Pull requests are reviewed for:

- **Accuracy** — Is the technical content correct?
- **Clarity** — Is it well-written and easy to follow?
- **Completeness** — Does it cover the topic adequately?
- **Formatting** — Does it follow the style guide?
- **Build** — Does `pnpm build` pass?

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing. We are committed to providing a welcoming and inclusive environment for everyone.

## Questions?

- Open a [GitHub Issue](https://github.com/frontenddigest/frontenddigest/issues) for bugs or feature requests
- Email [hello@frontenddigest.com](mailto:hello@frontenddigest.com) for other questions

Thank you for helping make Frontend Digest a better resource for the frontend community!
