import { ArticlePage } from "@/lib/page-components";
import { articles, getArticle } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ locale: "en", category: article.category, slug: article.slug }));
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }) {
  const article = getArticle(params.slug);
  if (!article || article.category !== params.category) notFound();
  return buildMetadata({
    locale: "en",
    path: `/knowledge-base/${params.category}/${params.slug}/`,
    title: article.en.seoTitle,
    description: article.en.metaDescription
  });
}

export default function Page({ params }: { params: { category: string; slug: string } }) {
  const article = getArticle(params.slug);
  if (!article || article.category !== params.category) notFound();
  return <ArticlePage locale="en" articleSlug={params.slug} />;
}
