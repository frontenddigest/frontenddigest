"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const ENQUIRY_TYPES = [
  { value: "feedback", label: "Feedback" },
  { value: "suggest-topic", label: "Suggest a topic" },
  { value: "general", label: "General enquiry" },
] as const;

const FORM_NAME = "contact";

export function ContactForm() {
  const [type, setType] = useState<string>("feedback");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new URLSearchParams();
    formData.set("form-name", FORM_NAME);
    formData.set("enquiry_type", type);
    formData.set("name", name);
    formData.set("email", email);
    formData.set("message", message);
    if (botField) formData.set("bot-field", botField);

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setType("feedback");
      setName("");
      setEmail("");
      setMessage("");
      setBotField("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <p className="text-lg font-medium text-foreground">Thanks for getting in touch.</p>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll reply to your message as soon as we can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={cn(
            "mt-6 rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground",
            "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          )}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-border bg-card p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />

      {/* Honeypot for spam — keep hidden from users */}
      <div className="absolute -left-[9999px] top-0" aria-hidden>
        <label htmlFor="contact-bot">Leave this empty</label>
        <input
          id="contact-bot"
          type="text"
          name="bot-field"
          tabIndex={-1}
          autoComplete="off"
          value={botField}
          onChange={(e) => setBotField(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="contact-type" className="block text-sm font-medium text-foreground">
          What is this about?
        </label>
        <select
          id="contact-type"
          name="enquiry_type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={cn(
            "mt-2 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          )}
          required
        >
          {ENQUIRY_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={cn(
              "mt-2 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            )}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              "mt-2 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            )}
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className={cn(
            "mt-2 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          )}
          placeholder="Your message..."
          required
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground",
          "transition-colors hover:bg-primary/90 disabled:opacity-50",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        )}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
