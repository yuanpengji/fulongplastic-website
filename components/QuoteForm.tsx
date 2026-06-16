"use client";

import { FormEvent, useState } from "react";

type QuoteFormProps = {
  locale: "zh" | "en";
  productName?: string;
  email: string;
  labels: {
    product: string;
    name: string;
    company: string;
    country: string;
    email: string;
    message: string;
    submit: string;
  };
};

export function QuoteForm({ locale, productName, email, labels }: QuoteFormProps) {
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = "Fulong Plastic Product Quote Request";
    const body = [
      `Name: ${formData.get("name") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Country: ${formData.get("country") || ""}`,
      `Company: ${formData.get("company") || ""}`,
      `Product: ${formData.get("product") || ""}`,
      "",
      "Product Requirements / Message:",
      `${formData.get("message") || ""}`
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFeedback(
      locale === "zh"
        ? `正在打开您的邮件客户端。如果没有自动打开，请发送邮件至 ${email}。`
        : `Your email client is opening. If it does not open, please email us at ${email}.`
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-line bg-panel p-5">
      {productName ? (
        <div>
          <label className="text-sm text-steel">{labels.product}</label>
          <input name="product" className="mt-1 w-full rounded border border-line bg-ink px-3 py-3" defaultValue={productName} readOnly />
        </div>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" className="rounded border border-line bg-ink px-3 py-3" placeholder={labels.name} />
        <input name="company" className="rounded border border-line bg-ink px-3 py-3" placeholder={labels.company} />
        <input name="country" className="rounded border border-line bg-ink px-3 py-3" placeholder={labels.country} />
        <input name="email" type="email" className="rounded border border-line bg-ink px-3 py-3" placeholder={labels.email} />
      </div>
      <textarea name="message" className="min-h-32 rounded border border-line bg-ink px-3 py-3" placeholder={labels.message} />
      <button type="submit" className="btn btn-primary w-full">
        {labels.submit}
      </button>
      {feedback ? <p className="text-sm leading-6 text-slate-300">{feedback}</p> : null}
    </form>
  );
}
