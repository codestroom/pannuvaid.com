"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/lib/content";
import { Stars } from "./Stars";
import { TiltCard } from "./TiltCard";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: number) => {
    setDir(d);
    setIndex((prev) => (prev + d + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => go(1), 8000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = testimonials[index];

  return (
    <div className="relative mx-auto max-w-4xl px-4">
      {/* Testimonial tilt card wrapper */}
      <TiltCard
        className="rounded-[2.5rem] bg-white dark:bg-white/[0.03] shadow-2xl border border-white/20 dark:border-white/5 overflow-hidden"
        glowColor="rgba(205, 198, 40, 0.15)"
      >
        <div className="relative p-8 sm:p-12 md:p-14">
          <span className="absolute right-8 top-8 opacity-[0.08] dark:opacity-[0.04] text-brand-900 dark:text-brand-100 pointer-events-none">
            <FaQuoteLeft size={100} />
          </span>
          
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: dir * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -30 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div style={{ transform: "translateZ(15px)" }}>
                <Stars count={t.rating} />
              </div>
              
              <p className="mt-6 font-display text-lg sm:text-2xl font-bold italic leading-relaxed text-brand-950 dark:text-brand-50 tracking-tight" style={{ transform: "translateZ(20px)" }}>
                “{t.quote}”
              </p>
              
              <div className="mt-8 flex items-center gap-4 border-t border-brand-100/50 dark:border-brand-900/50 pt-6" style={{ transform: "translateZ(10px)" }}>
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-gradient text-lg font-bold text-white shadow-soft">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-bold text-base text-brand-950 dark:text-brand-50">{t.name}</p>
                  <p className="text-xs sm:text-sm font-semibold text-brand-800/60 dark:text-brand-200/50">
                    {t.location} • <span className="text-brand-650 dark:text-brand-400 font-bold">{t.treatment} Recovery</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </TiltCard>

      {/* Modern navigation buttons & indicators */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid h-12 w-12 place-items-center rounded-full border border-brand-200/80 bg-white/80 text-brand-850 hover:bg-brand-gradient hover:text-white shadow-md hover:-translate-y-0.5 transition-all duration-300 dark:border-brand-800/80 dark:bg-[#0c160c]/80 dark:text-brand-200"
        >
          <FiChevronLeft size={20} />
        </button>
        
        <div className="flex gap-2.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-brand-gradient shadow" : "w-2.5 bg-brand-200 hover:bg-brand-300 dark:bg-brand-850 dark:hover:bg-brand-700"
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid h-12 w-12 place-items-center rounded-full border border-brand-200/80 bg-white/80 text-brand-850 hover:bg-brand-gradient hover:text-white shadow-md hover:-translate-y-0.5 transition-all duration-300 dark:border-brand-800/80 dark:bg-[#0c160c]/80 dark:text-brand-200"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
