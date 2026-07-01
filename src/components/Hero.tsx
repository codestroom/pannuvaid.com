"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { FaLeaf, FaWhatsapp, FaStar } from "react-icons/fa";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { site, trustBadges } from "@/lib/site";
import { heroImage, pannuVaidWriting } from "@/lib/images";
import { TiltCard } from "./TiltCard";

const heroCards = [
  {
    image: "/images/hero/digestive-churna.png",
    title: "Kabz Care Churna",
    desc: "Gentle natural laxative to clear bloating & acid buildup.",
    rotate: -8,
    x: -35,
    y: 15,
    zIndex: 10,
    glow: "rgba(205, 198, 40, 0.2)",
    bgGradient: "from-[#201c05] via-[#0c0a02] to-black"
  },
  {
    image: "/images/hero/joint-capsules.png",
    title: "Joint & Nerve Capsules",
    desc: "Soothes deep muscular pain & enhances joint mobility.",
    rotate: 2,
    x: 0,
    y: -15,
    zIndex: 20,
    glow: "rgba(220, 38, 38, 0.2)",
    bgGradient: "from-[#220707] via-[#0d0303] to-black"
  },
  {
    image: "/images/hero/liver-detox.png",
    title: "Liver Care",
    desc: "Classical syrup to stimulate liver cells & restore metabolism.",
    rotate: 8,
    x: 35,
    y: 20,
    zIndex: 30,
    glow: "rgba(79, 158, 40, 0.2)",
    bgGradient: "from-[#081e08] via-[#040c04] to-black"
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
              <span>Trusted Care by Pannu Vaid</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl tracking-tight text-brand-950 dark:text-brand-50"
            >
              Natural Healing <br className="hidden sm:inline" />
              With{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Pannu Vaid</span>
                <motion.svg
                  aria-hidden
                  viewBox="0 0 220 14"
                  fill="none"
                  className="absolute -bottom-2 left-0 w-full sm:-bottom-3"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M4 10 C 60 3, 160 2, 216 8"
                    stroke="url(#hero-underline)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="hero-underline" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4f9e28" />
                      <stop offset="1" stopColor="#cdc628" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-brand-800/80 dark:text-brand-200/70 leading-relaxed"
            >
              Experience personalised, root-cause healing by Pannu Vaid. Our authentic Ayurvedic therapies are designed for your unique constitution to restore balance, health, and vitality.
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
            {/* Floating trust chips around the deck */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="pointer-events-none absolute -top-2 left-2 md:left-6 z-40 hidden sm:block"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card flex items-center gap-2.5 rounded-2xl px-4 py-2.5"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-gradient text-white">
                  <FaLeaf size={13} />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-extrabold text-brand-950 dark:text-brand-50">25+ Years</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-700/70 dark:text-brand-300/60">of Healing</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="pointer-events-none absolute bottom-2 right-2 md:right-6 z-40 hidden sm:block"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass-card flex items-center gap-2.5 rounded-2xl px-4 py-2.5"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white">
                  <FaStar size={13} />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-extrabold text-brand-950 dark:text-brand-50">2 Lakh+</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-700/70 dark:text-brand-300/60">Patients Healed</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              ref={containerRef}
              className="relative w-[300px] md:w-[350px] h-[350px] md:h-[400px] cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <TiltCard
                className="w-full h-full rounded-[2.5rem] bg-white shadow-2xl dark:bg-white/[0.04] overflow-hidden"
                glowColor="rgba(79, 158, 40, 0.25)"
              >
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col justify-end p-6 border border-white/20 dark:border-white/10 group">
                  {/* Photo of Pannu Vaid */}
                  <div className="absolute inset-0 bg-[#f8faf8] dark:bg-[#0c160c]">
                    <Image
                      src={pannuVaidWriting}
                      alt="Pannu Vaid consulting a patient"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Vignette gradient overlay for name block readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content Overlay */}
                  <div className="relative z-10 text-white" style={{ transform: "translateZ(20px)" }}>
                    <span className="inline-flex items-center gap-1 p-1.5 rounded-lg bg-brand-500/80 backdrop-blur-md text-white mb-2 text-[10px] font-bold uppercase tracking-wider border border-white/10">
                      <FaLeaf size={10} /> Chief Ayurvedic Physician
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
                      Pannu Vaid
                    </h3>
                    <p className="mt-1 text-xs text-white/90 leading-normal font-medium">
                      Decades of Trusted root-cause healing
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

