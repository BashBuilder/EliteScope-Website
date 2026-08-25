const items = [
  { pair: "EUR/USD", tf: "4H", dir: "Long", conf: 82 },
  { pair: "XAU/USD", tf: "1D", dir: "Long", conf: 76 },
  { pair: "GBP/JPY", tf: "1H", dir: "Short", conf: 68 },
  { pair: "BTC/USD", tf: "4H", dir: "Long", conf: 71 },
  { pair: "USD/CAD", tf: "1D", dir: "Short", conf: 79 },
  { pair: "AUD/USD", tf: "4H", dir: "Long", conf: 64 },
  { pair: "NAS100", tf: "1H", dir: "Short", conf: 73 },
  { pair: "USD/JPY", tf: "1D", dir: "Long", conf: 85 },
];

function Chip({ pair, tf, dir, conf }: (typeof items)[number]) {
  const positive = dir === "Long";
  return (
    <div className="mx-2.5 flex shrink-0 items-center gap-2.5 rounded-lg border border-hairline-soft bg-surface px-3.5 py-2 font-mono text-xs">
      <span className="text-text-primary">{pair}</span>
      <span className="text-text-faint">{tf}</span>
      <span className={positive ? "text-emerald" : "text-rose"}>{dir}</span>
      <span className="text-text-muted">{conf}%</span>
    </div>
  );
}

export function TickerMarquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-hairline-soft bg-surface/40 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-void to-transparent" />
      <div className="animate-marquee flex w-max motion-reduce:animate-none">
        {row.map((it, i) => (
          <Chip key={i} {...it} />
        ))}
      </div>
    </div>
  );
}
