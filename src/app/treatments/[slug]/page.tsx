import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiActivity, FiAlertCircle, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Accordion } from "@/components/Accordion";
import { ConsultationForm } from "@/components/ConsultationForm";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { treatments, getTreatment } from "@/lib/treatments";
import { treatmentImage } from "@/lib/images";
import { TiltCard } from "@/components/TiltCard";
import { CTABand } from "@/components/CTABand";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};
  return {
    title: `${t.title} — Ayurvedic Treatment in Punjab`,
    description: `${t.short} Discover Pannu Vaid's natural, root-cause Ayurvedic approach to ${t.title.toLowerCase()} in Samrala, Punjab.`,
    alternates: { canonical: `/treatments/${t.slug}` },
  };
}

export default async function TreatmentDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  const related = treatments.filter((x) => x.slug !== t.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={faqSchema(t.faqs)} />
      <PageHero
        eyebrow="Ayurvedic Treatment"
        title={t.title}
        description={t.short}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments" },
          { label: t.title },
        ]}
      />

      <section className="section pt-10">
        <div className="container-px grid gap-12 lg:grid-cols-[1fr_380px]">
          <div className="space-y-12">
            {/* Overview */}
            <Reveal>
              <TiltCard
                className="rounded-3xl bg-white dark:bg-white/[0.03] shadow-soft overflow-hidden"
                glowColor="rgba(79, 158, 40, 0.15)"
              >
                <div className="relative aspect-[21/9] w-full" style={{ transform: "translateZ(10px)" }}>
                  <Image
                    src={treatmentImage(t.slug)}
                    alt={`${t.title} Ayurvedic treatment at Pannu Vaid`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                    <t.icon size={24} />
                  </span>
                </div>
                <div className="p-8" style={{ transform: "translateZ(20px)" }}>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-brand-950 dark:text-brand-50">Overview</h2>
                  <p className="mt-4 text-brand-850 dark:text-brand-200/70 leading-relaxed text-base">
                    {t.overview}
                  </p>
                </div>
              </TiltCard>
            </Reveal>

            {/* Symptoms & Causes */}
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <TiltCard
                  className="h-full rounded-3xl bg-white dark:bg-white/[0.03] shadow-soft"
                  glowColor="rgba(205, 198, 40, 0.15)"
                >
                  <div className="p-7 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-brand-950 dark:text-brand-50" style={{ transform: "translateZ(15px)" }}>
                        <FiActivity className="text-brand-600 dark:text-brand-400" /> Common Symptoms
                      </h3>
                      <ul className="mt-5 space-y-3" style={{ transform: "translateZ(5px)" }}>
                        {t.symptoms.map((s) => (
                          <li key={s} className="flex gap-2.5 text-sm text-brand-800/80 dark:text-brand-200/70 leading-relaxed">
                            <FiAlertCircle className="mt-1 shrink-0 text-gold-500" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
              
              <Reveal delay={1}>
                <TiltCard
                  className="h-full rounded-3xl bg-white dark:bg-white/[0.03] shadow-soft"
                  glowColor="rgba(79, 158, 40, 0.15)"
                >
                  <div className="p-7 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-brand-950 dark:text-brand-50" style={{ transform: "translateZ(15px)" }}>
                        <FaLeaf className="text-brand-600 dark:text-brand-400" /> Causes
                      </h3>
                      <ul className="mt-5 space-y-3" style={{ transform: "translateZ(5px)" }}>
                        {t.causes.map((c) => (
                          <li key={c} className="flex gap-2.5 text-sm text-brand-800/80 dark:text-brand-200/70 leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>

            {/* Approach */}
            <Reveal>
              <div className="rounded-[2rem] bg-brand-gradient p-8 text-white shadow-2xl relative overflow-hidden border border-white/10">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-xl" />
                <h3 className="font-display text-2xl font-bold tracking-tight relative z-10">
                  Our Ayurvedic Approach
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 relative z-10">
                  {t.approach.map((a) => (
                    <div
                      key={a}
                      className="flex items-start gap-3 rounded-2xl bg-white/10 p-5 text-sm leading-relaxed backdrop-blur border border-white/15 shadow-inner"
                    >
                      <FiCheckCircle className="mt-0.5 shrink-0 text-white" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Benefits */}
            <Reveal>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-brand-950 dark:text-brand-50">
                  Benefits of Treatment
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {t.benefits.map((b, idx) => (
                    <TiltCard
                      key={b}
                      className="rounded-2xl bg-white dark:bg-white/[0.03] shadow-soft"
                      glowColor="rgba(205, 198, 40, 0.12)"
                    >
                      <div className="flex items-center gap-3.5 p-5 text-sm font-semibold text-brand-850 dark:text-brand-200" style={{ transform: "translateZ(10px)" }}>
                        <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 shadow-sm border border-brand-100/50 dark:border-brand-900/50">
                          <FiCheckCircle className="shrink-0" />
                        </span>
                        <span>{b}</span>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* FAQ */}
            <div>
              <SectionHeading
                align="left"
                eyebrow="FAQ"
                title={`${t.title} — Your Questions Answered`}
              />
              <div className="mt-8">
                <Accordion items={t.faqs} />
              </div>
            </div>
          </div>

          {/* Sticky form */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <ConsultationForm />
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-brand-50/40 dark:bg-[#0a130a] relative overflow-hidden">
        <div className="container-px">
          <SectionHeading eyebrow="Explore More" title="Related Treatments" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((r, rIdx) => (
              <Reveal key={r.slug} delay={rIdx}>
                <TiltCard
                  className="rounded-2xl bg-white dark:bg-white/[0.03] shadow-soft h-full"
                  glowColor="rgba(79, 158, 40, 0.12)"
                >
                  <Link
                    href={`/treatments/${r.slug}`}
                    className="group flex items-center gap-4 p-5 h-full"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white shadow-soft" style={{ transform: "translateZ(15px)" }}>
                      <r.icon size={20} />
                    </span>
                    <span className="flex-1 font-bold text-sm text-brand-950 dark:text-brand-50 transition-colors duration-300 group-hover:text-brand-600 dark:group-hover:text-brand-400" style={{ transform: "translateZ(10px)" }}>
                      {r.title}
                    </span>
                    <FiArrowRight className="text-brand-600 transition group-hover:translate-x-1" style={{ transform: "translateZ(5px)" }} />
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
