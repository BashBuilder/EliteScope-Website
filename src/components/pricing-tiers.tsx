"use client";

import { useState } from "react";
import Link from "next/link";
import { tiers } from "./lib/site-config";

type Cycle = "weekly" | "monthly";

const accentStyles = {
  cyan: {
    ring: "border-cyan/30",
    text: "text-cyan",
    dot: "bg-cyan",
    button: "border border-cyan/40 text-cyan hover:bg-cyan-soft",
  },
  indigo: {
    ring: "border-indigo/50",
    text: "text-indigo",
    dot: "bg-indigo",
    button: "bg-indigo text-white hover:opacity-90",
  },
  violet: {
    ring: "border-violet/30",
    text: "text-violet",
    dot: "bg-violet",
    button: "border border-violet/40 text-violet hover:bg-violet-soft",
  },
} as const;

export function PricingTiers() {
  const [cycle, setCycle] = useState<Cycle>("monthly");

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-indigo">
            Access tiers
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
            Explorer, Strategist, Mathematician
          </h2>
          <p className="mt-4 text-text-muted">
            Each tier includes everything below it. Start where you are, upgrade
            in the app whenever you need more depth.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1 rounded-full border border-hairline bg-surface p-1">
          {(["weekly", "monthly"] as Cycle[]).map((c) => (
            <button
              key={c}
              onClick={() => setCycle(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
                cycle === c
                  ? "bg-indigo text-white"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((tier) => {
          const styles = accentStyles[tier.accent];
          return (
            <div
              key={tier.id}
              className={`relative flex flex-col rounded-2xl border bg-surface p-7 ${
                tier.featured ? styles.ring : "border-hairline"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-indigo px-3 py-0.5 text-[11px] font-medium text-white">
                  Most popular
                </span>
              )}

              <div className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  {tier.name}
                </h3>
              </div>
              <p className="mt-2 text-sm text-text-muted">{tier.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-mono text-3xl font-semibold text-text-primary">
                  ${tier.price[cycle].toFixed(2)}
                </span>
                <span className="text-sm text-text-faint">
                  / {cycle === "weekly" ? "week" : "month"}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2.5 text-sm text-text-muted"
                  >
                    <svg
                      className={`mt-0.5 h-4 w-4 shrink-0 ${styles.text}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        d="m5 13 4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {cap}
                  </li>
                ))}
              </ul>

              <Link
                href="/#download"
                className={`mt-8 rounded-xl px-4 py-2.5 text-center text-sm font-medium transition-colors ${styles.button}`}
              >
                Start with {tier.name}
              </Link>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-xs text-text-faint">
        Prices shown in USD and billed through the App Store or Google Play.
        Subscriptions renew automatically unless cancelled at least 24 hours
        before the end of the current period. See{" "}
        <a
          href="/subscription-terms"
          className="underline decoration-hairline underline-offset-2 hover:text-text-muted"
        >
          Subscription Terms
        </a>{" "}
        for full details.
      </p>
    </section>
  );
}
