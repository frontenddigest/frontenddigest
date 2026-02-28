import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Frontend Digest",
  description:
    "Privacy policy for Frontend Digest: how we handle contact form data, use Netlify Forms, and protect your information.",
  alternates: { canonical: "https://frontenddigest.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-muted-foreground">
        Last updated: February 2026
      </p>

      <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Overview</h2>
          <p className="mt-3">
            Frontend Digest (&quot;we&quot;, &quot;us&quot;) is committed to protecting your privacy.
            This policy describes how we collect, use, and store information when you use
            frontenddigest.com, including when you submit the contact form.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
          <p className="mt-3">
            We do not collect personal data simply by you visiting or reading content on this site.
          </p>
          <p className="mt-3">
            When you use the <Link href="/contact" className="underline hover:text-foreground">contact form</Link> (feedback,
            topic suggestions, or general enquiries), we collect:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Name (if you provide it)</li>
            <li>Email address</li>
            <li>Type of enquiry (feedback, suggest a topic, general enquiry)</li>
            <li>Message content</li>
          </ul>
          <p className="mt-3">
            This information is used only to respond to your message and is not used for marketing
            or shared with third parties for their marketing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">How the contact form works</h2>
          <p className="mt-3">
            The contact form is powered by <strong className="text-foreground">Netlify Forms</strong>.
            When you submit the form, your data is sent to Netlify&apos;s servers and stored there so we can
            read and reply to your message. Netlify may process and store this data in accordance with
            their <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Privacy Policy</a> and
            <a href="https://www.netlify.com/legal/terms-of-use/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground"> Terms of Use</a>.
            We do not receive or store your form submissions on our own servers; we access them via the
            Netlify dashboard to respond to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Retention and your rights</h2>
          <p className="mt-3">
            We keep contact form submissions only as long as needed to respond and for a short period
            for record-keeping. You can ask us to delete your submission or any personal data we hold
            by contacting us (e.g. via a follow-up email or the contact form, noting &quot;Privacy request&quot;).
            We will comply with your request within a reasonable time, subject to applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Cookies and analytics</h2>
          <p className="mt-3">
            This site may use minimal cookies or analytics (e.g. to understand traffic). If we use
            third-party services that set cookies or collect data, we will describe them here or in a
            cookie notice. As of the last update, the site is primarily static and the contact form
            is the main feature that involves submitting personal data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Changes</h2>
          <p className="mt-3">
            We may update this privacy policy from time to time. The &quot;Last updated&quot; date at the top
            will be revised when we do. Continued use of the site after changes constitutes acceptance
            of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-3">
            For privacy-related questions or requests, use our{" "}
            <Link href="/contact" className="underline hover:text-foreground">contact form</Link> and
            select &quot;General enquiry&quot; or email us at{" "}
            <a href="mailto:hello@frontenddigest.com" className="underline hover:text-foreground">
              hello@frontenddigest.com
            </a>.
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to About
        </Link>
      </div>
    </div>
  );
}
