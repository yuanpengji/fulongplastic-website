import Link from "next/link";
import { Locale, localizePath, text } from "@/lib/content";

type HeaderProps = {
  locale: Locale;
  path: string;
};

export function Header({ locale, path }: HeaderProps) {
  const t = text[locale];
  const otherLocale = locale === "zh" ? "en" : "zh";
  const switchPath = otherLocale === "en" ? `/en${path === "/" ? "" : path}` : path.replace(/^\/en/, "") || "/";

  const nav = [
    { href: "/", label: t.nav.home },
    { href: "/products/", label: t.nav.products },
    { href: "/applications/", label: t.nav.applications },
    { href: "/knowledge-base/", label: t.nav.knowledge },
    { href: "/about/", label: t.nav.about },
    { href: "/contact/", label: t.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/92 backdrop-blur">
      <div className="container flex min-h-16 items-center justify-between gap-5">
        <Link href={localizePath("/", locale)} className="flex items-center gap-3 leading-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded border border-line bg-black text-[10px] font-bold text-steel">
            LOGO
          </span>
          <span className="flex flex-col">
            <span className="text-base font-bold">{t.brand}</span>
            <span className="text-xs text-steel">Tissue Culture Containers</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-slate-200 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={localizePath(item.href, locale)} className="hover:text-mint">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href={switchPath} className="rounded border border-line px-3 py-2 text-sm text-slate-200">
            {locale === "zh" ? "EN" : "中文"}
          </Link>
          <Link href={localizePath("/contact/", locale)} className="btn btn-primary hidden sm:inline-flex">
            {t.actions.requestQuote}
          </Link>
        </div>
      </div>
    </header>
  );
}
