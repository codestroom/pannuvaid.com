"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { getTreatment } from "@/lib/treatments";
import { treatmentImage } from "@/lib/images";
import { TiltCard } from "./TiltCard";

export function TreatmentCard({ slug, index = 0 }: { slug: string; index?: number }) {
  const t = getTreatment(slug);
  if (!t) return null;
  const Icon = t.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="h-full"
    >
      <TiltCard
        className="h-full rounded-3xl bg-white shadow-soft dark:bg-white/[0.03]"
        glowColor="rgba(79, 158, 40, 0.15)"
      >
        <Link
          href={`/treatments/${t.slug}`}
          className="group flex h-full flex-col overflow-hidden rounded-3xl"
        >
          <div className="relative aspect-[16/10] overflow-hidden" style={{ transform: "translateZ(10px)" }}>
            <Image
              src={treatmentImage(t.slug)}
              alt={`${t.title} Ayurvedic treatment`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <span className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft">
              <Icon size={20} />
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6" style={{ transform: "translateZ(20px)" }}>
            <h3 className="font-display text-xl font-semibold transition-colors duration-300 group-hover:text-brand-600 dark:group-hover:text-brand-400">{t.title}</h3>
            <p className="mt-2 flex-1 text-sm text-brand-800/70 dark:text-brand-200/60">
              {t.short}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 group-hover:underline">
              Learn more
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}

