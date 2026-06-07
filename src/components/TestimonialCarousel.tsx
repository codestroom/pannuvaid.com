"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/lib/content";
import { Stars } from "./Stars";
import { TiltCard } from "./TiltCard";

const VISIBLE = 3;

export function TestimonialCarousel() {
  const [start, setStart] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: number) => {
    setDir(d);
    setStart((prev) => (prev + d + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => go(1), 7000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // A wrapping window of VISIBLE testimonials starting at `start`.
  const visible = Array.from(
    { length: VISIBLE },
    (_, i) => testimonials[(start + i) % testimonials.length]
  );

  return (
    <div className="mx-auto max-w-6xl px-4">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={start}
          initial={{ opacity: 0, x: dir * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -40 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {visible.map((t, i) => (
            <TiltCard
              key={`${start}-${i}`}
              className="h-full rounded-[2rem] bg-white dark:bg-white/[0.03] shadow-xl border border-white/20 dark:border-white/5 overflow-hidden"
              glowColor="rgba(205, 198, 40, 0.15)"
            >
              <div className="relative flex h-full flex-col p-7 sm:p-8">
                <span className="absolute right-6 top-6 opacity-[0.07] dark:opacity-[0.04] text-brand-900 dark:text-brand-100 pointer-events-none">
                  <FaQuoteLeft size={56} />
                </span>

                <div className="relative z-10" style={{ transform: "translateZ(15px)" }}>
                  <Stars count={t.rating} />
                </div>

                <p
                  className="relative z-10 mt-5 flex-1 font-display text-base sm:text-lg font-bold italic leading-relaxed text-brand-950 dark:text-brand-50 tracking-tight"
                  style={{ transform: "translateZ(18px)" }}
                >
                  “{t.quote}”
                </p>

                <div
                  className="relative z-10 mt-6 flex items-center gap-3.5 border-t border-brand-100/50 dark:border-brand-900/50 pt-5"
                  style={{ transform: "translateZ(10px)" }}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-gradient text-base font-bold text-white shadow-soft">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-bold text-sm text-brand-950 dark:text-brand-50">{t.name}</p>
                    <p className="text-xs font-semibold text-brand-800/60 dark:text-brand-200/50">
                      {t.location} • <span className="text-brand-650 dark:text-brand-400 font-bold">{t.treatment}</span>
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons & indicators */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonials"
          className="grid h-12 w-12 place-items-center rounded-full border border-brand-200/80 bg-white/80 text-brand-850 hover:bg-brand-gradient hover:text-white shadow-md hover:-translate-y-0.5 transition-all duration-300 dark:border-brand-800/80 dark:bg-[#0c160c]/80 dark:text-brand-200"
        >
          <FiChevronLeft size={20} />
        </button>

        <div className="flex gap-2.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > start ? 1 : -1);
                setStart(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === start ? "w-8 bg-brand-gradient shadow" : "w-2.5 bg-brand-200 hover:bg-brand-300 dark:bg-brand-850 dark:hover:bg-brand-700"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Next testimonials"
          className="grid h-12 w-12 place-items-center rounded-full border border-brand-200/80 bg-white/80 text-brand-850 hover:bg-brand-gradient hover:text-white shadow-md hover:-translate-y-0.5 transition-all duration-300 dark:border-brand-800/80 dark:bg-[#0c160c]/80 dark:text-brand-200"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
