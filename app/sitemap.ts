import type { MetadataRoute } from "next";
import { articles, productCategories, productPath, products, siteUrl } from "@/lib/content";

const lastModified = new Date("2026-06-16T00:00:00.000Z");

function toEnglishPath(path: string) {
  return path === "/" ? "/en" : `/en${path}`;
}

function toSitemapEntry(path: string): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteUrl}${path}`,
    lastModified
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/products/", "/applications/", "/knowledge-base/", "/about/", "/contact/"];
  const categoryPaths = productCategories.map((category) => `/products/${category.slug}/`);
  const knowledgePaths = ["product-encyclopedia", "tissue-culture-knowledge", "faq", "industry-news-insights"].map(
    (category) => `/knowledge-base/${category}/`
  );
  const articlePaths = articles.map((article) => `/knowledge-base/${article.category}/${article.slug}/`);

  const zhPaths = [...staticPaths, ...categoryPaths, ...knowledgePaths, ...articlePaths];
  const localizedPaths = zhPaths.flatMap((path) => [path, toEnglishPath(path)]);

  const productUrls = products.flatMap((product) => {
    return [productPath(product, "zh"), productPath(product, "en")];
  });

  return Array.from(new Set([...localizedPaths, ...productUrls])).map(toSitemapEntry);
}
