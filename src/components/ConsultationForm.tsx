"use client";

import { useState } from "react";
import { FiCheckCircle, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { treatments } from "@/lib/treatments";
import { site } from "@/lib/site";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: treatments[0].title,
    message: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello Pannu Vaid,\nName: ${form.name}\nPhone: ${form.phone}\nConcern: ${form.treatment}\nMessage: ${form.message}`
  )}`;

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center">
        <FiCheckCircle className="mx-auto text-5xl text-brand-600" />
        <h3 className="mt-4 font-display text-2xl font-semibold">Thank you!</h3>
        <p className="mt-2 text-sm text-brand-800/70 dark:text-brand-200/60">
          Your appointment request has been received. To confirm instantly, send
          us the details on WhatsApp.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn mt-6 bg-[#25D366] text-white hover:-translate-y-0.5"
        >
          <FaWhatsapp /> Confirm on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-4 p-7 sm:p-8">
      <h3 className="font-display text-xl font-semibold">
        Request an Appointment
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name">
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className="input"
          />
        </Field>
        <Field label="Phone Number">
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 ..."
            className="input"
          />
        </Field>
      </div>
      <Field label="Concern / Treatment">
        <select
          value={form.treatment}
          onChange={(e) => update("treatment", e.target.value)}
          className="input"
        >
          {treatments.map((t) => (
            <option key={t.slug}>{t.title}</option>
          ))}
          <option>General Enquiry</option>
        </select>
      </Field>
      <Field label="Message (optional)">
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={3}
          placeholder="Tell us briefly about your condition..."
          className="input resize-none"
        />
      </Field>
      <button type="submit" className="btn-primary w-full">
        <FiSend /> Submit Request
      </button>
      <p className="text-center text-xs text-brand-800/50 dark:text-brand-200/40">
        We respect your privacy. Your details are never shared.
      </p>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid rgb(187 226 165 / 0.6);
          background: rgb(255 255 255 / 0.6);
          padding: 0.7rem 0.9rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }
        :global(.dark .input) {
          background: rgb(255 255 255 / 0.04);
          border-color: rgb(38 78 24 / 0.6);
          color: #ecf4e6;
        }
        :global(.input:focus) {
          border-color: #4f9e28;
        }
      `}</style>
    </form>
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
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}
