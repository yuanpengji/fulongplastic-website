import { notFound } from "next/navigation";

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

  return children;
}
