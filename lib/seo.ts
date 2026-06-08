import type { Metadata } from "next";
import { Locale, localizePath, siteUrl } from "@/lib/content";

type SeoInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
};

export function buildMetadata({ locale, path, title, description, image = "/products/pc-tissue-culture-bottles.jpg" }: SeoInput): Metadata {
  const url = `${siteUrl}${localizePath(path, locale)}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "zh-CN": `${siteUrl}${path}`,
        en: `${siteUrl}/en${path === "/" ? "" : path}`
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: locale === "zh" ? "富龙塑业" : "Fulong Plastic",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
      images: [{ url: image }]
    }
  };
}
