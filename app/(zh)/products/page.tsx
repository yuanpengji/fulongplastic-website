import { ProductsPage } from "@/lib/page-components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "zh",
  path: "/products/",
  title: "产品中心 | 富龙塑业组织培养容器",
  description: "富龙塑业产品中心包含PC组培系列、PP组培系列、组培配套产品和特色产品，按规格卡片直接展示。"
});

export default function Page() {
  return <ProductsPage locale="zh" />;
}
