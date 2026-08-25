import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { siteConfig, tiers } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Subscription Terms",
  description: `Subscription pricing, billing, and cancellation terms for ${siteConfig.appName}.`,
};

const sections = [
  { id: "plans", label: "Plans & pricing" },
  { id: "renewal", label: "Auto-renewal" },
  { id: "cancel", label: "How to cancel" },
  { id: "refunds", label: "Refunds" },
  { id: "changes", label: "Changing tiers" },
];

export default function SubscriptionTermsPage() {
  return (
    <LegalShell
      title="Subscription Terms"
      subtitle="How Explorer, Strategist, and Mathematician billing works."
      sections={sections}
    >
      <section id="plans">
        <h2>1. Plans & pricing</h2>
        <ul>
          {tiers.map((t) => (
            <li key={t.id}>
              <strong>{t.name}</strong> — ${t.price.weekly.toFixed(2)}/week or
              ${t.price.monthly.toFixed(2)}/month.
            </li>
          ))}
        </ul>
        <p>
          Prices are shown in USD and may vary by region and currency as set
          by the App Store or Google Play. The price shown at checkout in
          your local app store is the price that applies.
        </p>
      </section>

      <section id="renewal">
        <h2>2. Auto-renewal</h2>
        <p>
          All subscriptions automatically renew for the same duration and
          price unless cancelled at least 24 hours before the end of the
          current billing period. Your payment method on file with Apple or
          Google will be charged for renewal within 24 hours of the period&apos;s
          end.
        </p>
      </section>

      <section id="cancel">
        <h2>3. How to cancel</h2>
        <p>
          You can cancel at any time. Cancelling stops future renewals but
          does not refund the current period — you keep access until it
          ends.
        </p>
        <ul>
          <li>
            <strong>On iOS:</strong> Settings → your name → Subscriptions →
            select {siteConfig.appName} → Cancel Subscription.
          </li>
          <li>
            <strong>On Android:</strong> Google Play app → Menu → Subscriptions
            → select {siteConfig.appName} → Cancel subscription.
          </li>
          <li>
            <strong>In-app:</strong> open the Access screen and use Manage,
            which links to the same platform settings.
          </li>
        </ul>
      </section>

      <section id="refunds">
        <h2>4. Refunds</h2>
        <p>
          Because purchases are processed by Apple or Google, refunds are
          governed by their respective policies:
        </p>
        <ul>
          <li>
            iOS purchases: request a refund at{" "}
            <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
              reportaproblem.apple.com
            </a>
            .
          </li>
          <li>
            Android purchases: request a refund through Google Play&apos;s
            order history within Google Play, subject to Google&apos;s refund
            policy.
          </li>
        </ul>
        <p>We&apos;re happy to help point you to the right place — contact <a href="/support">Support</a> if you&apos;re not sure where a purchase was made.</p>
      </section>

      <section id="changes">
        <h2>5. Changing tiers</h2>
        <p>
          Upgrades and downgrades are available from the Access screen in
          the app at any time. Your platform (App Store or Google Play)
          determines how the change is prorated and when it takes effect.
        </p>
      </section>
    </LegalShell>
  );
}
