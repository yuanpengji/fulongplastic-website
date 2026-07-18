import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fulongplastic.com"),
  title: "Fulong Plastic | Tissue Culture Container Manufacturer",
  description: "Fulong Plastic manufactures tissue culture containers and related supplies.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png"
  }
};

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (params.locale !== "en") {
    notFound();
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
