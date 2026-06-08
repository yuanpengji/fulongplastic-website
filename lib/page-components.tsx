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
  applications,
  articles,
  company,
  getArticle,
  getArticlesByCategory,
  getCategory,
  getKnowledgeCategory,
  getProduct,
  getProductsByCategory,
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

export function HomePage({ locale }: { locale: Locale }) {
  const t = text[locale];
  const hero =
    locale === "zh"
      ? {
          title: "组织培养容器源头生产厂家",
          subtitle: "富龙塑业拥有20余年制造经验，专注于组织培养容器及相关配套产品，服务高校、科研院所、商业化繁育客户及国际客户。"
        }
      : {
          title: "Tissue Culture Container Manufacturer & Supplier",
          subtitle: "Fulong Plastic has over 20 years of manufacturing experience, specializing in tissue culture containers and related accessories for universities, research institutes, commercial propagation customers, and international customers."
        };

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
        <Image src="/products/pc-tissue-culture-bottles.jpg" alt={hero.title} fill priority className="object-contain object-right-bottom opacity-65" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#08090b_0%,rgba(8,9,11,.92)_34%,rgba(8,9,11,.35)_100%)]" />
        <div className="container relative flex min-h-[680px] items-center">
          <div className="max-w-2xl py-20">
            <span className="eyebrow">{company[locale].positioning}</span>
            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">{hero.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{hero.subtitle}</p>
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
              <Link key={category.slug} href={localizePath(category.slug === "featured" ? "/products/featured/sugar-free-ventilated-culture-box/" : `/products/${category.slug}/`, locale)} className="panel overflow-hidden">
                <div className="aspect-[4/3] bg-black">
                  <Image src={category.image} alt={category[locale].title} width={520} height={390} className="h-full w-full object-contain p-5" />
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

      <section className="section border-y border-line bg-[#0b0d10]">
        <div className="container">
          <span className="eyebrow">{locale === "zh" ? "规格驱动" : "Specification Driven"}</span>
          <h2 className="mt-3 text-4xl font-bold">{locale === "zh" ? "核心规格字段" : "Core Specification Fields"}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {Object.values(t.fields)
              .slice(0, 5)
              .map((field) => (
                <div key={field} className="panel p-5 text-center font-bold">
                  {field}
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow">{t.nav.applications}</span>
            <h2 className="mt-3 text-4xl font-bold">{locale === "zh" ? "宽泛应用场景" : "Broad Application Areas"}</h2>
            <p className="mt-4 text-steel">
              {locale === "zh" ? "应用说明保持中性，不对具体行业效果作强声明。" : "Application language stays broad and neutral without strong claims about exact industries."}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {applications.map((application) => (
              <div key={application.slug} className="panel p-5 font-semibold">
                {application[locale]}
              </div>
            ))}
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
                <h3 className="font-bold">{category[locale]}</h3>
                <p className="mt-3 text-sm text-steel">
                  {getArticlesByCategory(category.slug)[0]?.[locale].summary}
                </p>
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
        description={locale === "zh" ? "按PC系列、PP系列、配套产品和重点产品组织，便于按规格查找和询价。" : "Organized by PC Series, PP Series, Accessories, and Featured Product for specification lookup and inquiries."}
      />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <Link key={category.slug} href={localizePath(category.slug === "featured" ? "/products/featured/sugar-free-ventilated-culture-box/" : `/products/${category.slug}/`, locale)} className="panel overflow-hidden">
              <Image src={category.image} alt={category[locale].title} width={600} height={450} className="aspect-[4/3] bg-black object-contain p-5" />
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
  if (!category || category.slug === "featured") notFound();
  const categoryProducts = getProductsByCategory(categorySlug);

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
    </Shell>
  );
}

export function ProductPage({ locale, productSlug }: { locale: Locale; productSlug: string }) {
  const product = getProduct(productSlug);
  if (!product) notFound();
  const content = product[locale];
  const t = text[locale];
  const related = product.related.map(getProduct).filter(Boolean) as typeof products;

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
          <div className="rounded-lg border border-line bg-black">
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
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <div key={application.slug} className="panel p-6">
              <h2 className="text-xl font-bold">{application[locale]}</h2>
              <p className="mt-3 text-sm leading-6 text-steel">
                {locale === "zh" ? "可根据容器容量、尺寸、材质和适配盖进行进一步选型。" : "Further selection can be based on container capacity, dimensions, material, and compatible lids."}
              </p>
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
        description={locale === "zh" ? "围绕产品百科、组培知识、FAQ和行业资讯建立可持续扩展的内容结构。" : "A scalable content structure for Product Encyclopedia, Tissue Culture Knowledge, FAQ, and Industry News & Insights."}
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
          <p className="mt-8 text-lg leading-9 text-slate-200">{article[locale].body}</p>
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
