import { StoreButtons } from "./store-buttons";
import { ScopeGlyph } from "./signal-card-mock";

export function DownloadCta() {
  return (
    <section id="download" className="scope-field relative overflow-hidden">
      <ScopeGlyph className="pointer-events-none absolute -right-16 -top-16 h-96 w-96 text-indigo/40 md:-right-8 md:-top-8" />
      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
          Bring the scope with you
        </h2>
        <p className="mx-auto mt-4 max-w-md text-text-muted">
          Live signals, risk tools, and your access tier — all in one app,
          built for iOS and Android.
        </p>
        <div className="mt-8 flex justify-center">
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}
