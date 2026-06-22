"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 1200; // 1.2 seconds total duration
    const stepTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setProgress(start);
      if (start >= end) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 250); // slight pause at 100% for smooth transition
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fafaf9] selection:bg-transparent"
        >
          {/* Soft Ambient Background Gradients for Light Theme */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-200/20 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold-300/15 blur-[100px] pointer-events-none" />

          {/* Main Card Container */}
          <div className="flex flex-col items-center gap-7 px-10 py-12 rounded-[2.5rem] border border-brand-100/30 bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(79,158,40,0.06)] relative overflow-hidden max-w-[90%] w-[380px]">
            {/* Soft decorative light border reflection */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent pointer-events-none rounded-[2.5rem]" />

            {/* Logo Wrapper */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.95, 1.03, 0.98, 1.01, 1], opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative rounded-2xl bg-white px-5 py-3 shadow-[0_8px_25px_rgba(79,158,40,0.05)] border border-brand-100/80"
            >
              <Image
                src="/logo.png"
                alt="Pannu Vaid Logo"
                width={200}
                height={73}
                priority
                className="h-10 w-auto object-contain"
              />
              {/* Soft gold aura behind the logo */}
              <div className="absolute -inset-1 -z-10 rounded-[1.25rem] bg-gold-300/20 blur-md opacity-65 animate-pulse" />
            </motion.div>

            {/* Progress Text */}
            <div className="flex flex-col items-center gap-2">
              <motion.span
                key={progress}
                initial={{ opacity: 0.6, y: -2 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl font-black tracking-wider text-brand-950"
              >
                {progress}%
              </motion.span>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.2 }}
                className="text-[10px] font-bold uppercase tracking-widest text-brand-700/70"
              >
                Pure Ayurveda • Natural Healing
              </motion.p>
            </div>

            {/* Sleek Progress Bar */}
            <div className="w-48 h-[3px] bg-brand-100/70 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-600 via-brand-500 to-gold-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

