import { generateOGImage } from "@/lib/og-image";

export const alt = "Frontend Fundamentals | Frontend Digest";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    title: "Frontend Fundamentals",
    description:
      "Master the core building blocks of the web: HTML, CSS, JavaScript, browser internals, and modern frameworks.",
    section: "fundamentals",
  });
}
