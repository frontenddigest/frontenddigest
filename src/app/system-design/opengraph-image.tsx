import { generateOGImage } from "@/lib/og-image";

export const alt = "System Design | Frontend Digest";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    title: "System Design",
    description:
      "Practice frontend system design with real interview questions — from autocomplete to video players to collaborative editors.",
    section: "system-design",
  });
}
