"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-white dark:bg-[#0b150a]"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-gradient text-white"
            >
              <FaLeaf size={28} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="font-display text-lg font-semibold tracking-wide text-brand-700 dark:text-brand-200"
            >
              Pannu Vaid
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
