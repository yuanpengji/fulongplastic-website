import { ArticlePage } from "@/lib/page-components";
import { articles, getArticle } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ category: article.category, slug: article.slug }));
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }) {
  const article = getArticle(params.slug);
  if (!article || article.category !== params.category) notFound();
  return buildMetadata({
    locale: "zh",
    path: `/knowledge-base/${params.category}/${params.slug}/`,
    title: article.zh.seoTitle,
    description: article.zh.metaDescription
  });
}

export default function Page({ params }: { params: { category: string; slug: string } }) {
  const article = getArticle(params.slug);
  if (!article || article.category !== params.category) notFound();
  return <ArticlePage locale="zh" articleSlug={params.slug} />;
}
