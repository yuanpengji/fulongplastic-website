import { CategoryPage } from "@/lib/page-components";
import { getCategory, productCategories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return productCategories.map((category) => ({ locale: "en", category: category.slug }));
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
  return <CategoryPage locale="en" categorySlug={params.category} />;
}
