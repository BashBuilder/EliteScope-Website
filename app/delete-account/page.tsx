import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: `How to delete your ${siteConfig.appName} account and data.`,
};

export default function DeleteAccountPage() {
  return (
    <LegalShell
      title="Delete Your Account"
      subtitle="You can request deletion of your account and personal data at any time."
    >
      <section>
        <h2>How to request deletion</h2>
        <p>
          Email{" "}
          <a href={`mailto:${siteConfig.company.privacyEmail}?subject=Account%20Deletion%20Request`}>
            {siteConfig.company.privacyEmail}
          </a>{" "}
          from the address associated with your account, with the subject
          line &quot;Account Deletion Request.&quot; We&apos;ll confirm your
          identity and process the request.
        </p>
      </section>

      <section>
        <h2>What gets deleted</h2>
        <p>Once your request is verified, we permanently delete:</p>
        <ul>
          <li>Your name, email address, and password;</li>
          <li>Your subscription and access-tier history stored in our systems;</li>
          <li>Any support correspondence tied to your account.</li>
        </ul>
        <p>
          We may retain limited records where required by law (for example,
          billing records for tax purposes) for the minimum period
          necessary, after which they are also deleted.
        </p>
      </section>

      <section>
        <h2>Timing</h2>
        <p>
          We process deletion requests within 30 days of verifying your
          identity. You&apos;ll receive a confirmation email once it&apos;s
          complete.
        </p>
      </section>

      <section>
        <h2>Your active subscription</h2>
        <p>
          Deleting your account does not automatically cancel an active
          App Store or Google Play subscription. Cancel it separately
          through your device settings — see{" "}
          <a href="/subscription-terms">Subscription Terms</a> — to stop
          future billing.
        </p>
      </section>
    </LegalShell>
  );
}
