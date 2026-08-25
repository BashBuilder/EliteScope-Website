import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for the ${siteConfig.appName} app.`,
};

const sections = [
  { id: "acceptance", label: "Acceptance of terms" },
  { id: "the-service", label: "The service" },
  { id: "not-advice", label: "Not financial advice" },
  { id: "eligibility", label: "Eligibility & accounts" },
  { id: "subscriptions", label: "Subscriptions & billing" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "ip", label: "Intellectual property" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing law" },
  { id: "changes", label: "Changes to these terms" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Use"
      subtitle={`Last updated: ${siteConfig.legalDates.termsEffective}`}
      sections={sections}
    >
      <section id="acceptance">
        <h2>1. Acceptance of terms</h2>
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your access to and use
          of the {siteConfig.appName} mobile application and this website
          (together, the &quot;Service&quot;), operated by{" "}
          {siteConfig.company.legalName} (&quot;{siteConfig.appName}
          ,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
          creating an account, downloading the app, or otherwise using the
          Service, you agree to be bound by these Terms. If you do not agree,
          do not use the Service.
        </p>
      </section>

      <section id="the-service">
        <h2>2. The service</h2>
        <p>
          {siteConfig.appName} provides market signals, technical indicators,
          a risk calculator, and related analytical tools across three
          access tiers — Explorer, Strategist, and Mathematician — each
          unlocking additional depth of signal detail and analytics.
        </p>
      </section>

      <section id="not-advice">
        <h2>3. Not financial advice</h2>
        <p>
          The Service is provided for <strong>informational and
          educational purposes only</strong>. Signals, indicators, analyst
          notes, and any other content within the app are not, and should
          not be construed as, financial, investment, trading, tax, or legal
          advice, or a recommendation or solicitation to buy or sell any
          financial instrument. We are not a registered investment adviser,
          broker-dealer, or financial institution.
        </p>
        <p>
          Trading and investing involve substantial risk of loss and are not
          suitable for every person. You are solely responsible for
          evaluating any signal or piece of content and for any trading or
          investment decision you make. Past performance of any signal or
          strategy is not indicative of future results.
        </p>
      </section>

      <section id="eligibility">
        <h2>4. Eligibility & accounts</h2>
        <p>
          You must be at least 18 years old, and legally able to enter into
          a binding contract in your jurisdiction, to use the Service. When
          you register, you agree to provide accurate information and to
          keep your login credentials confidential. You are responsible for
          all activity that occurs under your account.
        </p>
      </section>

      <section id="subscriptions">
        <h2>5. Subscriptions & billing</h2>
        <p>
          Explorer, Strategist, and Mathematician plans are offered on a
          weekly or monthly auto-renewing subscription basis and are billed
          through the Apple App Store or Google Play, depending on where you
          subscribed. Full billing, renewal, and cancellation details are
          set out in our{" "}
          <a href="/subscription-terms">Subscription Terms</a>, which are
          incorporated into these Terms by reference.
        </p>
      </section>

      <section id="acceptable-use">
        <h2>6. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any unlawful purpose or in violation of any applicable law;</li>
          <li>Attempt to gain unauthorized access to the Service, other accounts, or our systems;</li>
          <li>Reverse engineer, scrape, or resell signal data without our prior written consent;</li>
          <li>Interfere with or disrupt the integrity or performance of the Service;</li>
          <li>Misrepresent your identity or impersonate another person.</li>
        </ul>
      </section>

      <section id="ip">
        <h2>7. Intellectual property</h2>
        <p>
          The Service, including its design, signals, indicators, text,
          graphics, and the {siteConfig.appName} name and logo, is owned by{" "}
          {siteConfig.company.legalName} or its licensors and is protected
          by intellectual property laws. We grant you a limited,
          non-exclusive, non-transferable license to use the app for your
          personal, non-commercial use, subject to these Terms.
        </p>
      </section>

      <section id="disclaimers">
        <h2>8. Disclaimers</h2>
        <p>
          The Service is provided &quot;as is&quot; and &quot;as
          available,&quot; without warranties of any kind, whether express
          or implied, including implied warranties of merchantability,
          fitness for a particular purpose, and non-infringement. We do not
          warrant that signals or analytics will be accurate, complete, or
          profitable, or that the Service will be uninterrupted or
          error-free.
        </p>
      </section>

      <section id="liability">
        <h2>9. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {siteConfig.company.legalName}{" "}
          and its officers, employees, and affiliates will not be liable for
          any indirect, incidental, special, consequential, or punitive
          damages, or any loss of profits or trading losses, arising out of
          or related to your use of the Service, even if advised of the
          possibility of such damages.
        </p>
      </section>

      <section id="termination">
        <h2>10. Termination</h2>
        <p>
          You may stop using the Service and delete your account at any
          time — see <a href="/delete-account">Delete Your Account</a>. We
          may suspend or terminate your access if we reasonably believe you
          have violated these Terms.
        </p>
      </section>

      <section id="governing-law">
        <h2>11. Governing law</h2>
        <p>
          These Terms are governed by the laws of{" "}
          {siteConfig.company.jurisdiction}, without regard to its conflict
          of laws principles, unless otherwise required by the mandatory
          consumer protection laws of your country of residence.
        </p>
      </section>

      <section id="changes">
        <h2>12. Changes to these terms</h2>
        <p>
          We may update these Terms from time to time. Material changes will
          be reflected by an updated &quot;Last updated&quot; date above,
          and where required, we&apos;ll provide additional notice in the
          app. Continued use of the Service after changes take effect
          constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section id="contact">
        <h2>13. Contact</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${siteConfig.company.supportEmail}`}>
            {siteConfig.company.supportEmail}
          </a>{" "}
          or via our <a href="/support">Support page</a>.
        </p>
      </section>
    </LegalShell>
  );
}
