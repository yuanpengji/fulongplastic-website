import { ProductPage } from "@/lib/page-components";
import { getProduct, products } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.filter((product) => product.category !== "featured").map((product) => ({ category: product.category, product: product.slug }));
}

export function generateMetadata({ params }: { params: { category: string; product: string } }) {
  const product = getProduct(params.product);
  if (!product || product.category !== params.category) notFound();
  return buildMetadata({
    locale: "zh",
    path: `/products/${params.category}/${params.product}/`,
    title: product.zh.seoTitle,
    description: product.zh.metaDescription,
    image: product.image
  });
}

export default function Page({ params }: { params: { category: string; product: string } }) {
  const product = getProduct(params.product);
  if (!product || product.category !== params.category) notFound();
  return <ProductPage locale="zh" productSlug={params.product} />;
}
