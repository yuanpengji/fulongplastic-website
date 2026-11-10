import Image from "next/image";
import Link from "next/link";
import { Locale, Product, productPath, text } from "@/lib/content";
import { localizeSpecPlaceholder } from "@/lib/spec-value-i18n";

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const content = product[locale];
  const t = text[locale];

  return (
    <Link href={productPath(product, locale)} className="panel group overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <Image src={product.image} alt={content.name} width={720} height={720} className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.02]" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold">{content.name}</h3>
        <dl className="mt-4 grid gap-2 text-sm text-steel">
          {!["culture-lids", "sealing-film"].includes(product.slug) ? (
            <div className="flex justify-between gap-4">
              <dt>{t.fields.capacity}</dt>
              <dd className="text-right text-slate-200">{localizeSpecPlaceholder(product.specs.capacity.split("/").slice(0, 2).join("/"), locale)}</dd>
            </div>
          ) : null}
          <div className="flex justify-between gap-4">
            <dt>{t.fields.material}</dt>
            <dd className="text-slate-200">{localizeSpecPlaceholder(product.cardMaterial ?? product.specs.material, locale)}</dd>
          </div>
        </dl>
        <span className="mt-5 inline-flex text-sm font-bold text-mint">{t.actions.viewDetails}</span>
      </div>
    </Link>
  );
}
