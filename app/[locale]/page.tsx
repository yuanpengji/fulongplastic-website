import { HomePage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/",
  title: "Fulong Plastic | Tissue Culture Container Manufacturer & Supplier",
  description: "Fulong Plastic supplies specification-stable tissue culture containers and accessories for research institutions, laboratories, commercial propagation companies, and global B2B buyers."
});

export default function Page() {
  return <HomePage locale="en" />;
}
