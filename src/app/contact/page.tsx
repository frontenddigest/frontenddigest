import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MessageSquare, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Frontend Digest",
  description:
    "Send feedback, suggest topics, or get in touch. We'd love to hear from you.",
  alternates: { canonical: "https://frontenddigest.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Share feedback, suggest topics for new articles, or reach out with a
          general enquiry. We read every message.
        </p>
      </div>

      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
          <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <div>
            <span className="font-medium text-foreground">Feedback</span>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Tell us what’s working or what we can improve.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
          <Lightbulb className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <div>
            <span className="font-medium text-foreground">Suggest a topic</span>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Ideas for new articles or interview questions.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
          <MessageSquare className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <div>
            <span className="font-medium text-foreground">General enquiry</span>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Partnerships, questions, or anything else.
            </p>
          </div>
        </div>
      </div>

      <ContactForm />

      <p className="mt-8 text-center text-sm text-muted-foreground">
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="underline hover:text-foreground">
          Privacy Policy
        </Link>
        . Form data is processed by Netlify.
      </p>
    </div>
  );
}
