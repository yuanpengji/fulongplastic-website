import { ApplicationsPage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/applications/",
  title: "Applications | Fulong Plastic",
  description: "Fulong Plastic tissue culture containers support broad application areas including plant tissue culture, micropropagation, seedling propagation, agricultural research, and laboratory research."
});

export default function Page() {
  return <ApplicationsPage locale="en" />;
}
