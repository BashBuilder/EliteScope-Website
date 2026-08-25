import { NavBar } from "@/components/nav-bar";
import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";
import { HowItWorks } from "@/components/how-it-works";
import { PricingTiers } from "@/components/pricing-tiers";
import { FaqAccordion } from "@/components/faq-accordion";
import { DownloadCta } from "@/components/download-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <PricingTiers />
        <FaqAccordion />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
