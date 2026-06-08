import { ProductsPage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/products/",
  title: "Products | Fulong Plastic Tissue Culture Containers",
  description: "Fulong Plastic product center is organized for specification-based sourcing across PC tissue culture products, PP culture containers, accessories, and featured products."
});

export default function Page() {
  return <ProductsPage locale="en" />;
}
