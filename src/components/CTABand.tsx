"use client";

import Link from "next/link";
import { FaWhatsapp, FaLeaf } from "react-icons/fa";
import { FiPhone, FiArrowRight } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export function CTABand() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Spotlight effect coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <section className="section overflow-hidden relative">
      {/* Decorative leaf particles */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-10 text-brand-300/20 dark:text-brand-800/10 z-0"
        animate={{ y: [0, -15, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaLeaf size={80} />
      </motion.div>

      <div className="container-px relative z-10">
        <Reveal>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-6 py-16 text-center text-white shadow-2xl sm:px-12 border border-white/20 dark:border-white/10 group cursor-default"
          >
            {/* Spotlight overlay */}
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: useTransform(
                  [springX, springY],
                  ([sx, sy]) =>
                    `radial-gradient(400px circle at ${sx}px ${sy}px, rgba(255, 255, 255, 0.15), transparent 85%)`
                ),
              }}
            />

            {/* Glowing background radial blur blobs */}
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gold-400/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/25 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur mb-6 border border-white/15">
                <FaLeaf className="text-gold-200" size={11} /> Start Healing
              </span>
              <h2 className="font-display text-3xl font-extrabold sm:text-5xl leading-tight text-white tracking-tight">
                Begin Your Natural Healing Journey Today
              </h2>
              <p className="mt-5 text-white/85 max-w-lg mx-auto text-base leading-relaxed">
                Book a personalised Ayurvedic consultation with Pannu Vaid and
                take the first step towards lasting, drug-free relief.
              </p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn bg-white text-brand-800 hover:text-brand-900 shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 font-bold px-8 py-4 flex items-center gap-2 group/btn"
                >
                  Book Consultation 
                  <FiArrowRight className="transition-transform group-hover/btn:translate-x-1 text-brand-800" />
                </Link>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 px-6 py-4"
                >
                  <FaWhatsapp className="text-[#25D366] text-lg" /> WhatsApp Us
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="btn border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 px-6 py-4"
                >
                  <FiPhone className="text-lg" /> {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
