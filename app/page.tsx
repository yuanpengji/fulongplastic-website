import { HomePage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "zh",
  path: "/",
  title: "富龙塑业 | 组织培养容器源头生产厂家",
  description: "富龙塑业拥有20余年制造经验，专注组织培养容器及相关配套产品，服务高校、科研院所、商业化繁育客户及国际客户。"
});

export default function Page() {
  return <HomePage locale="zh" />;
}
