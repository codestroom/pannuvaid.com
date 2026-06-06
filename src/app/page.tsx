import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { FaAward, FaUserMd, FaLeaf, FaHandHoldingHeart } from "react-icons/fa";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { TreatmentCard } from "@/components/TreatmentCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { CTABand } from "@/components/CTABand";
import { stats } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { successStories } from "@/lib/content";

const whyChoose = [
  { icon: FaUserMd, title: "Expert Practitioners", desc: "Decades of authentic Ayurvedic experience guiding every treatment plan." },
  { icon: FaLeaf, title: "100% Natural Herbs", desc: "Pure, quality-controlled herbal formulations with zero harmful side effects." },
  { icon: FaHandHoldingHeart, title: "Personalised Care", desc: "Every protocol is tailored to your unique constitution and condition." },
  { icon: FaAward, title: "Proven Results", desc: "Thousands of patients healed across Punjab and beyond." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stats */}
      <section className="relative -mt-6">
        <div className="container-px">
          <Reveal>
            <div className="glass-card grid grid-cols-2 gap-6 px-6 py-10 sm:px-12 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-3xl font-bold gradient-text sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-brand-800/70 dark:text-brand-200/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Treatments */}
      <section className="section" id="treatments">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Specialities"
            title="Ayurvedic Treatments That Heal at the Root"
            description="From chronic joint pain to digestive health, we offer focused, time-tested Ayurvedic care for a wide range of conditions."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.slice(0, 6).map((t, i) => (
              <TreatmentCard key={t.slug} slug={t.slug} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/treatments" className="btn-primary">
              View All Treatments <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section bg-brand-50/40 dark:bg-[#0a130a]">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Choose Pannu Vaid"
              title="A Trusted Name in Ayurvedic Healing"
              description="We blend ancient Ayurvedic wisdom with a compassionate, modern patient experience — earning the trust of families across Punjab."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                About Our Clinic
              </Link>
              <Link href="/success-stories" className="btn-outline">
                See Patient Results
              </Link>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i}>
                <div className="glass-card h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white">
                    <item.icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-800/70 dark:text-brand-200/60">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories highlight */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Patient Success Stories"
            title="Real People, Real Recovery"
            description="Before-and-after journeys from patients who reclaimed their health with Pannu Vaid."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {successStories.map((s, i) => (
              <Reveal key={s.name} delay={i}>
                <div className="glass-card h-full p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand-600">
                      {s.condition}
                    </span>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
                      {s.duration}
                    </span>
                  </div>
                  <div className="mt-5 space-y-3 text-sm">
                    <p className="flex gap-2 text-brand-800/70 dark:text-brand-200/60">
                      <span className="font-semibold text-earth-600">Before:</span>
                      {s.before}
                    </p>
                    <p className="flex gap-2">
                      <FiCheckCircle className="mt-0.5 shrink-0 text-brand-600" />
                      <span>{s.after}</span>
                    </p>
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

      {/* Testimonials */}
      <section className="section bg-brand-50/40 dark:bg-[#0a130a]">
        <div className="container-px">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved & Trusted by Our Patients"
            description="Hear directly from people whose lives changed through natural Ayurvedic care."
          />
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
