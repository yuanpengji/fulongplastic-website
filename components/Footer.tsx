import Link from "next/link";
import { company, Locale, localizePath, productCategories, text } from "@/lib/content";

export function Footer({ locale }: { locale: Locale }) {
  const t = text[locale];

  return (
    <footer className="border-t border-line bg-[#07080a] py-10">
      <div className="container grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <h2 className="text-lg font-bold">{t.brand}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-steel">{company[locale].positioning}</p>
          <div className="mt-4 text-sm text-slate-300">
            <p>Email: {company.email}</p>
            <p>WhatsApp: {company.whatsapp}</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">{t.nav.products}</h3>
          <div className="mt-3 grid gap-2 text-sm text-steel">
            {productCategories.slice(0, 3).map((category) => (
              <Link key={category.slug} href={localizePath(`/products/${category.slug}/`, locale)}>
                {category[locale].name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">{t.nav.knowledge}</h3>
          <div className="mt-3 grid gap-2 text-sm text-steel">
            <Link href={localizePath("/knowledge-base/product-encyclopedia/", locale)}>Product Encyclopedia</Link>
            <Link href={localizePath("/knowledge-base/tissue-culture-knowledge/", locale)}>Tissue Culture Knowledge</Link>
            <Link href={localizePath("/knowledge-base/faq/", locale)}>FAQ</Link>
            <Link href={localizePath("/knowledge-base/industry-news-insights/", locale)}>Industry News & Insights</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
