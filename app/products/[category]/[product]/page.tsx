import { ProductPage } from "@/lib/page-components";
import { getProduct, products } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.filter((product) => product.category !== "featured").map((product) => ({ category: product.category, product: product.slug }));
}

export function generateMetadata({ params }: { params: { category: string; product: string } }) {
  const product = getProduct(params.product);
  if (!product) return {};
  return buildMetadata({
    locale: "zh",
    path: `/products/${params.category}/${params.product}/`,
    title: product.zh.seoTitle,
    description: product.zh.metaDescription,
    image: product.image
  });
}

export default function Page({ params }: { params: { category: string; product: string } }) {
  return <ProductPage locale="zh" productSlug={params.product} />;
}
