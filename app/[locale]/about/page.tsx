import { AboutPage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/about/",
  title: "About Fulong Plastic | Original Tissue Culture Container Manufacturer",
  description: "Fulong Plastic is an original tissue culture container manufacturer serving research institutions, tissue culture laboratories, commercial propagation companies, and global customers."
});

export default function Page() {
  return <AboutPage locale="en" />;
}
