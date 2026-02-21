import { generateOGImage } from "@/lib/og-image";

export const alt = "Frontend Architecture | Frontend Digest";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    title: "Frontend Architecture",
    description:
      "Design scalable systems, choose the right patterns, and build frontend infrastructure that lasts.",
    section: "architecture",
  });
}
