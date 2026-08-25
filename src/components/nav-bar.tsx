import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "./lib/site-config";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline-soft bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt=""
            width={28}
            height={28}
            className="opacity-95"
          />
          <span className="font-display text-[15px] font-semibold tracking-tight text-text-primary">
            {siteConfig.appName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Link
          href="/#download"
          className="rounded-lg bg-indigo px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Get the app
        </Link>
      </div>
    </header>
  );
}
