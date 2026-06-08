# 富龙塑业官网 V1

这是一个基于 Next.js App Router 的双语 B2B 官网版本。

## 语言结构

- 中文默认：首页路径为 `/`
- 英文路径为 `/en/`
- 页面顶部右侧提供 `中文 / EN` 切换

## 已包含页面

- 首页
- 产品中心
- 产品分类页
- 产品详情页模板
- 应用领域
- 知识库结构
- 知识库文章页
- 关于我们
- 联系我们
- `sitemap.xml`
- `robots.txt`

## 产品页原则

产品页保持规格驱动，核心字段为：

- 容量 / Capacity
- 高度 / Height
- 底部直径 / Bottom Diameter
- 材质 / Material
- 适配盖 / Compatible Lid

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 上线前需确认

- 替换 `lib/content.ts` 中的正式 Email 和 WhatsApp
- 确认所有产品规格是否为最终业务口径
- 按实际域名更新 `siteUrl`
