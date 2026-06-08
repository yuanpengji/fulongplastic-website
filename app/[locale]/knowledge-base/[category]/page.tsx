import { KnowledgeCategoryPage } from "@/lib/page-components";
import { getKnowledgeCategory, knowledgeCategories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return knowledgeCategories.map((category) => ({ locale: "en", category: category.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const category = getKnowledgeCategory(params.category);
  if (!category) return {};
  return buildMetadata({
    locale: "en",
    path: `/knowledge-base/${params.category}/`,
    title: `${category.en} | Fulong Plastic Knowledge Base`,
    description: `Fulong Plastic Knowledge Base category: ${category.en}.`
  });
}

export default function Page({ params }: { params: { category: string } }) {
  return <KnowledgeCategoryPage locale="en" categorySlug={params.category} />;
}
