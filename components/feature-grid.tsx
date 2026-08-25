const features = [
  {
    title: "Live market signals",
    body: "Long and short calls across FX, indices, metals, and crypto — each tagged with timeframe and a confidence score, refreshed as conditions shift.",
    accent: "cyan",
  },
  {
    title: "Advanced indicators",
    body: "Layer in the indicators behind each call once you move past core signals, so you can see the structure, not just the conclusion.",
    accent: "indigo",
  },
  {
    title: "Structured analytics",
    body: "Analyst notes and deeper breakdowns on every signal for subscribers who want the full reasoning, not the headline.",
    accent: "violet",
  },
  {
    title: "Risk calculator",
    body: "Enter account size, risk percentage, entry, and stop-loss to get position size and exposure before you place a trade.",
    accent: "emerald",
  },
  {
    title: "Tiered access control",
    body: "Explorer, Strategist, and Mathematician — choose the depth of access that matches how you trade, and upgrade any time.",
    accent: "cyan",
  },
  {
    title: "One dashboard",
    body: "Live signal count, unlocked vs. locked calls, and your active plan, all on a single screen built for a quick daily check-in.",
    accent: "indigo",
  },
] as const;

const accentClass: Record<string, string> = {
  cyan: "text-cyan",
  indigo: "text-indigo",
  violet: "text-violet",
  emerald: "text-emerald",
};

const accentBg: Record<string, string> = {
  cyan: "bg-cyan-soft",
  indigo: "bg-indigo-soft",
  violet: "bg-violet-soft",
  emerald: "bg-emerald-soft",
};

export function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan">
          What&apos;s inside
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
          Built for disciplined market observation
        </h2>
        <p className="mt-4 text-text-muted">
          Every tool in the app is scoped to one job: read the market
          clearly, size positions responsibly, and know exactly what
          you&apos;re looking at before you act.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-hairline bg-surface p-6 transition-colors hover:border-text-faint"
          >
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${accentBg[f.accent]}`}
            >
              <span className={`h-2 w-2 rounded-full ${accentClass[f.accent]} bg-current`} />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-text-primary">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
