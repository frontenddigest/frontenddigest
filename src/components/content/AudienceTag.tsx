import { cn } from "@/lib/utils";

const audienceStyles: Record<string, string> = {
  beginner: "bg-blue-500/15 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
  "fresh-graduate":
    "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  senior: "bg-purple-500/15 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
  "senior-developer":
    "bg-purple-500/15 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
  architect: "bg-violet-500/15 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300",
  "frontend-architect":
    "bg-violet-500/15 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300",
  founder: "bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  "startup-founder":
    "bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  lead: "bg-indigo-500/15 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
  manager: "bg-teal-500/15 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300",
};

function getAudienceStyle(audience: string): string {
  const key = audience.toLowerCase().replace(/\s+/g, "-");
  return (
    audienceStyles[key] ??
    "bg-gray-500/15 text-gray-700 dark:bg-gray-500/20 dark:text-gray-300"
  );
}

function formatAudienceLabel(audience: string): string {
  return audience
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function AudienceTag({ audience }: { audience: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        getAudienceStyle(audience)
      )}
    >
      {formatAudienceLabel(audience)}
    </span>
  );
}
