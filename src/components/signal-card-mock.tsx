const accentMap = {
  cyan: { text: "text-cyan", bg: "bg-cyan-soft", border: "border-cyan/30" },
  indigo: { text: "text-indigo", bg: "bg-indigo-soft", border: "border-indigo/30" },
  violet: { text: "text-violet", bg: "bg-violet-soft", border: "border-violet/30" },
} as const;

export function SignalCardMock() {
  return (
    <div className="animate-float relative w-[300px] rounded-2xl border border-hairline bg-surface/90 p-5 shadow-[0_30px_80px_-20px_rgba(99,102,241,0.35)] backdrop-blur">
      <div className={`absolute -top-3 left-5 rounded-full border ${accentMap.indigo.border} ${accentMap.indigo.bg} px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-indigo`}>
        Strategist tier
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-lg font-medium text-text-primary">EUR/USD</p>
          <p className="text-xs text-text-muted">4H · updated 6m ago</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg bg-emerald-soft px-2.5 py-1 text-emerald">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 19 12 5l7 14" />
          </svg>
          <span className="text-xs font-semibold">Long</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-lg border border-hairline-soft bg-void/40 py-2">
          <p className="text-[10px] uppercase tracking-wide text-text-faint">Entry</p>
          <p className="font-mono text-xs text-text-primary">1.0850</p>
        </div>
        <div className="rounded-lg border border-hairline-soft bg-void/40 py-2">
          <p className="text-[10px] uppercase tracking-wide text-text-faint">Stop</p>
          <p className="font-mono text-xs text-rose">1.0820</p>
        </div>
        <div className="rounded-lg border border-hairline-soft bg-void/40 py-2">
          <p className="text-[10px] uppercase tracking-wide text-text-faint">Target</p>
          <p className="font-mono text-xs text-emerald">1.0910</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-text-muted">Confidence</span>
        <span className="font-mono text-xs text-text-primary">82%</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-hairline-soft">
        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-indigo to-cyan" />
      </div>
    </div>
  );
}

export function ScopeGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden
    >
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeOpacity="0.15" />
      <circle cx="100" cy="100" r="66" stroke="currentColor" strokeOpacity="0.22" />
      <line x1="100" y1="8" x2="100" y2="30" stroke="currentColor" strokeOpacity="0.3" />
      <line x1="100" y1="170" x2="100" y2="192" stroke="currentColor" strokeOpacity="0.3" />
      <line x1="8" y1="100" x2="30" y2="100" stroke="currentColor" strokeOpacity="0.3" />
      <line x1="170" y1="100" x2="192" y2="100" stroke="currentColor" strokeOpacity="0.3" />
      <path
        className="animate-draw text-emerald"
        d="M40 128 62 108 78 118 98 92 116 100 138 78 160 58"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="100" r="4" fill="currentColor" className="text-indigo" />
    </svg>
  );
}
