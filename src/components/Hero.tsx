"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaLeaf, FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { site, trustBadges } from "@/lib/site";
import { heroImage } from "@/lib/images";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-hero-radial pb-16 pt-32 sm:pt-40"
    >
      {/* Background image with soft overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.15] dark:opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/75 to-white dark:from-[#0b150a]/50 dark:via-[#0b150a]/75 dark:to-[#0b150a]" />
      </div>

      {/* Floating ayurvedic elements */}
      {[
        { top: "15%", left: "8%", size: 30, delay: 0 },
        { top: "60%", left: "12%", size: 22, delay: 1.5 },
        { top: "25%", right: "10%", size: 26, delay: 0.8 },
        { top: "70%", right: "14%", size: 34, delay: 2 },
      ].map((leaf, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute text-brand-300/50 dark:text-brand-700/40"
          style={{ ...leaf }}
          animate={{ y: [0, -22, 0], rotate: [0, 18, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: leaf.delay, ease: "easeInOut" }}
        >
          <FaLeaf size={leaf.size} />
        </motion.div>
      ))}

      <motion.div style={{ y, opacity }} className="container-px relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <FaLeaf /> Trusted Ayurvedic Care in Samrala, Punjab
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] sm:text-6xl md:text-7xl"
          >
            Natural Healing Through{" "}
            <span className="gradient-text">Ayurveda</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-brand-800/75 dark:text-brand-200/65"
          >
            Helping people achieve better health through traditional Ayurvedic
            care — personalised, root-cause treatment with no side effects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="/contact" className="btn-primary">
              Book Consultation <FiArrowRight />
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FaWhatsapp className="text-[#25D366]" /> Contact Now
            </a>
            <a href={`tel:${site.phoneHref}`} className="btn-outline">
              <FiPhone /> Call
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-brand-800/70 dark:text-brand-200/60"
          >
            {trustBadges.map((b) => (
              <span key={b} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {b}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
