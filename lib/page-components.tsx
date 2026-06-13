import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBlock } from "@/components/ContactBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { SpecTable } from "@/components/SpecTable";
import { StructuredData } from "@/components/StructuredData";
import {
  applicationGallery,
  articles,
  company,
  getArticle,
  getArticlesByCategory,
  getCategory,
  getKnowledgeCategory,
  getProduct,
  getSpecGroupsByCategory,
  homepage,
  knowledgeCategories,
  Locale,
  localizePath,
  productCategories,
  productPath,
  products,
  siteUrl,
  text
} from "@/lib/content";

function Shell({ locale, path, children }: { locale: Locale; path: string; children: React.ReactNode }) {
  return (
    <>
      <Header locale={locale} path={path} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}

function PageHero({ eyebrow, title, description }: { eyebrow?: string; title: string; description: string }) {
  return (
    <section className="section-tight border-b border-line bg-[#0b0d10]">
      <div className="container max-w-4xl">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-steel">{description}</p>
      </div>
    </section>
  );
}

function formatSpecValue(value: string, locale: Locale) {
  if (locale === "zh") {
    return value;
  }

  const replacements: Record<string, string> = {
    按规格匹配: "By size",
    按袋型: "By bag style",
    按型号匹配: "By model",
    按型号: "By model",
    PP膜: "PP film",
    透明塑料: "Transparent plastic",
    支持透气膜配置: "Filter patch option available",
    密封盖: "Sealed lid",
    透气盖: "Vented lid",
    透气款: "Vented Lid",
    密封款: "Solid Lid",
    可配透气膜盖: "Compatible with vented membrane lid",
    透气盒盖: "Ventilated box lid"
  };

  if (replacements[value]) {
    return replacements[value];
  }

  return value
    .replace(/密封/g, "Sealed")
    .replace(/单孔/g, "Single Vent Hole")
    .replace(/双孔/g, "Double Vent Hole")
    .replace(/可选/g, "Optional")
    .replace(/(\d+mm)配套盖/g, "$1 matched lid");
}

function getSpecFieldOrder(fields: ReturnType<typeof getSpecGroupsByCategory>[number]["cards"][number]["fields"]) {
  if (fields.modelNumber) {
    return ["modelNumber"];
  }

  if (fields.filmSize) {
    return ["filmSize", "ventHoleDiameter"];
  }

  if (fields.weight) {
    return ["length", "width", "height", "weight"];
  }

  if (fields.filterPatchInfo) {
    return ["length", "width", "height", "material", "filterPatchInfo"];
  }

  if (fields.length && fields.width) {
    return ["capacity", "length", "width", "height", "material"];
  }

  return ["capacity", "openingDiameter", "bottomDiameter", "height", "material", "compatibleLid"];
}

function parseMarkdownTableRow(line: string) {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isMarkdownTableDivider(line: string) {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line);
}

function renderArticleBody(body: string) {
  const blocks = body.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);

  return (
    <div className="mt-8 space-y-6 text-lg leading-9 text-slate-200">
      {blocks.map((block, index) => {
        if (block.startsWith("### ")) {
          return <h3 key={index} className="pt-4 text-2xl font-bold leading-8 text-white">{block.replace(/^###\s+/, "")}</h3>;
        }

        if (block.startsWith("## ")) {
          return <h2 key={index} className="pt-8 text-3xl font-bold leading-9 text-white">{block.replace(/^##\s+/, "")}</h2>;
        }

        if (block.split("\n").every((line) => line.trim().startsWith("- "))) {
          return (
            <ul key={index} className="list-disc space-y-2 pl-6">
              {block.split("\n").map((line) => (
                <li key={line}>{line.trim().replace(/^-\s+/, "")}</li>
              ))}
            </ul>
          );
        }

        if (block.includes("\n") && block.split("\n").some((line) => line.trim().startsWith("|"))) {
          const rows = block
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.startsWith("|") && !isMarkdownTableDivider(line))
            .map(parseMarkdownTableRow);
          const [header, ...bodyRows] = rows;

          return (
            <div key={index} className="overflow-x-auto rounded-lg border border-line">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead className="bg-white/5 text-slate-100">
                  <tr>
                    {header.map((cell) => (
                      <th key={cell} className="border-b border-line px-4 py-3 font-semibold">{cell}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyRows.map((row, rowIndex) => (
                    <tr key={`${row.join("-")}-${rowIndex}`} className="border-t border-line">
                      {row.map((cell, cellIndex) => (
                        <td key={`${cell}-${cellIndex}`} className="px-4 py-3">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        return <p key={index}>{block}</p>;
      })}
    </div>
  );
}

function SpecCardGrid({ group, locale }: { group: ReturnType<typeof getSpecGroupsByCategory>[number]; locale: Locale }) {
  const t = text[locale];

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">{group[locale].name}</h2>
        {group[locale].description ? <p className="max-w-3xl text-sm leading-6 text-steel">{group[locale].description}</p> : null}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {group.cards.map((card) => (
          <article key={card.id} className="overflow-hidden rounded-lg border border-line bg-panel">
            <div className="aspect-square overflow-hidden">
              <Image src={card.image} alt={group[locale].name} width={600} height={600} className="h-full w-full object-cover" />
            </div>
            <dl className="grid gap-2 p-4 text-sm">
              {getSpecFieldOrder(card.fields)
                .filter((field) => card.fields[field as keyof typeof card.fields])
                .filter((field) => !card.hiddenFields?.includes(field as keyof typeof text.zh.fields))
                .map((field) => {
                  const value = card.fields[field as keyof typeof card.fields];

                  return (
                    <div key={field} className="flex justify-between gap-3 border-b border-line/70 pb-2 last:border-0 last:pb-0">
                      <dt className="text-steel">{t.fields[field as keyof typeof t.fields]}</dt>
                      <dd className="text-right font-semibold text-slate-100">{formatSpecValue(String(value), locale)}</dd>
                    </div>
                  );
                })}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = text[locale];
  const hero = homepage[locale];

  return (
    <Shell locale={locale} path="/">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: locale === "zh" ? "富龙塑业" : "Fulong Plastic",
          url: `${siteUrl}${localizePath("/", locale)}`,
          email: company.email,
          description: company[locale].positioning
        }}
      />
      <section className="relative min-h-[680px] overflow-hidden border-b border-line bg-black">
        <Image src="/products/pc-tissue-culture-bottles.jpg" alt={hero.heroTitle} fill priority className="object-contain object-right-bottom" />
        <div className="container relative flex min-h-[680px] items-center">
          <div className="max-w-xl py-20 pr-8 lg:pr-16">
            <span className="eyebrow">{company[locale].positioning}</span>
            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">{hero.heroTitle}</h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">{hero.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={localizePath("/products/", locale)} className="btn btn-primary">
                {t.actions.viewProducts}
              </Link>
              <Link href={localizePath("/contact/", locale)} className="btn">
                {t.actions.requestQuote}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight border-b border-line">
        <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {company[locale].proofPoints.map((item) => (
            <div key={item} className="panel p-4 text-sm font-semibold text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{t.nav.products}</span>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-bold">
              {locale === "zh" ? "按产品系列浏览规格" : "Browse Specifications by Product Series"}
            </h2>
            <Link href={localizePath("/products/", locale)} className="btn">
              {t.actions.viewProducts}
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => (
              <Link key={category.slug} href={localizePath(`/products/${category.slug}/`, locale)} className="panel overflow-hidden">
                <div className="aspect-square overflow-hidden bg-black">
                  <Image src={category.image} alt={category[locale].title} width={600} height={600} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">{category[locale].name}</h3>
                  <p className="mt-3 text-sm leading-6 text-steel">{category[locale].description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{locale === "zh" ? "应用" : "Applications"}</span>
          <h2 className="mt-3 text-4xl font-bold">{locale === "zh" ? "应用场景展示" : "Application Scenarios"}</h2>
          <div data-applications-carousel className="group relative mt-8 overflow-hidden rounded-lg border border-line bg-black">
            <div data-applications-track className="flex transition-transform duration-500 ease-out">
              {applicationGallery.map((item) => (
                <div key={item.image} className="relative h-[300px] w-full shrink-0 md:h-[380px] lg:h-[460px]">
                  <Image src={item.image} alt={item[locale]} fill className="object-contain" sizes="100vw" />
                </div>
              ))}
            </div>
            <button type="button" data-applications-prev aria-label={locale === "zh" ? "上一张" : "Previous"} className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-black/70 text-2xl text-slate-100">
              ‹
            </button>
            <button type="button" data-applications-next aria-label={locale === "zh" ? "下一张" : "Next"} className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-black/70 text-2xl text-slate-100">
              ›
            </button>
            <script
              dangerouslySetInnerHTML={{
                __html: `
(() => {
  const carousel = document.currentScript?.closest("[data-applications-carousel]");
  if (!carousel || carousel.dataset.ready === "true") return;
  carousel.dataset.ready = "true";
  const track = carousel.querySelector("[data-applications-track]");
  const slides = track ? Array.from(track.children) : [];
  if (!track || slides.length < 2) return;
  let index = 0;
  const show = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    track.style.transform = "translateX(" + (-index * 100) + "%)";
  };
  const next = () => show(index + 1);
  const previous = () => show(index - 1);
  carousel.querySelector("[data-applications-next]")?.addEventListener("click", next);
  carousel.querySelector("[data-applications-prev]")?.addEventListener("click", previous);
  window.setInterval(next, 8000);
})();
                `
              }}
            />
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-[#0b0d10]">
        <div className="container">
          <span className="eyebrow">{t.nav.knowledge}</span>
          <h2 className="mt-3 text-4xl font-bold">{locale === "zh" ? "知识库" : "Knowledge Base"}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {knowledgeCategories.map((category) => (
              <Link key={category.slug} href={localizePath(`/knowledge-base/${category.slug}/`, locale)} className="panel p-5">
                <h3 className="font-bold">{hero.knowledgePreviewTitles[category.slug]}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactBlock locale={locale} />
    </Shell>
  );
}

export function ProductsPage({ locale }: { locale: Locale }) {
  const t = text[locale];
  return (
    <Shell locale={locale} path="/products/">
      <PageHero
        eyebrow={t.nav.products}
        title={locale === "zh" ? "产品中心" : "Products"}
        description={
          locale === "zh"
            ? "产品涵盖PC组培系列、PP组培系列、组培配套产品及特色培养设备，为植物组织培养、种苗繁育和科研实验提供完整解决方案。"
            : "Our product portfolio includes PC tissue culture products, PP tissue culture products, accessories, and specialty cultivation equipment, providing complete solutions for plant tissue culture, propagation, and laboratory applications."
        }
      />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <Link key={category.slug} href={localizePath(`/products/${category.slug}/`, locale)} className="panel overflow-hidden">
              <div className="aspect-square overflow-hidden bg-black">
                <Image src={category.image} alt={category[locale].title} width={600} height={600} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold">{category[locale].name}</h2>
                <p className="mt-3 text-sm leading-6 text-steel">{category[locale].description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Shell>
  );
}

export function CategoryPage({ locale, categorySlug }: { locale: Locale; categorySlug: string }) {
  const category = getCategory(categorySlug);
  if (!category) notFound();
  const categoryProducts = products.filter((product) => product.category === categorySlug);

  return (
    <Shell locale={locale} path={`/products/${categorySlug}/`}>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: category[locale].title,
          description: category[locale].description,
          url: `${siteUrl}${localizePath(`/products/${categorySlug}/`, locale)}`
        }}
      />
      <PageHero eyebrow={category[locale].name} title={category[locale].title} description={category[locale].description} />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((product) => (
            <ProductCard key={product.slug} product={product} locale={locale} />
          ))}
        </div>
      </section>
      <ContactBlock locale={locale} productName={category[locale].title} />
    </Shell>
  );
}

export function ProductPage({ locale, productSlug }: { locale: Locale; productSlug: string }) {
  const product = getProduct(productSlug);
  if (!product) notFound();
  const content = product[locale];
  const t = text[locale];
  const related = product.related.map(getProduct).filter(Boolean) as typeof products;
  const specGroups = getSpecGroupsByCategory(product.category).filter((group) => group.slug === product.slug);

  return (
    <Shell locale={locale} path={product.category === "featured" ? `/products/featured/${product.slug}/` : `/products/${product.category}/${product.slug}/`}>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: content.name,
          description: content.metaDescription,
          image: `${siteUrl}${product.image}`,
          brand: { "@type": "Brand", name: locale === "zh" ? "富龙塑业" : "Fulong Plastic" },
          additionalProperty: Object.entries(product.specs).map(([name, value]) => ({
            "@type": "PropertyValue",
            name,
            value
          }))
        }}
      />
      <section className="section-tight">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg bg-black">
            <Image src={product.image} alt={content.name} width={900} height={720} priority className="aspect-[4/3] h-full w-full object-contain p-6" />
          </div>
          <div>
            <p className="text-sm text-steel">
              <Link href={localizePath("/products/", locale)}>{t.nav.products}</Link> / {content.name}
            </p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">{content.name}</h1>
            <p className="mt-5 text-lg leading-8 text-steel">{content.description}</p>
            <div className="mt-8">
              <Link href={localizePath("/contact/", locale)} className="btn btn-primary">
                {t.actions.requestQuote}
              </Link>
            </div>
          </div>
        </div>
      </section>
      {specGroups.length ? (
        <section className="section-tight border-y border-line bg-[#0b0d10]">
          <div className="container space-y-12">
            {specGroups.map((group) => (
              <SpecCardGrid key={group.slug} group={group} locale={locale} />
            ))}
          </div>
        </section>
      ) : null}
      <section className="section-tight border-y border-line bg-[#0b0d10]">
        <div className="container">
          <h2 className="text-3xl font-bold">{locale === "zh" ? "规格表" : "Specification Table"}</h2>
          <div className="mt-6">
            <SpecTable product={product} locale={locale} />
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <h2 className="text-3xl font-bold">{locale === "zh" ? "产品特点" : "Product Features"}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {content.features.slice(0, 4).map((feature) => (
              <div key={feature} className="panel p-5 text-sm font-semibold text-slate-200">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
      {related.length ? (
        <section className="section-tight border-y border-line bg-[#0b0d10]">
          <div className="container">
            <h2 className="text-3xl font-bold">{t.actions.relatedProducts}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {related.slice(0, 3).map((item) => (
                <ProductCard key={item.slug} product={item} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <ContactBlock locale={locale} productName={content.name} />
    </Shell>
  );
}

export function ApplicationsPage({ locale }: { locale: Locale }) {
  const t = text[locale];
  return (
    <Shell locale={locale} path="/applications/">
      <PageHero
        eyebrow={t.nav.applications}
        title={locale === "zh" ? "应用领域" : "Applications"}
        description={locale === "zh" ? "应用页面保持宽泛、中性，用于帮助客户按使用场景进入产品选型。" : "This page keeps application language broad and neutral, helping customers start product selection by usage context."}
      />
      <section className="section">
        <div className="container grid gap-5 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
          {applicationGallery.map((item) => (
            <div key={item.image} className="panel overflow-hidden">
              <div className="relative aspect-square">
                <Image src={item.image} alt={item[locale]} fill className="object-cover" sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw" />
              </div>
              <h2 className="p-6 text-center text-xl font-bold">{item[locale]}</h2>
            </div>
          ))}
        </div>
      </section>
      <ContactBlock locale={locale} />
    </Shell>
  );
}

export function KnowledgeBasePage({ locale }: { locale: Locale }) {
  const t = text[locale];
  return (
    <Shell locale={locale} path="/knowledge-base/">
      <PageHero
        eyebrow={t.nav.knowledge}
        title={locale === "zh" ? "知识库" : "Knowledge Base"}
        description={locale === "zh" ? "围绕产品资料库、组织培养知识库、常见问题和行业资讯建立可持续扩展的内容结构。" : "A scalable content structure for Product Library, Tissue Culture Knowledge Base, FAQ, and Industry Insights."}
      />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {knowledgeCategories.map((category) => (
            <Link key={category.slug} href={localizePath(`/knowledge-base/${category.slug}/`, locale)} className="panel p-5">
              <h2 className="text-xl font-bold">{category[locale]}</h2>
              <p className="mt-3 text-sm text-steel">{getArticlesByCategory(category.slug).length} articles</p>
            </Link>
          ))}
        </div>
      </section>
    </Shell>
  );
}

export function KnowledgeCategoryPage({ locale, categorySlug }: { locale: Locale; categorySlug: string }) {
  const category = getKnowledgeCategory(categorySlug);
  if (!category) notFound();
  const categoryArticles = getArticlesByCategory(categorySlug);
  return (
    <Shell locale={locale} path={`/knowledge-base/${categorySlug}/`}>
      <PageHero eyebrow={text[locale].nav.knowledge} title={category[locale]} description={locale === "zh" ? "文章支持发布日期、更新日期、相关文章和相关产品。" : "Articles support publish date, updated date, related articles, and related products."} />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2">
          {categoryArticles.map((article) => (
            <Link key={article.slug} href={localizePath(`/knowledge-base/${categorySlug}/${article.slug}/`, locale)} className="panel p-6">
              <h2 className="text-xl font-bold">{article[locale].title}</h2>
              <p className="mt-3 text-sm leading-6 text-steel">{article[locale].summary}</p>
              <p className="mt-5 text-xs text-slate-400">
                {locale === "zh" ? "发布" : "Published"}: {article.publishDate} · {locale === "zh" ? "更新" : "Updated"}: {article.updatedDate}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </Shell>
  );
}

export function ArticlePage({ locale, articleSlug }: { locale: Locale; articleSlug: string }) {
  const article = getArticle(articleSlug);
  if (!article) notFound();
  const relatedProducts = article.relatedProducts.map(getProduct).filter(Boolean) as typeof products;
  const relatedArticles = article.relatedArticles.map(getArticle).filter(Boolean) as typeof articles;
  return (
    <Shell locale={locale} path={`/knowledge-base/${article.category}/${article.slug}/`}>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article[locale].title,
          description: article[locale].metaDescription,
          datePublished: article.publishDate,
          dateModified: article.updatedDate,
          author: { "@type": "Organization", name: locale === "zh" ? "富龙塑业" : "Fulong Plastic" }
        }}
      />
      <article className="section-tight">
        <div className="container max-w-3xl">
          <span className="eyebrow">{getKnowledgeCategory(article.category)?.[locale]}</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">{article[locale].title}</h1>
          <p className="mt-4 text-sm text-slate-400">
            {locale === "zh" ? "发布日期" : "Publish Date"}: {article.publishDate} · {locale === "zh" ? "更新日期" : "Updated Date"}: {article.updatedDate}
          </p>
          {renderArticleBody(article[locale].body)}
        </div>
      </article>
      <section className="section-tight border-y border-line bg-[#0b0d10]">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">{text[locale].actions.relatedArticles}</h2>
            <div className="mt-4 grid gap-3">
              {relatedArticles.map((item) => (
                <Link key={item.slug} href={localizePath(`/knowledge-base/${item.category}/${item.slug}/`, locale)} className="panel p-4">
                  {item[locale].title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{text[locale].actions.relatedProducts}</h2>
            <div className="mt-4 grid gap-3">
              {relatedProducts.map((item) => (
                <Link key={item.slug} href={productPath(item, locale)} className="panel p-4">
                  {item[locale].name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  return (
    <Shell locale={locale} path="/about/">
      <PageHero eyebrow={text[locale].nav.about} title={locale === "zh" ? "关于富龙塑业" : "About Fulong Plastic"} description={company[locale].positioning} />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-6 text-lg leading-9 text-slate-200">
            <p>{company[locale].about}</p>
            <p>{company[locale].aboutMore}</p>
          </div>
          <div className="grid gap-3">
            {company[locale].proofPoints.map((point) => (
              <div key={point} className="panel p-4 font-semibold">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactBlock locale={locale} />
    </Shell>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <Shell locale={locale} path="/contact/">
      <PageHero eyebrow={text[locale].nav.contact} title={locale === "zh" ? "联系我们" : "Contact Us"} description={locale === "zh" ? "通过询价表、Email或WhatsApp联系富龙塑业。" : "Contact Fulong Plastic by inquiry form, email, or WhatsApp."} />
      <ContactBlock locale={locale} />
    </Shell>
  );
}
