"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { blogPosts, blogCategories } from "@/lib/content";
import { blogImage } from "@/lib/images";
import { formatDate } from "@/lib/utils";

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
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-full border border-brand-200 bg-white/60 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-brand-500 dark:border-brand-800 dark:bg-white/5"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {["All", ...blogCategories].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              category === c
                ? "bg-brand-gradient text-white"
                : "border border-brand-200 text-brand-700 hover:bg-brand-50 dark:border-brand-800 dark:text-brand-200 dark:hover:bg-white/5"
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
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100/70 bg-white shadow-soft transition hover:-translate-y-1.5 hover:shadow-lg dark:border-brand-900/60 dark:bg-white/[0.03]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={blogImage(post.slug)}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs text-brand-800/60 dark:text-brand-200/50">
                  {formatDate(post.date)} • {post.readTime}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-brand-800/70 dark:text-brand-200/60">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Read article
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-brand-800/60 dark:text-brand-200/50">
          No articles found. Try a different search or category.
        </p>
      )}
    </div>
  );
}
