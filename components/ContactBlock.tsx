import { company, Locale, text } from "@/lib/content";

export function ContactBlock({ locale, productName }: { locale: Locale; productName?: string }) {
  const t = text[locale];

  return (
    <section className="section-tight border-y border-line bg-[#0b0d10]">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">{locale === "zh" ? "询价" : "Inquiry"}</span>
          <h2 className="mt-3 text-3xl font-bold">
            {locale === "zh" ? "获取产品报价" : "Request a Product Quote"}
          </h2>
          <p className="mt-4 text-steel">
            {locale === "zh"
              ? "请留下产品规格、数量和目的国家，我们会根据具体需求沟通报价。"
              : "Share the required specifications, quantity, and destination country for quotation discussion."}
          </p>
          <div className="mt-6 grid gap-2 text-sm text-slate-300">
            <p>{locale === "zh" ? "电话" : "Phone"}: {company.phone}</p>
            <p>Email: <a href={`mailto:${company.email}`}>{company.email}</a></p>
            <p>WhatsApp: <a href="https://wa.me/8618358715006">{company.whatsapp}</a></p>
          </div>
        </div>
        <form className="grid gap-4 rounded-lg border border-line bg-panel p-5">
          {productName ? (
            <div>
              <label className="text-sm text-steel">{locale === "zh" ? "询价产品" : "Inquiry Product"}</label>
              <input className="mt-1 w-full rounded border border-line bg-ink px-3 py-3" defaultValue={productName} readOnly />
            </div>
          ) : null}
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded border border-line bg-ink px-3 py-3" placeholder={t.fields.name} />
            <input className="rounded border border-line bg-ink px-3 py-3" placeholder={t.fields.company} />
            <input className="rounded border border-line bg-ink px-3 py-3" placeholder={t.fields.country} />
            <input className="rounded border border-line bg-ink px-3 py-3" placeholder={t.fields.email} />
          </div>
          <textarea className="min-h-32 rounded border border-line bg-ink px-3 py-3" placeholder={t.fields.message} />
          <button type="button" className="btn btn-primary w-full">
            {t.actions.requestQuote}
          </button>
        </form>
      </div>
    </section>
  );
}
