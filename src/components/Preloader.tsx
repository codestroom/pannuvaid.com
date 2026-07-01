"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { GiLiver } from "react-icons/gi";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const step = 2; // Step by 2% to optimize react renders
    const duration = 1200; // 1.2 seconds total duration
    const stepTime = (duration / end) * step; // 24ms per step

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
        setTimeout(() => setLoading(false), 350); // pause for healthy liver state check
      }
      setProgress(start);
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
              <span className="font-display text-4xl font-black tracking-wider text-brand-950">
                {progress}%
              </span>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.2 }}
                className="text-[10px] font-bold uppercase tracking-widest text-brand-700/70"
              >
                Pannu Vaid • Natural Healing
              </motion.p>
              {/* Dynamic Health Status Indicator */}
              <span 
                className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full transition-all duration-300 ${
                  progress < 40 
                    ? "bg-amber-100 text-amber-800 border border-amber-200/50" 
                    : progress < 80 
                    ? "bg-yellow-100 text-yellow-800 border border-yellow-200/50" 
                    : "bg-brand-100 text-brand-800 border border-brand-200/50"
                }`}
              >
                {progress < 40 ? "⚠️ Fatty Liver" : progress < 80 ? "⚡ Detoxifying..." : "✅ Healthy Liver!"}
              </span>
            </div>

            {/* Sleek Progress Bar with Moving Liver Care Icon */}
            <div className="w-48 relative mt-4 pb-2">
              {/* Progress bar track */}
              <div className="w-full h-[4px] bg-brand-100/70 rounded-full overflow-hidden relative">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-600 via-brand-500 to-gold-500 transition-all duration-150 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Moving Liver icon riding on the progress line */}
              <div
                className="absolute -top-7 -translate-x-1/2 flex flex-col items-center pointer-events-none transition-all duration-150 ease-out"
                style={{ left: `${progress}%` }}
              >
                <div
                  className={`transition-all duration-300 transform ${
                    progress < 40
                      ? "text-amber-500 scale-125 rotate-12 drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]"
                      : progress < 80
                      ? "text-yellow-500 scale-110 -rotate-6 drop-shadow-[0_2px_8px_rgba(234,179,8,0.5)] animate-pulse"
                      : "text-brand-600 scale-100 rotate-0 drop-shadow-[0_4px_10px_rgba(79,158,40,0.6)]"
                  }`}
                >
                  <GiLiver size={22} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

