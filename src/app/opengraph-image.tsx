import { generateOGImage } from "@/lib/og-image";

export const alt = "Frontend Digest — Level Up Your Frontend Engineering Career";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    title: "Level Up Your Frontend Engineering Career",
    description:
      "From fundamentals to architecture, leadership to AI — your comprehensive guide to growing as a frontend engineer.",
  });
}
