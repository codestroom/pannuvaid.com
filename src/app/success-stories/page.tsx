import type { Metadata } from "next";
import Image from "next/image";
import { FiCheckCircle, FiPlay } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { galleryImages } from "@/lib/images";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Stars } from "@/components/Stars";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { CTABand } from "@/components/CTABand";
import { successStories, testimonials } from "@/lib/content";
import { TiltCard } from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Success Stories & Patient Reviews — Real Ayurvedic Recoveries",
  description:
    "Read real patient success stories, recovery journeys, and reviews from people healed at Pannu Vaid Ayurvedic clinic in Samrala, Punjab.",
  alternates: { canonical: "/success-stories" },
};

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="Real Patients, Real Recoveries"
        description="Genuine before-and-after journeys and reviews from patients who reclaimed their health with Pannu Vaid."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Success Stories" }]}
      />

      {/* Before & after cases */}
      <section className="section pt-10">
        <div className="container-px">
          <SectionHeading
            eyebrow="Before & After"
            title="Recovery Journeys"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {successStories.map((s, i) => (
              <Reveal key={s.name} delay={i}>
                <TiltCard
                  className="h-full rounded-3xl bg-white dark:bg-white/[0.03] shadow-soft"
                  glowColor="rgba(154, 108, 60, 0.15)"
                >
                  <div className="p-7 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between" style={{ transform: "translateZ(10px)" }}>
                        <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                          {s.condition}
                        </span>
                        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
                          {s.duration}
                        </span>
                      </div>
                      <div className="mt-5 space-y-4" style={{ transform: "translateZ(15px)" }}>
                        <div className="rounded-2xl bg-earth-50/70 p-4 dark:bg-earth-900/20 border border-earth-100/50 dark:border-earth-900/50">
                          <p className="text-xs font-bold uppercase tracking-wider text-earth-600 dark:text-earth-450">
                            Before
                          </p>
                          <p className="mt-1 text-sm text-brand-800/80 dark:text-brand-200/70">
                            {s.before}
                          </p>
                        </div>
                        <div className="rounded-2xl bg-brand-50/70 p-4 dark:bg-brand-950/30 border border-brand-100/50 dark:border-brand-900/50">
                          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                            <FiCheckCircle /> After
                          </p>
                          <p className="mt-1 text-sm text-brand-950 dark:text-brand-50">{s.after}</p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-5 text-sm font-semibold text-brand-950 dark:text-brand-50 border-t border-brand-100/50 dark:border-brand-900/50 pt-3" style={{ transform: "translateZ(5px)" }}>
                      — {s.name}, {s.age} yrs
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="section bg-brand-50/40 dark:bg-[#0a130a] relative overflow-hidden">
        <div className="container-px">
          <SectionHeading
            eyebrow="Video Testimonials"
            title="Hear It From Our Patients"
            description="Watch patients share their healing experiences in their own words."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i}>
                <TiltCard
                  className="rounded-3xl shadow-soft overflow-hidden aspect-video bg-white dark:bg-white/[0.03]"
                  glowColor="rgba(79, 158, 40, 0.2)"
                >
                  <div className="group relative w-full h-full">
                    <Image
                      src={galleryImages[i % galleryImages.length]}
                      alt={`${t.name} video testimonial`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute inset-0 grid place-items-center" style={{ transform: "translateZ(20px)" }}>
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-brand-700 shadow-lg transition group-hover:scale-110">
                        <FiPlay size={26} className="ml-1 fill-brand-700" />
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white" style={{ transform: "translateZ(10px)" }}>
                      <p className="font-bold text-base">{t.name}</p>
                      <p className="text-xs opacity-90">{t.treatment} Recovery</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="What Our Patients Say"
          />
          <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i % 3} className="break-inside-avoid">
                <TiltCard
                  className="rounded-3xl bg-white dark:bg-white/[0.03] shadow-soft p-6 border border-white/20 dark:border-white/5"
                  glowColor="rgba(205, 198, 40, 0.15)"
                >
                  <div style={{ transform: "translateZ(10px)" }}>
                    <Stars count={t.rating} />
                    <p className="mt-4 text-sm text-brand-850 dark:text-brand-200/70 leading-relaxed italic">
                      “{t.quote}”
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-brand-100/50 dark:border-brand-900/50 pt-4" style={{ transform: "translateZ(15px)" }}>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white shadow-soft">
                        {t.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-brand-950 dark:text-brand-50">{t.name}</p>
                        <p className="text-xs text-brand-800/60 dark:text-brand-200/50">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="section bg-brand-50/40 dark:bg-[#0a130a]">
        <div className="container-px">
          <TestimonialCarousel />
        </div>
      </section>

      <CTABand />
    </>
  );
}
