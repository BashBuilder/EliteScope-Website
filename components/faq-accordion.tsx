"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    q: "Is this financial advice?",
    a: `No. ${siteConfig.appName} provides market signals, indicators, and analytical tools for informational and educational purposes only. Nothing in the app is a recommendation to buy or sell any security or instrument. You're responsible for your own trading decisions.`,
  },
  {
    q: "What's the difference between the tiers?",
    a: "Explorer includes core signals with direction, timeframe, and a confidence score. Strategist adds advanced indicators plus full entry, stop-loss, and take-profit levels. Mathematician adds structured analytics and analyst notes on every signal.",
  },
  {
    q: "How does billing work?",
    a: "Subscriptions are billed weekly or monthly through the App Store or Google Play, whichever you subscribed through. They renew automatically until cancelled.",
  },
  {
    q: "How do I cancel?",
    a: "Cancel any time from your device's subscription settings (App Store or Google Play), or from the Manage screen inside the app. Access continues until the end of the billing period you already paid for.",
  },
  {
    q: "Can I switch tiers later?",
    a: "Yes — upgrade or downgrade from the app's Access screen at any time. The change takes effect according to your platform's standard subscription rules.",
  },
  {
    q: "What markets are covered?",
    a: "Signals span major and minor FX pairs, key indices, metals, and crypto majors, with new instruments added as coverage expands.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 text-text-faint transition-transform ${open ? "rotate-45" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-violet">
          Questions
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
          Frequently asked
        </h2>
      </div>

      <div className="mt-10 divide-y divide-hairline-soft border-y border-hairline-soft">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={open}
              >
                <span className="font-display text-sm font-medium text-text-primary md:text-base">
                  {item.q}
                </span>
                <ChevronIcon open={open} />
              </button>
              {open && (
                <p className="animate-fade-up pb-5 text-sm leading-relaxed text-text-muted">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
