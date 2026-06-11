"use client";

import Link from "next/link";
import Image from "next/image";
import { FiShoppingBag, FiArrowRight, FiInfo } from "react-icons/fi";
import { FaLeaf, FaShoppingBag } from "react-icons/fa";
import { products } from "@/lib/products";
import { TiltCard } from "./TiltCard";
import { Reveal } from "./Reveal";

export function ProductShowcase() {
  return (
    <section className="section relative overflow-hidden" id="products">
      {/* Background organic blurs */}
      <div className="absolute top-1/4 right-0 -z-10 h-96 w-96 rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -z-10 h-96 w-96 rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="container-px">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50/50 dark:bg-brand-950/60 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:text-brand-350 border border-brand-100/50 dark:border-brand-900/50 shadow-sm">
              <FaLeaf className="text-brand-500" size={11} /> Classical Apothecary
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight text-brand-950 dark:text-brand-50 sm:text-4xl md:text-[2.6rem] tracking-tight">
              Proprietary Herbal Remedies
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-base sm:text-lg text-brand-800/70 dark:text-brand-200/60 leading-relaxed max-w-2xl mx-auto">
              Prepared using classical Ayurvedic methods, these organic formulations are refined by Pannu Vaid to target root-cause illness.
            </p>
          </Reveal>
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <Reveal key={product.id} delay={idx}>
              <TiltCard
                className="group h-full rounded-[2.2rem] bg-white dark:bg-[#0c160c]/40 shadow-soft hover:shadow-2xl border border-white/20 dark:border-white/5 overflow-hidden flex flex-col justify-between transition-all duration-350"
                glowColor="rgba(79, 158, 40, 0.15)"
              >
                <div>
                  {/* Image Container with floating pedestal */}
                  <div className="relative aspect-square w-full bg-gradient-to-b from-brand-50/20 to-transparent dark:from-white/[0.02] dark:to-transparent p-6 flex items-center justify-center border-b border-brand-100/20 dark:border-brand-900/20" style={{ transform: "translateZ(10px)" }}>
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="rounded-full bg-brand-50/80 dark:bg-brand-950/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-brand-800 dark:text-brand-300 border border-brand-100/50 dark:border-brand-900/30">
                        {product.badge}
                      </span>
                    </div>

                    {/* Image Pedestal Shadow & Glow */}
                    <div className="absolute bottom-6 w-2/3 h-4 bg-black/5 dark:bg-black/20 rounded-full filter blur-md transform scale-x-90 transition-transform group-hover:scale-x-100 duration-500" />
                    
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-contain p-2 drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
                      />
                    </div>
                  </div>

                  {/* Details section */}
                  <div className="p-6 space-y-3" style={{ transform: "translateZ(15px)" }}>
                    <div>
                      <h3 className="font-display text-lg font-bold text-brand-950 dark:text-brand-50 tracking-tight leading-snug group-hover:text-brand-650 dark:group-hover:text-brand-400 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-xs font-bold text-brand-600 dark:text-brand-450 mt-0.5">
                        {product.subTitle}
                      </p>
                    </div>

                    <p className="text-xs text-brand-850 dark:text-brand-200/70 leading-relaxed line-clamp-3">
                      {product.desc}
                    </p>

                    {/* Spec details (e.g. Size) */}
                    <div className="flex items-center gap-1.5 text-xs text-brand-800/60 dark:text-brand-200/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                      <span>Packaging: <strong className="text-brand-950 dark:text-brand-200">{product.size}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="px-6 pb-6 pt-3 border-t border-brand-100/30 dark:border-brand-900/10 flex flex-col gap-3" style={{ transform: "translateZ(10px)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-800/40 dark:text-brand-250/30 block">Pack Size</span>
                      <span className="text-base font-black text-brand-950 dark:text-brand-50">{product.size}</span>
                    </div>
                    
                    {/* View Details Link */}
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-xs font-bold text-brand-650 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 flex items-center gap-1.5 transition-colors group/link"
                    >
                      View Details
                      <FiArrowRight className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    className="btn w-full bg-brand-gradient text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-bold py-3 text-xs rounded-xl flex items-center justify-center gap-2 shadow"
                  >
                    <FiShoppingBag /> Learn & Order
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
