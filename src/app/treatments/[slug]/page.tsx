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
              <div className="glass-card overflow-hidden">
                <div className="relative aspect-[21/9] w-full">
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
                <div className="p-8">
                  <h2 className="font-display text-2xl font-semibold">Overview</h2>
                  <p className="mt-3 text-brand-800/75 dark:text-brand-200/65">
                    {t.overview}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Symptoms & Causes */}
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="glass-card h-full p-7">
                  <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
                    <FiActivity className="text-brand-600" /> Common Symptoms
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {t.symptoms.map((s) => (
                      <li key={s} className="flex gap-2.5 text-sm">
                        <FiAlertCircle className="mt-0.5 shrink-0 text-gold-500" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={1}>
                <div className="glass-card h-full p-7">
                  <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
                    <FaLeaf className="text-brand-600" /> Causes
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {t.causes.map((c) => (
                      <li key={c} className="flex gap-2.5 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Approach */}
            <Reveal>
              <div className="rounded-3xl bg-brand-gradient p-8 text-white shadow-soft">
                <h3 className="font-display text-2xl font-semibold">
                  Our Ayurvedic Approach
                </h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {t.approach.map((a) => (
                    <div
                      key={a}
                      className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 text-sm backdrop-blur"
                    >
                      <FiCheckCircle className="mt-0.5 shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Benefits */}
            <Reveal>
              <div>
                <h3 className="font-display text-2xl font-semibold">
                  Benefits of Treatment
                </h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {t.benefits.map((b) => (
                    <div
                      key={b}
                      className="glass-card flex items-center gap-3 p-5 text-sm font-medium"
                    >
                      <FiCheckCircle className="shrink-0 text-brand-600" />
                      {b}
                    </div>
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
      <section className="section bg-brand-50/40 dark:bg-[#0a130a]">
        <div className="container-px">
          <SectionHeading eyebrow="Explore More" title="Related Treatments" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/treatments/${r.slug}`}
                className="group glass-card flex items-center gap-4 p-6 transition hover:-translate-y-1"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                  <r.icon size={20} />
                </span>
                <span className="flex-1 font-semibold">{r.title}</span>
                <FiArrowRight className="text-brand-600 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
