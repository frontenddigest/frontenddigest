import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Frontend Digest — Level Up Your Frontend Engineering Career",
    template: "%s | Frontend Digest",
  },
  description:
    "Your comprehensive guide to growing as a frontend engineer. From fundamentals to architecture, leadership to AI — content for every career stage.",
  keywords: [
    "frontend engineering",
    "frontend architecture",
    "web development",
    "React",
    "JavaScript",
    "CSS",
    "technical leadership",
    "frontend career",
    "AI frontend",
  ],
  authors: [{ name: "Frontend Digest" }],
  creator: "Frontend Digest",
  metadataBase: new URL("https://frontenddigest.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Frontend Digest",
    title: "Frontend Digest — Level Up Your Frontend Engineering Career",
    description:
      "Your comprehensive guide to growing as a frontend engineer. From fundamentals to architecture, leadership to AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Digest",
    description:
      "Your comprehensive guide to growing as a frontend engineer.",
  },
  alternates: {
    canonical: "https://frontenddigest.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
