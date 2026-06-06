"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUp, FiPhone } from "react-icons/fi";
import { site } from "@/lib/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid h-11 w-11 place-items-center rounded-full bg-brand-700 text-white shadow-soft transition hover:bg-brand-800"
        >
          <FiArrowUp />
        </motion.button>
      )}

      <a
        href={`tel:${site.phoneHref}`}
        aria-label="Call now"
        className="grid h-13 w-13 place-items-center rounded-full bg-brand-gradient p-3.5 text-white shadow-soft transition hover:-translate-y-0.5"
      >
        <FiPhone size={22} />
      </a>

      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          "Hello Pannu Vaid, I would like to book an Ayurvedic consultation."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative grid place-items-center rounded-full bg-[#25D366] p-3.5 text-white shadow-soft transition hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <FaWhatsapp size={24} className="relative" />
      </a>
    </div>
  );
}
