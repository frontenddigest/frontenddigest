import Link from "next/link";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { href: "/fundamentals", label: "Fundamentals" },
  { href: "/architecture", label: "Architecture" },
  { href: "/system-design", label: "System Design" },
  { href: "/latest", label: "Latest" },
  { href: "/interview", label: "Interview Prep" },
  { href: "/leadership", label: "Leadership" },
  { href: "/communication", label: "Communication" },
  { href: "/ai", label: "AI" },
  { href: "/roadmap", label: "Roadmap" },
];

const resourceLinks = [
  { href: "/roadmap", label: "Roadmap" },
  { href: "/tags", label: "Tags" },
  { href: "/rss.xml", label: "RSS" },
  { href: "/about", label: "About" },
];

const connectLinks = [
  { href: "https://github.com/frontenddigest/frontenddigest", label: "GitHub" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-muted-foreground transition-colors",
                      "hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-muted-foreground transition-colors",
                      "hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "text-sm text-muted-foreground transition-colors",
                      "hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Frontend Digest · Educational content for the
            frontend community · <Link href="/about#attribution" className="underline hover:text-foreground">Attribution</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
