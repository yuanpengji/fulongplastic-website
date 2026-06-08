import { HomePage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/",
  title: "Fulong Plastic | Tissue Culture Container Manufacturer & Supplier",
  description: "Fulong Plastic has over 20 years of manufacturing experience, specializing in tissue culture containers and related accessories for B2B customers."
});

export default function Page() {
  return <HomePage locale="en" />;
}
