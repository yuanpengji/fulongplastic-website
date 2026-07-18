import { ApplicationsPage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "zh",
  path: "/applications/",
  title: "应用领域 | 富龙塑业",
  description: "富龙塑业组织培养容器适用于植物组织培养、微繁殖、种苗繁育、农业科研、高校及实验室研究等宽泛应用场景。"
});

export default function Page() {
  return <ApplicationsPage locale="zh" />;
}
