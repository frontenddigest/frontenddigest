import { generateOGImage } from "@/lib/og-image";

export const alt = "Communication & Influence | Frontend Digest";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return generateOGImage({
    title: "Communication & Influence",
    description:
      "Tell compelling stories, present to executives, write winning proposals, and sell your technical vision.",
    section: "communication",
  });
}
