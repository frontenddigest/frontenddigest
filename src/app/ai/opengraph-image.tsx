import { generateOGImage } from "@/lib/og-image";

export const alt = "AI & Frontend | Frontend Digest";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    title: "AI & Frontend",
    description:
      "Leverage AI to supercharge your workflow, build intelligent UIs, and stay ahead of the curve.",
    section: "ai",
  });
}
