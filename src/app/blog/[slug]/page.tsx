import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight, FiCalendar, FiClock, FiUser } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { blogPosts, getPost } from "@/lib/content";
import { blogImage } from "@/lib/images";
import { formatDate } from "@/lib/utils";
import { TiltCard } from "@/components/TiltCard";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(blogPosts.filter((p) => p.slug !== post.slug))
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
      />

      <article className="section pt-8">
        <div className="container-px mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-brand-800/70 dark:text-brand-200/50">
            <span className="flex items-center gap-2">
              <FiUser className="text-brand-600 dark:text-brand-400" /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar className="text-brand-600 dark:text-brand-400" /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <FiClock className="text-brand-600 dark:text-brand-400" /> {post.readTime}
            </span>
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl p-1 bg-white dark:bg-white/[0.03] border border-white/20 dark:border-white/5">
            <div className="relative w-full h-full rounded-[1.4rem] overflow-hidden">
              <Image
                src={blogImage(post.slug)}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg mt-10 max-w-none text-brand-900 dark:text-brand-50">
            {post.content.map((para, i) => (
              <Reveal key={i} delay={i % 3}>
                <p className="mb-6 leading-relaxed text-brand-850 dark:text-brand-100 text-base sm:text-lg">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-gold-200/60 bg-gold-50/20 p-6 dark:border-gold-900/40 dark:bg-gold-950/10 shadow-inner">
            <p className="text-sm text-brand-800/80 dark:text-brand-200/70 leading-relaxed">
              <strong>Disclaimer:</strong> This article is for educational
              purposes only and is not a substitute for professional medical
              advice. Always consult a qualified Ayurvedic practitioner before
              starting any treatment.
            </p>
          </div>

          <div className="mt-10 border-t border-brand-100/65 dark:border-brand-900/65 pt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline group"
            >
              <FiArrowLeft className="transition-transform group-hover:-translate-x-1" /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="section bg-brand-50/40 dark:bg-[#0a130a] relative overflow-hidden">
        <div className="container-px">
          <h2 className="font-display text-2xl font-bold tracking-tight text-brand-950 dark:text-brand-50">Related Articles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((p, pIdx) => (
              <Reveal key={p.slug} delay={pIdx}>
                <TiltCard
                  className="rounded-2xl bg-white dark:bg-white/[0.03] shadow-soft h-full"
                  glowColor="rgba(205, 198, 40, 0.12)"
                >
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col p-6 justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-brand-650 dark:text-brand-400 uppercase tracking-wider" style={{ transform: "translateZ(10px)" }}>
                        {p.category}
                      </span>
                      <h3 className="mt-3 font-display text-base font-bold tracking-tight leading-snug text-brand-950 dark:text-brand-50 transition-colors duration-300 group-hover:text-brand-600 dark:group-hover:text-brand-400" style={{ transform: "translateZ(15px)" }}>
                        {p.title}
                      </h3>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 group-hover:underline" style={{ transform: "translateZ(5px)" }}>
                      Read <FiArrowRight className="transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
