import Image from "next/image";
import Link from "next/link";
import { company, knowledgeCategories, Locale, localizePath, productCategories, text } from "@/lib/content";

export function Footer({ locale }: { locale: Locale }) {
  const t = text[locale];

  return (
    <footer className="border-t border-line bg-[#07080a] py-10">
      <div className="container grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded border border-line bg-black">
              <Image src="/Logo.JPG" alt={t.brand} width={36} height={36} className="h-full w-full rounded object-contain" />
            </span>
            <h2 className="text-lg font-bold">{t.brand}</h2>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-steel">{company[locale].positioning}</p>
          <div className="mt-4 text-sm text-slate-300">
            <p>{locale === "zh" ? "电话" : "Phone"}: {company.phone}</p>
            <p>Email: <a href={`mailto:${company.email}`}>{company.email}</a></p>
            <p>WhatsApp: <a href="https://wa.me/8618358715006">{company.whatsapp}</a></p>
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
            {knowledgeCategories.map((category) => (
              <Link key={category.slug} href={localizePath(`/knowledge-base/${category.slug}/`, locale)}>
                {category[locale]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
