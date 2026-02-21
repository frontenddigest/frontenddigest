import { sections } from "@/lib/content";

export type SectionId =
  | "fundamentals"
  | "architecture"
  | "leadership"
  | "communication"
  | "ai";

export function getSectionMeta(sectionId: string) {
  return sections.find((s) => s.id === sectionId);
}

export function isSectionId(value: string): value is SectionId {
  return ["fundamentals", "architecture", "leadership", "communication", "ai"].includes(value);
}
