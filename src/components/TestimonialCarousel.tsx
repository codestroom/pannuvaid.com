"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/lib/content";
import { Stars } from "./Stars";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: number) => {
    setDir(d);
    setIndex((prev) => (prev + d + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = testimonials[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="glass-card relative overflow-hidden p-8 sm:p-12">
        <FaQuoteLeft className="absolute right-8 top-8 text-5xl text-brand-100 dark:text-brand-900/60" />
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.4 }}
          >
            <Stars count={t.rating} />
            <p className="mt-5 font-display text-lg leading-relaxed sm:text-xl">
              “{t.quote}”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-gradient font-semibold text-white">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-brand-800/60 dark:text-brand-200/50">
                  {t.location} • {t.treatment}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-brand-200 transition hover:bg-brand-gradient hover:text-white dark:border-brand-800"
        >
          <FiChevronLeft />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-brand-gradient" : "w-2 bg-brand-200 dark:bg-brand-800"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-brand-200 transition hover:bg-brand-gradient hover:text-white dark:border-brand-800"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
