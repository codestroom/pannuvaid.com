"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { blogPosts, blogCategories } from "@/lib/content";
import { blogImage } from "@/lib/images";
import { formatDate } from "@/lib/utils";
import { TiltCard } from "./TiltCard";

export function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-600 dark:text-brand-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-full border border-brand-200/80 bg-white/60 py-3 pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-brand-500 focus:bg-white dark:border-brand-800 dark:bg-white/5 dark:focus:bg-[#0c160c] dark:focus:border-brand-400 focus:ring-2 focus:ring-brand-500/10"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {["All", ...blogCategories].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              category === c
                ? "bg-brand-gradient text-white shadow-soft scale-[1.03]"
                : "border border-brand-200 text-brand-850 hover:bg-brand-50 hover:border-brand-300 dark:border-brand-800 dark:text-brand-200 dark:hover:bg-white/5"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            className="h-full"
          >
            <TiltCard
              className="h-full rounded-3xl bg-white dark:bg-white/[0.03] shadow-soft"
              glowColor="rgba(205, 198, 40, 0.12)"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden" style={{ transform: "translateZ(10px)" }}>
                  <Image
                    src={blogImage(post.slug)}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 dark:bg-black/90 px-3.5 py-1 text-xs font-bold text-brand-700 dark:text-brand-400 border border-brand-100/50 dark:border-brand-900/50 shadow">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6" style={{ transform: "translateZ(20px)" }}>
                  <div className="text-xs font-semibold text-brand-800/60 dark:text-brand-200/50">
                    {formatDate(post.date)} • {post.readTime}
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-brand-950 dark:text-brand-50 transition-colors duration-300 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-brand-800/75 dark:text-brand-200/65 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 group-hover:underline">
                    Read article
                    <FiArrowRight className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </TiltCard>
          </motion.article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-brand-800/60 dark:text-brand-200/50 font-medium">
          No articles found. Try a different search or category.
        </p>
      )}
    </div>
  );
}
