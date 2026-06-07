import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiAlertTriangle, FiCheck, FiShoppingBag, FiInfo } from "react-icons/fi";
import { FaWhatsapp, FaInfoCircle } from "react-icons/fa";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { getProduct, products } from "@/lib/products";
import { site } from "@/lib/site";
import { OrderForm } from "./OrderForm";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.title} — Ayurvedic Formulations | Pannu Vaid`,
    description: p.desc,
    alternates: { canonical: `/products/${p.slug}` },
  };
}

export default async function ProductDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const p = getProduct(params.slug);
  if (!p) notFound();

  // Related products (excluding current one)
  const related = products.filter((item) => item.slug !== p.slug).slice(0, 3);

  return (
    <>
      <div className="bg-brand-50/20 dark:bg-black/20 py-4 border-b border-brand-100/30 dark:border-brand-950/20">
        <div className="container-px flex items-center justify-between text-xs sm:text-sm font-semibold">
          <Link href="/#products" className="inline-flex items-center gap-2 text-brand-850 hover:text-brand-650 dark:text-brand-200 dark:hover:text-brand-400 transition-colors">
            <FiArrowLeft /> Back to Apothecary
          </Link>
          <div className="flex gap-2 text-brand-800/40 dark:text-brand-250/20">
            <span>Shop</span>
            <span>/</span>
            <span className="text-brand-950 dark:text-brand-50">{p.title}</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Column - Image & Precautions */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <TiltCard
                  className="rounded-[2.5rem] bg-neutral-50 dark:bg-neutral-900/40 border border-white/20 dark:border-white/5 shadow-2xl p-8 flex items-center justify-center overflow-hidden relative aspect-square"
                  glowColor="rgba(79, 158, 40, 0.15)"
                >
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:bg-brand-950/80 dark:text-brand-350 border border-brand-100">
                      {p.badge}
                    </span>
                  </div>

                  {/* Image Pedestal Glow */}
                  <div className="absolute bottom-10 w-2/3 h-6 bg-black/5 dark:bg-black/25 rounded-full filter blur-lg" />
                  
                  <div className="relative w-full h-full flex items-center justify-center" style={{ transform: "translateZ(20px)" }}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      priority
                      className="object-contain p-4 drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
                    />
                  </div>
                </TiltCard>
              </Reveal>

              {/* Warning/Precautions */}
              <Reveal delay={1}>
                <div className="rounded-3xl border border-amber-500/30 bg-amber-500/5 dark:border-amber-500/20 p-6 flex gap-4 items-start">
                  <FiAlertTriangle className="text-amber-600 dark:text-amber-400 text-2xl shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-extrabold text-amber-950 dark:text-amber-300 uppercase tracking-wider">Precautions & Storage</h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-brand-850 dark:text-brand-200/70 leading-relaxed">
                      {p.warnings}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column - Product details & WhatsApp Checkout */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal>
                <div className="space-y-3">
                  <span className="rounded-full bg-brand-gradient/10 border border-brand-500/20 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-brand-700 dark:text-brand-350">
                    🌿 Authentic formulation
                  </span>
                  <h1 className="font-display text-3xl sm:text-4.5xl font-black text-brand-950 dark:text-brand-50 tracking-tight leading-none mt-2">
                    {p.title}
                  </h1>
                  <p className="text-base sm:text-lg font-bold text-brand-650 dark:text-brand-400">
                    {p.subTitle}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={1}>
                <div className="rounded-3xl bg-brand-50/20 dark:bg-white/[0.02] border border-brand-100/35 dark:border-white/5 p-4 sm:p-5">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-800/40 dark:text-brand-250/30 block">Package Size</span>
                    <span className="text-2xl font-black text-brand-950 dark:text-brand-50 mt-1 block">{p.size}</span>
                  </div>
                </div>
              </Reveal>

              {/* Descriptions & Benefits */}
              <Reveal delay={2}>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-brand-950 dark:text-brand-50 border-b border-brand-100/30 dark:border-brand-900/20 pb-2">Description</h3>
                  <p className="text-sm sm:text-base text-brand-850 dark:text-brand-200/70 leading-relaxed">
                    {p.longDesc}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={3}>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-brand-950 dark:text-brand-50 border-b border-brand-100/30 dark:border-brand-900/20 pb-2">Key Benefits</h3>
                  <ul className="grid gap-3 sm:grid-cols-1">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex gap-3 text-sm sm:text-base leading-relaxed text-brand-850 dark:text-brand-200/75">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-600 border border-brand-200 dark:border-brand-900">
                          <FiCheck className="text-xs" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Dosage Instructions */}
              <Reveal delay={4}>
                <div className="rounded-3xl border border-brand-200/60 bg-brand-50/40 dark:border-brand-900/40 dark:bg-[#0c160c]/40 p-6">
                  <h4 className="text-xs font-black uppercase tracking-widest text-brand-800/60 dark:text-brand-300 flex items-center gap-2">
                    <FaInfoCircle className="text-brand-600" /> Usage & Dosage Directions
                  </h4>
                  <p className="mt-2.5 text-sm sm:text-base font-semibold text-brand-950 dark:text-brand-50 leading-relaxed">
                    {p.instructions}
                  </p>
                </div>
              </Reveal>

              {/* Ingredients Table */}
              <Reveal delay={5}>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-brand-950 dark:text-brand-50 border-b border-brand-100/30 dark:border-brand-900/20 pb-2">Herbal Composition</h3>
                  <div className="overflow-x-auto rounded-2xl border border-brand-100/40 dark:border-brand-900/30">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-brand-50/30 dark:bg-white/[0.01] border-b border-brand-100/40 dark:border-brand-900/30">
                          <th className="p-3 sm:p-4 font-bold text-brand-950 dark:text-brand-50">Botanical Ingredient</th>
                          <th className="p-3 sm:p-4 font-bold text-brand-950 dark:text-brand-50 text-right">Ratio</th>
                          <th className="p-3 sm:p-4 font-bold text-brand-950 dark:text-brand-50">Primary Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brand-100/20 dark:divide-brand-900/20">
                        {p.ingredients.map((ing) => (
                          <tr key={ing.name} className="hover:bg-brand-50/10 dark:hover:bg-white/[0.01] transition-colors">
                            <td className="p-3 sm:p-4 font-medium text-brand-900 dark:text-brand-100">{ing.name}</td>
                            <td className="p-3 sm:p-4 text-right font-bold text-brand-950 dark:text-brand-50">{ing.proportion}</td>
                            <td className="p-3 sm:p-4 text-brand-850 dark:text-brand-200/70">{ing.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Reveal>

              {/* Order form card integration */}
              <Reveal delay={6}>
                <div className="rounded-3xl border border-brand-500/30 bg-brand-500/[0.02] p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold font-display text-brand-950 dark:text-brand-50">Place Your Order Directly</h3>
                    <p className="text-xs text-brand-850 dark:text-brand-200/50 mt-1">
                      Deliveries are shipped securely across India. Complete details below to initiate your order on WhatsApp.
                    </p>
                  </div>
                  <OrderForm product={p} />
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* Related Products Showcase */}
      <section className="section bg-brand-50/15 dark:bg-[#070c07]/30 border-t border-brand-100/20 dark:border-brand-950/20">
        <div className="container-px">
          <SectionHeading
            eyebrow="Related Apothecary"
            title="Explore Other Ayurvedic Remedies"
            description="Explore our complementary organic products designed to promote complete internal balance."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {related.map((item, idx) => (
              <Reveal key={item.id} delay={idx}>
                <TiltCard
                  className="group rounded-3xl bg-white dark:bg-white/[0.03] shadow-soft border border-white/20 dark:border-white/5 overflow-hidden flex flex-col justify-between"
                  glowColor="rgba(205, 198, 40, 0.12)"
                >
                  <div>
                    <div className="relative aspect-[4/3] bg-neutral-50 dark:bg-neutral-900/40 p-4 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <h4 className="font-display text-base font-bold text-brand-950 dark:text-brand-50 group-hover:text-brand-650 dark:group-hover:text-brand-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-brand-850 dark:text-brand-200/70 line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-brand-100/20 dark:border-brand-900/10">
                    <span className="text-xs font-bold text-brand-800/50 dark:text-brand-200/40">{item.size}</span>
                    <Link
                      href={`/products/${item.slug}`}
                      className="text-xs font-bold text-brand-650 dark:text-brand-400 hover:underline inline-flex items-center gap-1"
                    >
                      View Details <FiArrowLeft className="rotate-180" />
                    </Link>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
