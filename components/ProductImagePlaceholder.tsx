import type { Locale } from "@/lib/content";

export function ProductImagePlaceholder({ locale, className = "aspect-square" }: { locale: Locale; className?: string }) {
  return (
    <div className={`flex w-full items-center justify-center bg-panel p-4 text-center text-sm text-steel ${className}`}>
      {locale === "zh" ? "产品图片待更新" : "Product Image Coming Soon"}
    </div>
  );
}
