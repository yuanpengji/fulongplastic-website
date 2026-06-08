import { AboutPage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "zh",
  path: "/about/",
  title: "关于富龙塑业 | 组织培养容器源头生产厂家",
  description: "富龙塑业拥有20余年制造经验，服务高校、科研院所、商业化繁育客户及国际客户，支持定制开发和长期稳定供货。"
});

export default function Page() {
  return <AboutPage locale="zh" />;
}
