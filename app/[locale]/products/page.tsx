import { ProductsPage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/products/",
  title: "Products | Fulong Plastic Tissue Culture Containers",
  description: "Fulong Plastic product center includes PC Series, PP Series, Accessories, and Sugar-Free Ventilated Culture Box organized by capacity, dimensions, material, and compatible lid."
});

export default function Page() {
  return <ProductsPage locale="en" />;
}
