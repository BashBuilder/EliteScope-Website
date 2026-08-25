import { StoreButtons } from "./store-buttons";
import { SignalCardMock, ScopeGlyph } from "./signal-card-mock";
import { TickerMarquee } from "./ticker-marquee";

export function Hero() {
  return (
    <section className="scope-field relative overflow-hidden">
      <ScopeGlyph className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] text-hairline md:-left-10" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-20 md:grid-cols-2 md:pt-28">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
              Market Intelligence
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-text-primary md:text-5xl">
            Read the market
            <br />
            through a scope,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo via-cyan to-emerald">
              not a guess.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-text-muted">
            Elite Scope turns structured market observation into signals you
            can act on — tiered by depth, backed by a risk calculator, and
            built for disciplined traders.
          </p>

          <div className="mt-8">
            <StoreButtons />
          </div>

          <p className="mt-4 text-xs text-text-faint">
            Free to download. Explorer, Strategist &amp; Mathematician plans
            unlock inside the app.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
            <SignalCardMock />
          </div>
        </div>
      </div>

      <TickerMarquee />
    </section>
  );
}
