"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/fundamentals", label: "Fundamentals" },
  { href: "/architecture", label: "Architecture" },
  { href: "/system-design", label: "System Design" },
  { href: "/latest", label: "Latest" },
  { href: "/interview", label: "Interview Prep" },
  { href: "/leadership", label: "Leadership" },
  { href: "/communication", label: "Communication" },
  { href: "/ai", label: "AI" },
  { href: "/tags", label: "Tags" },
  { href: "/roadmap", label: "Roadmap" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40",
        "bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold text-foreground transition-colors hover:text-foreground/80"
        >
          Frontend Digest
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className={cn(
                "rounded-lg p-2 text-muted-foreground transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              )}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className={cn(
              "rounded-lg p-2 text-muted-foreground transition-colors md:hidden",
              "hover:bg-accent hover:text-accent-foreground",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-opacity md:hidden",
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex min-h-screen flex-col">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <span className="text-lg font-semibold text-foreground">
              Frontend Digest
            </span>
            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className={cn(
                "rounded-lg p-2 text-muted-foreground transition-colors",
                "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-8 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-2xl font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
