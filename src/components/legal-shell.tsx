import { NavBar } from "./components/nav-bar";
import { Footer } from "./components/footer";

export function LegalShell({
  title,
  subtitle,
  sections,
  children,
}: {
  title: string;
  subtitle?: string;
  sections?: { id: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-sm text-text-muted">{subtitle}</p>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
          {sections && sections.length > 0 && (
            <nav className="hidden md:block">
              <ul className="sticky top-24 space-y-3 border-l border-hairline-soft pl-4">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-text-muted transition-colors hover:text-text-primary"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="min-w-0 max-w-2xl space-y-10 text-sm leading-relaxed text-text-muted [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-text-primary [&_h2]:scroll-mt-24 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_a]:text-text-primary [&_a]:underline [&_a]:decoration-hairline [&_a]:underline-offset-2 [&_strong]:text-text-primary">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
