import { ProductsPage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "zh",
  path: "/products/",
  title: "产品中心 | 富龙塑业组织培养容器",
  description: "富龙塑业产品中心包含PC系列、PP系列、配套产品和无糖透气培养盒，按容量、尺寸、材质和适配盖展示。"
});

export default function Page() {
  return <ProductsPage locale="zh" />;
}
