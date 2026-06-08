import { KnowledgeBasePage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "zh",
  path: "/knowledge-base/",
  title: "知识库 | 富龙塑业",
  description: "富龙塑业知识库包含Product Encyclopedia、Tissue Culture Knowledge、FAQ、Industry News & Insights。"
});

export default function Page() {
  return <KnowledgeBasePage locale="zh" />;
}
