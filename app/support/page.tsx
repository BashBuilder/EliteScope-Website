import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help with the ${siteConfig.appName} app.`,
};

const topics = [
  {
    q: "I can't log in",
    a: "Double check your email and password, and confirm you're using the same account you registered with. If you've forgotten your password, contact support and we'll help you regain access.",
  },
  {
    q: "My subscription isn't unlocking signals",
    a: "Pull to refresh on the Access screen — subscription status can take a minute to sync after purchase. If it still doesn't show as active, contact us with the email on your account and your purchase date.",
  },
  {
    q: "I was charged after cancelling",
    a: "Cancellations take effect at the end of the current billing period, not immediately, so one final charge can occur if you cancel close to the renewal date. See Subscription Terms for the cancellation window.",
  },
  {
    q: "How do I request a refund?",
    a: "Refunds are handled by Apple or Google, whichever store you purchased through — see Subscription Terms for direct links.",
  },
  {
    q: "How do I delete my account?",
    a: "See our Delete Your Account page for step-by-step instructions.",
  },
];

export default function SupportPage() {
  return (
    <LegalShell
      title="Support"
      subtitle="Common questions, and how to reach us directly."
    >
      <section>
        <h2>Contact us</h2>
        <p>
          For anything not covered below, email{" "}
          <a href={`mailto:${siteConfig.company.supportEmail}`}>
            {siteConfig.company.supportEmail}
          </a>{" "}
          and include your account email and, if relevant, your device
          platform (iOS or Android). We aim to respond within 2 business
          days.
        </p>
      </section>

      <section>
        <h2>Common topics</h2>
        <div className="mt-4 space-y-6">
          {topics.map((t) => (
            <div key={t.q}>
              <p className="font-display font-medium text-text-primary">{t.q}</p>
              <p className="mt-1">{t.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Legal & billing</h2>
        <p>
          For billing and subscription policy, see{" "}
          <a href="/subscription-terms">Subscription Terms</a>. For how we
          handle your data, see our <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>
    </LegalShell>
  );
}
