import { KnowledgeBasePage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/knowledge-base/",
  title: "Knowledge Base | Fulong Plastic",
  description: "Fulong Plastic Knowledge Base includes Product Encyclopedia, Tissue Culture Knowledge, FAQ, and Industry News & Insights."
});

export default function Page() {
  return <KnowledgeBasePage locale="en" />;
}
