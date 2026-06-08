import { CategoryPage } from "@/lib/page-components";
import { getCategory, productCategories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return productCategories.filter((category) => category.slug !== "featured").map((category) => ({ locale: "en", category: category.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);
  if (!category) return {};
  return buildMetadata({
    locale: "en",
    path: `/products/${params.category}/`,
    title: `${category.en.title} | Fulong Plastic Products`,
    description: category.en.description,
    image: category.image
  });
}

export default function Page({ params }: { params: { category: string } }) {
  if (params.category === "featured") notFound();
  return <CategoryPage locale="en" categorySlug={params.category} />;
}
