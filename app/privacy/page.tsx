import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for the ${siteConfig.appName} app.`,
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "data-we-collect", label: "Data we collect" },
  { id: "how-we-use", label: "How we use data" },
  { id: "sharing", label: "How we share data" },
  { id: "payment", label: "Payment data" },
  { id: "retention", label: "Data retention" },
  { id: "your-rights", label: "Your rights" },
  { id: "security", label: "Security" },
  { id: "children", label: "Children's privacy" },
  { id: "international", label: "International transfers" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      subtitle={`Last updated: ${siteConfig.legalDates.privacyEffective}`}
      sections={sections}
    >
      <section id="overview">
        <h2>1. Overview</h2>
        <p>
          This Privacy Policy explains how {siteConfig.company.legalName}{" "}
          (&quot;{siteConfig.appName}, &quot;we,&quot; &quot;us&quot;)
          collects, uses, and shares information when you use the{" "}
          {siteConfig.appName} app and this website. It&apos;s written to be
          read alongside our <a href="/terms">Terms of Use</a>.
        </p>
      </section>

      <section id="data-we-collect">
        <h2>2. Data we collect</h2>
        <p>We collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Account data</strong> — first name, last name, email
            address, and a securely hashed password when you register.
          </li>
          <li>
            <strong>Subscription data</strong> — your selected tier, billing
            cycle, and subscription status, as provided to us by the App
            Store or Google Play. We do not receive or store your full
            payment card details.
          </li>
          <li>
            <strong>Usage data</strong> — how you interact with signals,
            tools, and screens in the app, used to keep the Service working
            and to improve it.
          </li>
          <li>
            <strong>Device data</strong> — device type, operating system,
            and app version, collected automatically for diagnostics and
            compatibility.
          </li>
        </ul>
        <p>
          We do not collect your brokerage credentials, bank account
          numbers, or the details of trades you place with a third-party
          broker — {siteConfig.appName} does not execute trades on your
          behalf.
        </p>
      </section>

      <section id="how-we-use">
        <h2>3. How we use data</h2>
        <p>We use the data above to:</p>
        <ul>
          <li>Create and maintain your account and authenticate you;</li>
          <li>Deliver signals, indicators, and analytics appropriate to your subscription tier;</li>
          <li>Process and manage subscriptions in cooperation with the App Store and Google Play;</li>
          <li>Provide customer support and respond to your requests;</li>
          <li>Maintain the security, integrity, and performance of the Service;</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </section>

      <section id="sharing">
        <h2>4. How we share data</h2>
        <p>We do not sell your personal data. We share data only with:</p>
        <ul>
          <li>
            <strong>Apple and Google</strong>, to process subscription
            purchases and manage your billing relationship;
          </li>
          <li>
            <strong>Service providers</strong> who help us operate the
            Service (for example, hosting and infrastructure providers),
            under contractual confidentiality obligations;
          </li>
          <li>
            <strong>Authorities</strong>, where required to comply with law,
            regulation, or a valid legal process.
          </li>
        </ul>
      </section>

      <section id="payment">
        <h2>5. Payment data</h2>
        <p>
          All subscription payments are processed by Apple or Google under
          their respective privacy policies. {siteConfig.appName} never
          sees or stores your card number, billing address, or other
          payment credentials directly.
        </p>
      </section>

      <section id="retention">
        <h2>6. Data retention</h2>
        <p>
          We retain account data for as long as your account is active, and
          for a limited period afterward as needed to comply with legal
          obligations, resolve disputes, and enforce our agreements. You can
          request deletion at any time — see{" "}
          <a href="/delete-account">Delete Your Account</a>.
        </p>
      </section>

      <section id="your-rights">
        <h2>7. Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access,
          correct, export, or delete your personal data, and to object to or
          restrict certain processing. To exercise any of these rights,
          contact us at{" "}
          <a href={`mailto:${siteConfig.company.privacyEmail}`}>
            {siteConfig.company.privacyEmail}
          </a>
          .
        </p>
      </section>

      <section id="security">
        <h2>8. Security</h2>
        <p>
          We use reasonable technical and organizational measures — including
          encryption of passwords and secure transport for data in
          transit — to protect your information. No method of storage or
          transmission is completely secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      <section id="children">
        <h2>9. Children&apos;s privacy</h2>
        <p>
          The Service is not directed to, and is not intended for use by,
          anyone under 18. We do not knowingly collect personal data from
          children. If you believe a child has provided us with personal
          data, contact us and we will delete it.
        </p>
      </section>

      <section id="international">
        <h2>10. International transfers</h2>
        <p>
          We may process and store data in countries other than your own.
          Where required, we rely on appropriate safeguards for
          international transfers of personal data.
        </p>
      </section>

      <section id="changes">
        <h2>11. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material
          changes will be reflected by an updated &quot;Last updated&quot;
          date above, and where required, we&apos;ll notify you in the app.
        </p>
      </section>

      <section id="contact">
        <h2>12. Contact</h2>
        <p>
          Questions about this Privacy Policy or your data can be sent to{" "}
          <a href={`mailto:${siteConfig.company.privacyEmail}`}>
            {siteConfig.company.privacyEmail}
          </a>
          .
        </p>
      </section>
    </LegalShell>
  );
}
