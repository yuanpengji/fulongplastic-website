import { AboutPage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/about/",
  title: "About Fulong Plastic | Tissue Culture Container Source Manufacturer",
  description: "Fulong Plastic has over 20 years of manufacturing experience, serving universities, research institutes, commercial propagation customers, and international customers."
});

export default function Page() {
  return <AboutPage locale="en" />;
}
