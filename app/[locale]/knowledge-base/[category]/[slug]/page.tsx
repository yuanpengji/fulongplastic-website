import { ArticlePage } from "@/lib/page-components";
import { articles, getArticle } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({ locale: "en", category: article.category, slug: article.slug }));
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return buildMetadata({
    locale: "en",
    path: `/knowledge-base/${params.category}/${params.slug}/`,
    title: article.en.seoTitle,
    description: article.en.metaDescription
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ArticlePage locale="en" articleSlug={params.slug} />;
}
