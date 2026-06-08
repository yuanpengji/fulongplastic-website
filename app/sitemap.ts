import type { MetadataRoute } from "next";
import { articles, localizePath, productCategories, productPath, products, siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/products/", "/applications/", "/knowledge-base/", "/about/", "/contact/"];
  const categoryPaths = productCategories
    .filter((category) => category.slug !== "featured")
    .map((category) => `/products/${category.slug}/`);
  const knowledgePaths = ["product-encyclopedia", "tissue-culture-knowledge", "faq", "industry-news-insights"].map(
    (category) => `/knowledge-base/${category}/`
  );
  const articlePaths = articles.map((article) => `/knowledge-base/${article.category}/${article.slug}/`);

  const zhPaths = [...staticPaths, ...categoryPaths, ...knowledgePaths, ...articlePaths];
  const localized = zhPaths.flatMap((path) => [
    {
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "zh-CN": `${siteUrl}${path}`,
          en: `${siteUrl}${localizePath(path, "en")}`
        }
      }
    },
    {
      url: `${siteUrl}${localizePath(path, "en")}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          "zh-CN": `${siteUrl}${path}`,
          en: `${siteUrl}${localizePath(path, "en")}`
        }
      }
    }
  ]);

  const productUrls = products.flatMap((product) => {
    const zh = productPath(product, "zh");
    const en = productPath(product, "en");
    return [
      {
        url: `${siteUrl}${zh}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            "zh-CN": `${siteUrl}${zh}`,
            en: `${siteUrl}${en}`
          }
        }
      },
      {
        url: `${siteUrl}${en}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            "zh-CN": `${siteUrl}${zh}`,
            en: `${siteUrl}${en}`
          }
        }
      }
    ];
  });

  return [...localized, ...productUrls];
}
