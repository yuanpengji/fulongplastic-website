import { ContactPage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/contact/",
  title: "Contact Fulong Plastic",
  description: "Contact Fulong Plastic by inquiry form, email, or WhatsApp for tissue culture containers, accessories, and custom development."
});

export default function Page() {
  return <ContactPage locale="en" />;
}
