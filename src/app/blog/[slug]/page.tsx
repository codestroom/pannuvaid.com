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
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-800/60 dark:text-brand-200/50">
            <span className="flex items-center gap-2">
              <FiUser /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <FiClock /> {post.readTime}
            </span>
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl shadow-soft">
            <Image
              src={blogImage(post.slug)}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg mt-10 max-w-none">
            {post.content.map((para, i) => (
              <Reveal key={i} delay={i % 3}>
                <p className="mb-5 leading-relaxed text-brand-800/80 dark:text-brand-200/70">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-brand-100/70 bg-brand-50/40 p-6 dark:border-brand-900/60 dark:bg-[#0a130a]">
            <p className="text-sm text-brand-800/70 dark:text-brand-200/60">
              <strong>Disclaimer:</strong> This article is for educational
              purposes only and is not a substitute for professional medical
              advice. Always consult a qualified Ayurvedic practitioner before
              starting any treatment.
            </p>
          </div>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600"
          >
            <FiArrowLeft /> Back to all articles
          </Link>
        </div>
      </article>

      {/* Related posts */}
      <section className="section bg-brand-50/40 dark:bg-[#0a130a]">
        <div className="container-px">
          <h2 className="font-display text-2xl font-semibold">Related Articles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group glass-card flex h-full flex-col p-6 transition hover:-translate-y-1"
              >
                <span className="text-xs font-semibold text-brand-600">
                  {p.category}
                </span>
                <h3 className="mt-2 flex-1 font-display text-base font-semibold leading-snug">
                  {p.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Read <FiArrowRight className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
