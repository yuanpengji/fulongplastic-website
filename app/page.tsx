import { HomePage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "zh",
  path: "/",
  title: "富龙塑业 | 组织培养容器源头生产厂家",
  description: "富龙塑业深耕组织培养容器制造20余年，长期服务高校、科研机构、组培实验室、商业化种苗繁育企业及全球客户。"
});

export default function Page() {
  return <HomePage locale="zh" />;
}
