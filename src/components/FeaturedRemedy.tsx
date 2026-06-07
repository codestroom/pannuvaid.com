"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiShoppingBag } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { getProduct } from "@/lib/products";
import { Stars } from "./Stars";

export function FeaturedRemedy({ slug }: { slug: string }) {
  const product = getProduct(slug);
  if (!product) return null;

  const highlights = product.benefits.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[2.5rem] border border-brand-100/60 bg-gradient-to-br from-white via-brand-50/40 to-gold-50/30 shadow-2xl dark:border-white/10 dark:from-[#0c160c] dark:via-[#0a130a] dark:to-[#0c160c]"
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
        {/* Product image on a glowing pedestal */}
        <div className="relative order-1 flex justify-center lg:order-none">
          {/* Radial glow behind the bottle */}
          <div className="pointer-events-none absolute inset-0 m-auto h-64 w-64 rounded-full bg-brand-500/15 blur-[80px]" />

          <span className="absolute left-2 top-2 z-10 inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg">
            <FaLeaf size={11} /> Bestseller
          </span>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-square w-full max-w-sm"
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.22)]"
            />
          </motion.div>

          {/* Pedestal shadow */}
          <div className="pointer-events-none absolute bottom-4 left-1/2 h-5 w-3/5 -translate-x-1/2 rounded-full bg-black/15 blur-xl dark:bg-black/40" />
        </div>

        {/* Copy */}
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:bg-brand-950/60 dark:text-brand-350 border border-brand-100/50 dark:border-brand-900/50">
            🌿 Featured Remedy
          </span>

          <h3 className="mt-4 font-display text-3xl font-black leading-tight tracking-tight text-brand-950 dark:text-brand-50 sm:text-4xl">
            {product.title}
          </h3>
          <p className="mt-1 text-base font-bold text-brand-600 dark:text-brand-400">{product.subTitle}</p>

          <div className="mt-3 flex items-center gap-3">
            <Stars count={5} />
            <span className="text-xs font-semibold text-brand-800/60 dark:text-brand-200/50">
              Trusted by 1,000+ patients
            </span>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-brand-850 dark:text-brand-200/70 sm:text-base">
            {product.longDesc}
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {highlights.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-brand-900 dark:text-brand-100">
                <FiCheckCircle className="mt-0.5 shrink-0 text-brand-500" />
                <span className="font-medium leading-snug">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`/products/${product.slug}`}
              className="btn bg-brand-gradient px-7 py-3.5 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center gap-2 group"
            >
              <FiShoppingBag /> Order Now
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={`/products/${product.slug}`}
              className="btn border border-brand-200 px-7 py-3.5 font-bold text-brand-850 transition-all duration-300 hover:bg-brand-50/80 dark:border-brand-900 dark:text-brand-100 dark:hover:bg-white/5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
