"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { homeContent } from "@/data/home";
import { siteConfig } from "@/data/site";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = [...formData.entries()].map(([key, value]) => `${key}: ${value}`).join("\n");
    const subject = encodeURIComponent(`Travel enquiry from ${formData.get("name")}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${encodeURIComponent(details)}`;
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-5 shadow-[0_18px_70px_rgba(19,58,55,0.10)] sm:p-8">
      <h3 className="font-display text-xl font-bold text-foreground">{homeContent.contact.formTitle}</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-semibold text-foreground">{homeContent.contact.fields.name}<input required name="name" autoComplete="name" placeholder={homeContent.contact.placeholders.name} className="min-h-12 rounded-sm border border-line bg-background px-3 text-sm font-normal outline-none focus:border-brand" /></label>
        <label className="grid gap-1.5 text-xs font-semibold text-foreground">{homeContent.contact.fields.email}<input required type="email" name="email" autoComplete="email" placeholder={homeContent.contact.placeholders.email} className="min-h-12 rounded-sm border border-line bg-background px-3 text-sm font-normal outline-none focus:border-brand" /></label>
        <label className="grid gap-1.5 text-xs font-semibold text-foreground">{homeContent.contact.fields.destination}<input name="destination" placeholder={homeContent.contact.placeholders.destination} className="min-h-12 rounded-sm border border-line bg-background px-3 text-sm font-normal outline-none focus:border-brand" /></label>
        <label className="grid gap-1.5 text-xs font-semibold text-foreground">{homeContent.contact.fields.date}<input name="date" placeholder={homeContent.contact.placeholders.date} className="min-h-12 rounded-sm border border-line bg-background px-3 text-sm font-normal outline-none focus:border-brand" /></label>
        <label className="grid gap-1.5 text-xs font-semibold text-foreground sm:col-span-2">{homeContent.contact.fields.guests}<input name="travellers" placeholder={homeContent.contact.placeholders.guests} className="min-h-12 rounded-sm border border-line bg-background px-3 text-sm font-normal outline-none focus:border-brand" /></label>
        <label className="grid gap-1.5 text-xs font-semibold text-foreground sm:col-span-2">{homeContent.contact.fields.message}<textarea name="message" rows={3} placeholder={homeContent.contact.placeholders.message} className="resize-y rounded-sm border border-line bg-background px-3 py-3 text-sm font-normal outline-none focus:border-brand" /></label>
      </div>
      <button type="submit" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:w-auto">{homeContent.contact.submit}<ArrowRight size={16} /></button>
      {sent && <p role="status" className="mt-4 flex items-start gap-2 text-sm leading-6 text-brand"><Check size={17} className="mt-1 shrink-0" />{homeContent.contact.success}</p>}
    </form>
  );
}