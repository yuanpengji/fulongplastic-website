import { ContactPage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "zh",
  path: "/contact/",
  title: "联系我们 | 富龙塑业",
  description: "通过询价表、Email或WhatsApp联系富龙塑业，沟通组织培养容器、组培配件和定制开发需求。"
});

export default function Page() {
  return <ContactPage locale="zh" />;
}
