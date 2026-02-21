"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Question } from "@/lib/questions";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  index?: number;
}

const difficultyStyles: Record<string, string> = {
  easy: "bg-green-500/10 text-green-600 dark:text-green-400",
  medium: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  hard: "bg-red-500/10 text-red-600 dark:text-red-400",
};

export function QuestionCard({ question, index }: QuestionCardProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-card transition-shadow hover:shadow-sm">
      <button
        type="button"
        onClick={() => setRevealed(!revealed)}
        className="flex w-full items-start gap-4 p-5 text-left"
      >
        {typeof index === "number" && (
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-semibold text-muted-foreground">
            {index}
          </span>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-medium text-foreground leading-relaxed">
            {question.question}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span
              className={cn(
                "rounded-full px-2.5 py-0.5 text-xs font-medium",
                difficultyStyles[question.difficulty]
              )}
            >
              {question.difficulty}
            </span>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {question.category}
            </span>
          </div>
        </div>
        <span className="mt-1 shrink-0 text-muted-foreground">
          {revealed ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </span>
      </button>

      {revealed && (
        <div className="border-t border-border px-5 py-4">
          <p className="text-sm leading-relaxed text-foreground/85 whitespace-pre-line">
            {question.answer}
          </p>
        </div>
      )}
    </div>
  );
}
