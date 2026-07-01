"use client";

import { useRef } from "react";
import type { IconType } from "react-icons";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FaRegCommentDots, FaBalanceScale, FaMortarPestle, FaHeartbeat } from "react-icons/fa";

type Step = {
  icon: IconType;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    icon: FaRegCommentDots,
    title: "Consultation",
    desc: "We listen to your full story — symptoms, history, and lifestyle — to understand the real root of your condition.",
  },
  {
    icon: FaBalanceScale,
    title: "Root-Cause Diagnosis",
    desc: "An authentic assessment by Pannu Vaid pinpoints the true root of your condition and exactly what's out of balance.",
  },
  {
    icon: FaMortarPestle,
    title: "Personalised Herbal Plan",
    desc: "Pure, root-cause herbal formulations are prepared and tailored precisely to your unique constitution.",
  },
  {
    icon: FaHeartbeat,
    title: "Lasting Recovery",
    desc: "With renewed health and simple lifestyle guidance, you stay well — naturally and for the long term.",
  },
];

export function HealingJourney() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 65%", "end 55%"],
  });
  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={trackRef} className="relative mx-auto mt-14 max-w-3xl">
      {/* Base rail */}
      <div className="absolute left-7 top-3 bottom-3 w-[3px] -translate-x-1/2 rounded-full bg-brand-100 dark:bg-brand-900/60 md:left-1/2" />
      {/* Animated progress fill */}
      <motion.div
        style={{ scaleY: fillScale }}
        className="absolute left-7 top-3 bottom-3 w-[3px] -translate-x-1/2 origin-top rounded-full bg-brand-gradient shadow-[0_0_12px_rgba(79,158,40,0.6)] md:left-1/2"
      />

      <ul className="space-y-10 md:space-y-16">
        {steps.map((step, i) => (
          <StepRow key={step.title} step={step} index={i} />
        ))}
      </ul>
    </div>
  );
}

function StepRow({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const Icon = step.icon;
  const leftSide = index % 2 === 0;

  return (
    <li ref={ref} className="relative pl-20 md:grid md:grid-cols-2 md:gap-12 md:pl-0">
      {/* Node on the rail */}
      <motion.span
        aria-hidden
        animate={inView ? { scale: 1.1 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="absolute left-7 top-1 z-10 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-2xl border shadow-lg transition-colors duration-500 md:left-1/2 md:top-1/2 md:-translate-y-1/2"
        style={{
          backgroundColor: inView ? undefined : "transparent",
        }}
      >
        <span
          className={`grid h-14 w-14 place-items-center rounded-2xl transition-all duration-500 ${
            inView
              ? "bg-brand-gradient text-white shadow-[0_0_20px_rgba(79,158,40,0.55)]"
              : "bg-white text-brand-400 dark:bg-[#0c160c] border border-brand-100 dark:border-brand-900"
          }`}
        >
          <Icon size={22} />
        </span>
      </motion.span>

      {/* Card — alternates sides on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`rounded-3xl border bg-white p-6 shadow-soft transition-all duration-500 dark:bg-white/[0.03] ${
          inView
            ? "border-brand-300/70 shadow-xl dark:border-brand-700/50"
            : "border-white/20 dark:border-white/5"
        } ${leftSide ? "md:col-start-1 md:text-right" : "md:col-start-2"}`}
      >
        <span
          className={`text-xs font-extrabold uppercase tracking-widest transition-colors duration-500 ${
            inView ? "text-brand-600 dark:text-brand-400" : "text-brand-800/40 dark:text-brand-200/30"
          }`}
        >
          Step {index + 1}
        </span>
        <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-brand-950 dark:text-brand-50">
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-850 dark:text-brand-200/70">
          {step.desc}
        </p>
      </motion.div>
    </li>
  );
}
