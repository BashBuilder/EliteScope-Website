import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms of Use" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/subscription-terms", label: "Subscription Terms" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/support", label: "Help & Contact" },
      { href: "/delete-account", label: "Delete Your Account" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline-soft bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/images/logo.png" alt="" width={26} height={26} />
              <span className="font-display text-[15px] font-semibold text-text-primary">
                {siteConfig.appName}
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-muted">
              {siteConfig.description}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-medium uppercase tracking-wider text-text-faint">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-text-muted transition-colors hover:text-text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-hairline-soft bg-void/50 p-4 text-xs leading-relaxed text-text-faint">
          <strong className="text-text-muted">Risk disclosure.</strong>{" "}
          {siteConfig.appName} provides market signals, indicators, and
          analytical tools for informational and educational purposes only.
          Nothing in the app or on this site is financial, investment, or
          trading advice, and past performance does not guarantee future
          results. Trading involves substantial risk of loss and is not
          suitable for every investor — only trade with capital you can
          afford to lose. See our{" "}
          <Link href="/terms" className="underline decoration-hairline underline-offset-2 hover:text-text-primary">
            Terms of Use
          </Link>{" "}
          for details.
        </div>

        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-hairline-soft pt-8 text-xs text-text-faint md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.appName}. All rights
            reserved.
          </p>
          <p>Built for iOS &amp; Android.</p>
        </div>
      </div>
    </footer>
  );
}
