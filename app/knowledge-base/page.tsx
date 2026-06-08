import { KnowledgeBasePage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "zh",
  path: "/knowledge-base/",
  title: "知识库 | 富龙塑业",
  description: "富龙塑业知识库包含产品资料库、组织培养知识库、常见问题和行业资讯。"
});

export default function Page() {
  return <KnowledgeBasePage locale="zh" />;
}
