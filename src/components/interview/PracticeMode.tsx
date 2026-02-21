"use client";

import { useState, useCallback } from "react";
import { Shuffle, Eye, EyeOff, ArrowRight, RotateCcw, Filter } from "lucide-react";
import { questions, categories, getRandomQuestion } from "@/lib/questions";
import type { Category, Question } from "@/lib/questions";
import { cn } from "@/lib/utils";

const difficultyStyles: Record<string, string> = {
  easy: "bg-green-500/10 text-green-600 dark:text-green-400",
  medium: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  hard: "bg-red-500/10 text-red-600 dark:text-red-400",
};

export function PracticeMode() {
  const [current, setCurrent] = useState<Question | null>(null);
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [seen, setSeen] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<Question["difficulty"] | "all">("all");
  const [showFilters, setShowFilters] = useState(false);

  const category = selectedCategory === "all" ? undefined : selectedCategory;
  const difficulty = selectedDifficulty === "all" ? undefined : selectedDifficulty;

  const pool = questions.filter((q) => {
    if (category && q.category !== category) return false;
    if (difficulty && q.difficulty !== difficulty) return false;
    return true;
  });

  const nextQuestion = useCallback(() => {
    const q = getRandomQuestion(seen, category, difficulty);
    if (q) {
      setCurrent(q);
      setAnswerRevealed(false);
      setSeen((prev) => [...prev, q.id]);
    } else {
      setSeen([]);
      const fresh = getRandomQuestion([], category, difficulty);
      if (fresh) {
        setCurrent(fresh);
        setAnswerRevealed(false);
        setSeen([fresh.id]);
      }
    }
  }, [seen, category, difficulty]);

  const resetSession = () => {
    setSeen([]);
    setCurrent(null);
    setAnswerRevealed(false);
  };

  if (!current) {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <div className="rounded-2xl border border-border bg-card p-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/10">
            <Shuffle className="h-8 w-8 text-teal-500" />
          </div>
          <h2 className="text-2xl font-bold">Random Practice Mode</h2>
          <p className="mt-3 text-muted-foreground">
            Test your knowledge with {pool.length} questions.
            Each question is shown randomly — try to answer before revealing the solution.
          </p>

          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Filter className="h-4 w-4" />
            {showFilters ? "Hide filters" : "Filter by category or difficulty"}
          </button>

          {showFilters && (
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as Category | "all")}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value as Question["difficulty"] | "all")}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
              >
                <option value="all">All Difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          )}

          <button
            type="button"
            onClick={nextQuestion}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Practice
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  const remaining = pool.length - seen.length;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Question {seen.length} of {pool.length}
        </span>
        <button
          type="button"
          onClick={resetSession}
          className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>

      <div className="mb-2 h-1.5 w-full rounded-full bg-muted">
        <div
          className="h-1.5 rounded-full bg-teal-500 transition-all duration-300"
          style={{ width: `${(seen.length / pool.length) * 100}%` }}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className={cn(
                "rounded-full px-2.5 py-0.5 text-xs font-medium",
                difficultyStyles[current.difficulty]
              )}
            >
              {current.difficulty}
            </span>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {current.category}
            </span>
          </div>

          <h3 className="text-xl font-semibold leading-relaxed">
            {current.question}
          </h3>
        </div>

        {answerRevealed ? (
          <div className="border-t border-border bg-muted/30 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Answer
            </p>
            <p className="leading-relaxed text-foreground/85 whitespace-pre-line">
              {current.answer}
            </p>
          </div>
        ) : (
          <div className="border-t border-border p-6 sm:p-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Think about your answer, then reveal when ready.
            </p>
            <button
              type="button"
              onClick={() => setAnswerRevealed(true)}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5",
                "text-sm font-medium transition-colors hover:bg-muted"
              )}
            >
              <Eye className="h-4 w-4" />
              Reveal Answer
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-center">
        {remaining > 0 ? (
          <button
            type="button"
            onClick={nextQuestion}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Next Question
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <div className="text-center">
            <p className="text-lg font-semibold">
              You&apos;ve completed all {pool.length} questions!
            </p>
            <button
              type="button"
              onClick={resetSession}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <RotateCcw className="h-4 w-4" />
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
