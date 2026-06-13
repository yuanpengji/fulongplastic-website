import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fulongplastic.com"),
  title: "富龙塑业 | 组织培养容器源头生产厂家",
  description: "富龙塑业专注组织培养容器及相关配套产品，支持中文默认与英文内容。",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
