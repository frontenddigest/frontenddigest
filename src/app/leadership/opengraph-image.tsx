import { generateOGImage } from "@/lib/og-image";

export const alt = "Leading Teams | Frontend Digest";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    title: "Leading Teams",
    description:
      "Grow from individual contributor to technical leader. Build culture, mentor engineers, and drive impact.",
    section: "leadership",
  });
}
