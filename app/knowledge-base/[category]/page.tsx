import { KnowledgeCategoryPage } from "@/lib/page-components";
import { getKnowledgeCategory, knowledgeCategories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return knowledgeCategories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const category = getKnowledgeCategory(params.category);
  if (!category) return {};
  return buildMetadata({
    locale: "zh",
    path: `/knowledge-base/${params.category}/`,
    title: `${category.zh} | 富龙塑业知识库`,
    description: `富龙塑业知识库栏目：${category.zh}。`
  });
}

export default function Page({ params }: { params: { category: string } }) {
  return <KnowledgeCategoryPage locale="zh" categorySlug={params.category} />;
}
