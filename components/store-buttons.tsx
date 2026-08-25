import { siteConfig } from "@/lib/site-config";

function AppleMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.365 1.43c0 1.14-.462 2.15-1.216 2.94-.85.89-2.24 1.58-3.42 1.49-.14-1.11.46-2.28 1.19-3.03.83-.86 2.28-1.5 3.36-1.55.02.05.08.1.08.15Zm3.36 16.13c-.5 1.14-.74 1.65-1.38 2.66-.9 1.42-2.16 3.19-3.73 3.2-1.39.02-1.75-.9-3.63-.89-1.88.01-2.28.91-3.67.9-1.57-.02-2.76-1.61-3.66-3.03C1.06 17.66.06 13.5 1.34 10.7c.63-1.39 1.76-2.27 2.99-2.29 1.34-.03 2.02.91 3.63.91 1.6 0 2.19-.91 3.66-.88 1.15.02 2.38.63 3.24 1.71-2.85 1.56-2.38 5.63.51 6.4Z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.6 2.3c-.4.2-.6.6-.6 1.1v17.2c0 .5.2.9.6 1.1l9.9-9.7L3.6 2.3Z" opacity="0.9" />
      <path d="M16.8 9.9 5.1 3.2l9.7 9.6 2-2.9Z" />
      <path d="M5.1 20.8 16.8 14l-2-2.9-9.7 9.7Z" opacity="0.7" />
      <path d="m17.9 10.6 3.1 1.8c.5.3.5 1 0 1.3l-3.1 1.8-2.3-3 2.3-2.9Z" opacity="0.55" />
    </svg>
  );
}

function StoreBadge({
  href,
  live,
  mark,
  eyebrow,
  label,
}: {
  href: string;
  live: boolean;
  mark: React.ReactNode;
  eyebrow: string;
  label: string;
}) {
  const classes =
    "group flex items-center gap-3 rounded-xl border border-hairline bg-surface px-4 py-2.5 transition-colors hover:border-text-faint hover:bg-surface-2";

  const content = (
    <>
      <span className="text-text-primary">{mark}</span>
      <span className="flex flex-col leading-none text-left">
        <span className="text-[10px] uppercase tracking-wider text-text-muted">
          {eyebrow}
        </span>
        <span className="font-display text-sm font-medium text-text-primary">
          {label}
        </span>
      </span>
    </>
  );

  if (!live) {
    return (
      <span
        className={`${classes} cursor-default opacity-90`}
        title="Coming soon"
        aria-disabled
      >
        {content}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {content}
    </a>
  );
}

export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <StoreBadge
        href={siteConfig.appStoreUrl}
        live={siteConfig.appStoreLive}
        mark={<AppleMark />}
        eyebrow="Download on the"
        label="App Store"
      />
      <StoreBadge
        href={siteConfig.playStoreUrl}
        live={siteConfig.playStoreLive}
        mark={<PlayMark />}
        eyebrow="Get it on"
        label="Google Play"
      />
    </div>
  );
}
