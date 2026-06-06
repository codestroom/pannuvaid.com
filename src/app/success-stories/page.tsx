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
                <div className="glass-card h-full overflow-hidden p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand-600">
                      {s.condition}
                    </span>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
                      {s.duration}
                    </span>
                  </div>
                  <div className="mt-5 space-y-4">
                    <div className="rounded-2xl bg-earth-50/70 p-4 dark:bg-earth-900/20">
                      <p className="text-xs font-semibold uppercase tracking-wide text-earth-600">
                        Before
                      </p>
                      <p className="mt-1 text-sm text-brand-800/70 dark:text-brand-200/60">
                        {s.before}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-brand-50/70 p-4 dark:bg-brand-950/30">
                      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-600">
                        <FiCheckCircle /> After
                      </p>
                      <p className="mt-1 text-sm">{s.after}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm font-semibold">
                    — {s.name}, {s.age} yrs
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="section bg-brand-50/40 dark:bg-[#0a130a]">
        <div className="container-px">
          <SectionHeading
            eyebrow="Video Testimonials"
            title="Hear It From Our Patients"
            description="Watch patients share their healing experiences in their own words."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i}>
                <div className="group relative aspect-video overflow-hidden rounded-3xl shadow-soft">
                  <Image
                    src={galleryImages[i % galleryImages.length]}
                    alt={`${t.name} video testimonial`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-brand-700 transition group-hover:scale-110">
                      <FiPlay size={26} className="ml-1" />
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-white">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs opacity-80">{t.treatment} Recovery</p>
                  </div>
                </div>
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
          <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i % 3}>
                <div className="glass-card mb-6 break-inside-avoid p-6">
                  <Stars count={t.rating} />
                  <p className="mt-3 text-sm text-brand-800/75 dark:text-brand-200/65">
                    “{t.quote}”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-sm font-semibold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-brand-800/60 dark:text-brand-200/50">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
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
