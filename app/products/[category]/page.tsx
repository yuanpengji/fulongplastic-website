import { CategoryPage } from "@/lib/page-components";
import { getCategory, productCategories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return productCategories.filter((category) => category.slug !== "featured").map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);
  if (!category) return {};
  return buildMetadata({
    locale: "zh",
    path: `/products/${params.category}/`,
    title: `${category.zh.title} | 富龙塑业产品中心`,
    description: category.zh.description,
    image: category.image
  });
}

export default function Page({ params }: { params: { category: string } }) {
  if (params.category === "featured") notFound();
  return <CategoryPage locale="zh" categorySlug={params.category} />;
}
