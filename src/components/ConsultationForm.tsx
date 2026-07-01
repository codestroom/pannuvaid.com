"use client";

import { useState } from "react";
import { FiCheckCircle, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { treatments } from "@/lib/treatments";
import { site } from "@/lib/site";


import { sendEnquiry } from "@/app/actions";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: treatments[0].title,
    message: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await sendEnquiry(form);
      if (res.success) {
        setSubmitted(true);
      } else {
        setError(res.error || "Unable to submit request. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect. Please check your internet connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello Pannu Vaid,\nName: ${form.name}\nPhone: ${form.phone}\nConcern: ${form.treatment}\nMessage: ${form.message}`
  )}`;

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white shadow-soft border border-brand-100/50 dark:border-brand-900/40 dark:bg-white/[0.03] p-8 text-center">
        <FiCheckCircle className="mx-auto text-5xl text-brand-600 dark:text-brand-400" />
        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-brand-950 dark:text-brand-50">Thank you!</h3>
        <p className="mt-3 text-sm text-brand-800/75 dark:text-brand-200/65 leading-relaxed">
          Your appointment request has been received. To confirm instantly, send
          us the details on WhatsApp.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn mt-6 bg-[#25D366] text-white hover:bg-[#20ba59] shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 font-bold w-full flex items-center justify-center gap-2"
        >
          <FaWhatsapp className="text-xl" /> Confirm on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white shadow-2xl dark:bg-white/[0.03] border border-white/20 dark:border-white/5 overflow-hidden">
      <form onSubmit={handleSubmit} className="space-y-5 p-7 sm:p-8 rounded-3xl">
        <h3 className="font-display text-2xl font-bold tracking-tight text-brand-950 dark:text-brand-50">
          Request an Appointment
        </h3>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name">
            <input
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
              className="w-full rounded-2xl border border-brand-200/80 bg-white/60 px-4 py-3 text-sm outline-none transition-all duration-350 focus:border-brand-500 focus:bg-white dark:border-brand-800 dark:bg-white/5 dark:focus:bg-[#0c160c] dark:focus:border-brand-400 focus:ring-2 focus:ring-brand-500/10 text-brand-950 dark:text-brand-50"
            />
          </Field>
          <Field label="Phone Number">
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+91 ..."
              className="w-full rounded-2xl border border-brand-200/80 bg-white/60 px-4 py-3 text-sm outline-none transition-all duration-350 focus:border-brand-500 focus:bg-white dark:border-brand-800 dark:bg-white/5 dark:focus:bg-[#0c160c] dark:focus:border-brand-400 focus:ring-2 focus:ring-brand-500/10 text-brand-950 dark:text-brand-50"
            />
          </Field>
        </div>
        
        <div>
          <Field label="Concern / Treatment">
            <select
              value={form.treatment}
              onChange={(e) => update("treatment", e.target.value)}
              className="w-full rounded-2xl border border-brand-200/80 bg-white/60 px-4 py-3 text-sm outline-none transition-all duration-350 focus:border-brand-500 focus:bg-white dark:border-brand-800 dark:bg-white/5 dark:focus:bg-[#0c160c] dark:focus:border-brand-400 focus:ring-2 focus:ring-brand-500/10 text-brand-950 dark:text-brand-50 appearance-none cursor-pointer"
            >
              {treatments.map((t) => (
                <option key={t.slug} className="dark:bg-[#0b150a] dark:text-brand-50">{t.title}</option>
              ))}
              <option className="dark:bg-[#0b150a] dark:text-brand-50">General Enquiry</option>
            </select>
          </Field>
        </div>

        <div>
          <Field label="Message (optional)">
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={3}
              placeholder="Tell us briefly about your condition..."
              className="w-full rounded-2xl border border-brand-200/80 bg-white/60 px-4 py-3 text-sm outline-none transition-all duration-350 focus:border-brand-500 focus:bg-white dark:border-brand-800 dark:bg-white/5 dark:focus:bg-[#0c160c] dark:focus:border-brand-400 focus:ring-2 focus:ring-brand-500/10 text-brand-950 dark:text-brand-50 resize-none"
            />
          </Field>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full group py-4 flex items-center justify-center gap-2 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <span>Submitting Request...</span>
          ) : (
            <>
              <FiSend className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>Submit Request</span>
            </>
          )}
        </button>

        {error && (
          <p className="text-sm font-bold text-red-600 dark:text-red-400 text-center">
            {error}
          </p>
        )}
        
        <p className="text-center text-xs text-brand-850/60 dark:text-brand-200/40">
          We respect your privacy. Your details are never shared.
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs sm:text-sm font-bold text-brand-850 dark:text-brand-200">{label}</span>
      {children}
    </label>
  );
}
