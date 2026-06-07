"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiSend } from "react-icons/fi";
import { site } from "@/lib/site";
import { Product } from "@/lib/products";

export function OrderForm({ product }: { product: Product }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Pannu Vaid,\nI would like to order:\n\n*Product:* ${product.title} (${product.subTitle})\n\n*Customer Details:*\n- Name: ${form.name}\n- Phone: ${form.phone}\n- Shipping Address: ${form.address}`;
    const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappLink, "_blank");
    setSubmitted(submitted => !submitted);
  };

  if (submitted) {
    return (
      <div className="text-center py-6 space-y-3 bg-brand-50/50 dark:bg-white/[0.02] rounded-2xl border border-brand-200/50 dark:border-white/5 animate-fadeIn">
        <span className="mx-auto h-12 w-12 rounded-full bg-brand-100 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-900 flex items-center justify-center text-brand-655">
          <FiCheck className="text-xl" />
        </span>
        <h4 className="text-lg font-bold text-brand-950 dark:text-brand-50">Redirecting to WhatsApp</h4>
        <p className="text-xs text-brand-850 dark:text-brand-200/60 leading-relaxed max-w-sm mx-auto px-4">
          Once you click send in your WhatsApp application, our clinic will process your delivery and shipping request. Thank you!
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-bold text-brand-650 hover:underline dark:text-brand-400"
        >
          Send another order
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-850 dark:text-brand-250 mb-1.5">Full Name</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="w-full rounded-2xl border border-brand-200/80 bg-white/60 px-4 py-3 text-sm outline-none transition-all duration-350 focus:border-brand-500 focus:bg-white dark:border-brand-800 dark:bg-white/5 dark:focus:bg-[#0c160c] dark:focus:border-brand-400 focus:ring-2 focus:ring-brand-500/10 text-brand-950 dark:text-brand-50"
          />
        </div>

        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-850 dark:text-brand-250 mb-1.5">Phone Number</label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 ..."
            className="w-full rounded-2xl border border-brand-200/80 bg-white/60 px-4 py-3 text-sm outline-none transition-all duration-350 focus:border-brand-500 focus:bg-white dark:border-brand-800 dark:bg-white/5 dark:focus:bg-[#0c160c] dark:focus:border-brand-400 focus:ring-2 focus:ring-brand-500/10 text-brand-950 dark:text-brand-50"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-850 dark:text-brand-250 mb-1.5">Shipping Address</label>
        <textarea
          required
          rows={3}
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          placeholder="Enter complete shipping address (including state and pin code)"
          className="w-full rounded-2xl border border-brand-200/80 bg-white/60 px-4 py-3 text-sm outline-none transition-all duration-350 focus:border-brand-500 focus:bg-white dark:border-brand-800 dark:bg-white/5 dark:focus:bg-[#0c160c] dark:focus:border-brand-400 focus:ring-2 focus:ring-brand-500/10 text-brand-950 dark:text-brand-50 resize-none"
        />
      </div>

      <button
        type="submit"
        className="btn bg-[#25D366] hover:bg-[#20ba59] text-white w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 font-bold transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        <FaWhatsapp className="text-xl" /> Confirm Order via WhatsApp
      </button>
    </form>
  );
}
