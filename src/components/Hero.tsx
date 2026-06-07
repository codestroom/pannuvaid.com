"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { FaLeaf, FaWhatsapp, FaStar } from "react-icons/fa";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { site, trustBadges } from "@/lib/site";
import { heroImage } from "@/lib/images";
import { TiltCard } from "./TiltCard";

const heroCards = [
  {
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
    title: "100% Organic Herbs",
    desc: "Pure formulations without side effects.",
    rotate: -8,
    x: -35,
    y: 15,
    zIndex: 10,
    glow: "rgba(79, 158, 40, 0.2)"
  },
  {
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    title: "Root-Cause Healing",
    desc: "Personalised ancient Ayurvedic protocols.",
    rotate: 2,
    x: 0,
    y: -15,
    zIndex: 20,
    glow: "rgba(205, 198, 40, 0.2)"
  },
  {
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
    title: "Legacy of Trust",
    desc: "50,000+ patients healed across Punjab.",
    rotate: 8,
    x: 35,
    y: 20,
    zIndex: 30,
    glow: "rgba(154, 108, 60, 0.2)"
  },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Interactive mouse follow spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-hero-radial pb-20 pt-32 sm:pt-40 lg:pb-32 lg:pt-48"
    >
      {/* Interactive spotlight background */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-20 transition-opacity duration-500"
        style={{
          background: useTransform(
            [springX, springY],
            ([sx, sy]) =>
              `radial-gradient(600px circle at ${sx}px ${sy}px, rgba(79, 158, 40, 0.15), transparent 80%)`
          ),
        }}
      />

      {/* Decorative backdrop organic blurred blobs */}
      <div className="absolute left-1/4 top-1/4 -z-20 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/20 blur-3xl dark:bg-brand-950/20" />
      <div className="absolute right-1/4 bottom-1/4 -z-20 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-gold-200/20 blur-3xl dark:bg-gold-950/10" />

      {/* Background image with soft overlay */}
      <div className="absolute inset-0 -z-30">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.12] dark:opacity-[0.08] mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-white dark:from-[#0b150a]/30 dark:via-[#0b150a]/80 dark:to-[#0b150a]" />
      </div>

      {/* Floating ayurvedic leaf elements */}
      {[
        { top: "12%", left: "6%", size: 28, delay: 0 },
        { top: "65%", left: "8%", size: 20, delay: 1.2 },
        { top: "20%", right: "8%", size: 24, delay: 0.6 },
        { top: "75%", right: "12%", size: 30, delay: 1.8 },
      ].map((leaf, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute text-brand-400/40 dark:text-brand-600/30"
          style={{ ...leaf }}
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: leaf.delay, ease: "easeInOut" }}
        >
          <FaLeaf size={leaf.size} />
        </motion.div>
      ))}

      <motion.div style={{ y, opacity }} className="container-px relative">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          
          {/* Hero text content */}
          <div className="text-left lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4.5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:border-brand-800 dark:bg-brand-950/60 dark:text-brand-300 shadow-sm backdrop-blur"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
              </span>
              <span>Trusted Ayurvedic Care in Punjab</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl tracking-tight text-brand-950 dark:text-brand-50"
            >
              Natural Healing <br className="hidden sm:inline" />
              Through <span className="gradient-text">Ayurveda</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-brand-800/80 dark:text-brand-200/70 leading-relaxed"
            >
              Experience personalised, root-cause Ayurvedic therapy designed for your unique constitution. Restoring balance, health, and vitality without any side effects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/contact" className="btn-primary group relative overflow-hidden px-8 py-4 text-base">
                <span className="relative z-10 flex items-center gap-2">
                  Book Consultation <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-600 via-brand-500 to-gold-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-6 py-4 flex items-center gap-2 hover:bg-brand-50 dark:hover:bg-brand-950/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <FaWhatsapp className="text-[#25D366] text-lg" /> Chat Now
              </a>
              <a 
                href={`tel:${site.phoneHref}`} 
                className="btn-outline px-6 py-4 flex items-center gap-2 hover:bg-brand-50 dark:hover:bg-brand-950/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <FiPhone className="text-lg" /> Call Us
              </a>
            </motion.div>

            {/* Ratings & Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-brand-100/60 dark:border-brand-900/60 flex flex-wrap items-center gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm fill-amber-500" />
                  ))}
                </div>
                <div className="text-sm font-semibold">
                  <span className="text-brand-950 dark:text-brand-50 font-bold">4.9/5</span> Rating
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-brand-850 dark:text-brand-200/60">
                {trustBadges.slice(0, 3).map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive 3D Stacked Card Deck */}
          <div className="relative flex justify-center items-center lg:col-span-5 h-[340px] md:h-[420px] lg:h-[450px]">
            <motion.div
              ref={containerRef}
              className="relative w-[280px] md:w-[320px] h-[340px] md:h-[380px] cursor-pointer"
              whileHover="hover"
            >
              {heroCards.map((card, idx) => {
                // Stacked states and hover expansion coordinates
                const hoverX = idx === 0 ? -140 : idx === 2 ? 140 : 0;
                const hoverY = idx === 0 ? 10 : idx === 2 ? 15 : -15;
                const hoverRotate = idx === 0 ? -12 : idx === 2 ? 12 : 0;

                return (
                  <motion.div
                    key={idx}
                    className="absolute inset-0"
                    style={{ zIndex: card.zIndex }}
                    variants={{
                      hover: {
                        x: hoverX,
                        y: hoverY,
                        rotate: hoverRotate,
                        scale: 1.05,
                        transition: { duration: 0.4, ease: "easeOut" }
                      }
                    }}
                    animate={{
                      x: card.x,
                      y: card.y,
                      rotate: card.rotate,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <TiltCard
                      className="w-full h-full rounded-[2rem] bg-white shadow-xl dark:bg-white/[0.04]"
                      glowColor={card.glow}
                    >
                      <div className="relative w-full h-full rounded-[2rem] overflow-hidden flex flex-col justify-end p-6 border border-white/30 dark:border-white/10">
                        {/* Background Image overlay */}
                        <div className="absolute inset-0">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            sizes="300px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                        </div>

                        {/* Card Content */}
                        <div className="relative z-10 text-white" style={{ transform: "translateZ(15px)" }}>
                          <span className="inline-block p-2 rounded-xl bg-brand-gradient/80 text-white mb-3 text-sm">
                            <FaLeaf />
                          </span>
                          <h3 className="font-display text-xl font-bold tracking-tight">{card.title}</h3>
                          <p className="mt-1 text-xs text-white/80 leading-normal">{card.desc}</p>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

