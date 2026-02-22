# Frontend Digest

**Your comprehensive guide to growing as a frontend engineer.**

From fundamentals to architecture, leadership to AI — content for every career stage. Whether you're a fresh graduate or a frontend architect, Frontend Digest is the one-stop resource to level up your frontend engineering career.

**[frontenddigest.com](https://frontenddigest.com)**

## What's Inside

- **Frontend Fundamentals** — JavaScript, HTML, CSS, React, TypeScript, browser internals, testing, and web performance
- **Frontend Architecture** — System design, state management, micro-frontends, design systems, rendering strategies, caching, monorepos, and more
- **System Design** — 15 popular frontend system design interview questions with detailed breakdowns
- **Interview Prep** — 55+ frontend interview questions with an interactive random practice mode
- **Leading Teams** — First 90 days as tech lead, mentoring, roadmapping, tech debt management, hiring
- **Communication & Influence** — Writing RFCs, presenting to executives, storytelling, selling technical decisions
- **AI & Frontend** — AI-powered development, prompt engineering, building AI features, the future of frontend

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Content:** MDX via [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theme:** Dark/light mode via [next-themes](https://github.com/pacocoursey/next-themes)
- **Hosting:** [Netlify](https://www.netlify.com/)

## Getting Started

### Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io/) (recommended)

### Setup

```bash
# Clone the repository
git clone https://github.com/frontenddigest/frontenddigest.git
cd frontenddigest

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
pnpm build
pnpm start
```

## Project Structure

```
frontenddigest/
├── content/                  # MDX articles organized by section
│   ├── fundamentals/
│   ├── architecture/
│   ├── system-design/
│   ├── leadership/
│   ├── communication/
│   └── ai/
├── src/
│   ├── app/                  # Next.js App Router pages
│   ├── components/           # React components
│   │   ├── content/          # Article rendering components
│   │   ├── home/             # Homepage components
│   │   ├── interview/        # Interview practice components
│   │   └── layout/           # Navbar, Footer, ThemeProvider
│   └── lib/                  # Utilities, content loading, MDX rendering
├── netlify.toml              # Netlify deployment config
└── package.json
```

## Contributing

We welcome contributions! Whether it's fixing a typo, improving an article, or adding entirely new content — every contribution helps the frontend community.

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Quick Start for Contributors

1. Fork the repository
2. Create a branch: `git checkout -b my-contribution`
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Connect

- **Website:** [frontenddigest.com](https://frontenddigest.com)
- **Email:** hello@frontenddigest.com
- **GitHub:** [github.com/frontenddigest](https://github.com/frontenddigest)
