const steps = [
  {
    step: "Explorer",
    title: "Pick your tier",
    body: "Start on Explorer for core signals, or jump straight to Strategist or Mathematician for full levels and analytics.",
  },
  {
    step: "Strategist",
    title: "Read the signals",
    body: "Each call shows pair, timeframe, direction, and confidence — with entry, stop-loss, and take-profit once unlocked.",
  },
  {
    step: "Mathematician",
    title: "Size the trade",
    body: "Run the risk calculator against your account size and stop-loss before you commit, then track it from your dashboard.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-hairline-soft bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald">
            The flow
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
            From signal to sized position
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-hairline" />
                <span className="font-mono text-[11px] uppercase tracking-wide text-text-faint">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
