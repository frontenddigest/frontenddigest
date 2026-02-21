import { generateOGImage } from "@/lib/og-image";

export const alt = "Interview Prep | Frontend Digest";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    title: "Interview Prep",
    description:
      "55+ frontend interview questions with detailed answers. Practice randomly and master every topic area.",
    section: "interview",
  });
}
