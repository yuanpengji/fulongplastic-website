import { AboutPage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "zh",
  path: "/about/",
  title: "关于富龙塑业 | 组织培养容器源头生产厂家",
  description: "富龙塑业是组织培养容器源头工厂，具备20+年制造经验，服务科研机构、组培实验室、商业化种苗繁育企业及全球客户。"
});

export default function Page() {
  return <AboutPage locale="zh" />;
}
