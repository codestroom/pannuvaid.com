import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiChevronRight } from "react-icons/fi";
import { FaLeaf, FaSeedling, FaAward, FaUserMd, FaHandHoldingHeart } from "react-icons/fa";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { TreatmentCard } from "@/components/TreatmentCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { VideoFeedbackGallery } from "@/components/VideoFeedbackGallery";
import { CTABand } from "@/components/CTABand";
import { stats } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { successStories } from "@/lib/content";
import { TiltCard } from "@/components/TiltCard";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FeaturedRemedy } from "@/components/FeaturedRemedy";
import { HealingJourney } from "@/components/HealingJourney";

export const metadata: Metadata = {
  title: "Pannu Vaid — Authentic Ayurvedic Clinic in Samrala, Punjab",
  description:
    "Welcome to Pannu Vaid, a trusted name in Ayurvedic healthcare in Samrala, Punjab. Specialised, drug-free treatments for joint pain, arthritis, and nerve disorders.",
  alternates: { canonical: "/" },
};

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

      {/* Stats Counter - Upgraded to a floating glass dashboard */}
      <section className="relative z-30 -mt-16 sm:-mt-20 px-4">
        <div className="container-px max-w-5xl mx-auto">
          <Reveal>
            <div className="rounded-[2.5rem] bg-white/70 dark:bg-black/60 shadow-2xl backdrop-blur-xl border border-white/50 dark:border-white/10 p-2">
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4 rounded-[2.2rem] overflow-hidden bg-brand-50/30 dark:bg-[#0c160c]/40 p-4 divide-y md:divide-y-0 md:divide-x divide-brand-100/40 dark:divide-brand-900/40">
                {stats.map((s, idx) => (
                  <div key={s.label} className="p-4 sm:p-6 text-center flex flex-col justify-center items-center">
                    <p className="font-display text-3xl sm:text-4.5xl font-black gradient-text leading-none">
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-850 dark:text-brand-300">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductShowcase />

      {/* Treatments / Specialties with soft organic mesh gradients */}
      <section className="section relative overflow-hidden" id="treatments">
        {/* Soft glowing mesh background */}
        <div className="absolute top-1/4 left-1/10 -z-10 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 -z-10 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />
        
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Specialities"
            title="Ayurvedic Treatments That Heal at the Root"
            description="From chronic joint pain to digestive health, we offer focused, time-tested Ayurvedic care for a wide range of conditions."
          />

          {/* Featured liver syrup spotlight */}
          <div className="mt-12">
            <FeaturedRemedy slug="liver-care-tonic" />
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.slice(0, 6).map((t, i) => (
              <TreatmentCard key={t.slug} slug={t.slug} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Reveal>
              <Link href="/treatments" className="btn bg-brand-gradient text-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-bold px-8 py-4 inline-flex items-center gap-2 group shadow-lg">
                View All Treatments
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Staggered layout with high contrast glowing focal card */}
      <section className="section bg-brand-50/35 dark:bg-[#081008]/40 border-y border-brand-100/30 dark:border-brand-950/20 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 h-80 w-80 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
        
        <div className="container-px grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Why Choose Pannu Vaid"
              title="A Trusted Name in Ayurvedic Healing"
              description="We blend ancient Ayurvedic wisdom with a compassionate, modern patient experience — earning the trust of families across Punjab."
            />
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/about" className="btn bg-brand-800 text-white hover:bg-brand-900 shadow-md hover:-translate-y-0.5 transition-all duration-300 font-bold px-6 py-3.5 inline-flex items-center gap-1.5 group">
                About Our Clinic <FiChevronRight />
              </Link>
              <Link href="/success-stories" className="btn border border-brand-200 text-brand-850 hover:bg-brand-50/80 transition-all duration-300 font-bold px-6 py-3.5 dark:border-brand-900 dark:text-brand-100 dark:hover:bg-white/5">
                See Patient Results
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i}>
                <TiltCard
                  className={`h-full rounded-3xl bg-white dark:bg-[#0c160c]/60 shadow-soft border ${
                    i === 0 
                      ? "border-brand-500/40 dark:border-brand-500/30 ring-1 ring-brand-500/10" 
                      : "border-white/20 dark:border-white/5"
                  }`}
                  glowColor={i === 0 ? "rgba(79, 158, 40, 0.25)" : "rgba(205, 198, 40, 0.15)"}
                >
                  <div className="p-7 h-full flex flex-col justify-between">
                    <div>
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft" style={{ transform: "translateZ(15px)" }}>
                        <item.icon size={20} />
                      </span>
                      <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-brand-950 dark:text-brand-50" style={{ transform: "translateZ(10px)" }}>
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-brand-850 dark:text-brand-200/70 leading-relaxed" style={{ transform: "translateZ(5px)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Healing Journey - Animated scroll-driven timeline */}
      <section className="section relative overflow-hidden">
        <div className="absolute right-1/4 top-1/4 -z-10 h-80 w-80 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />

        <div className="container-px">
          <SectionHeading
            eyebrow="Your Path to Wellness"
            title="The Pannu Vaid Healing Journey"
            description="From your first conversation to lasting recovery — a clear, caring path rooted in authentic Ayurveda."
          />
          <HealingJourney />
        </div>
      </section>

      {/* Success Stories Section - Polaroid Journal Style */}
      <section className="section relative overflow-hidden">
        <div className="absolute right-0 bottom-10 -z-10 h-72 w-72 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />
        
        <div className="container-px">
          <SectionHeading
            eyebrow="Patient Success Stories"
            title="Real People, Real Recovery"
            description="Before-and-after journeys from patients who reclaimed their health with Pannu Vaid."
          />
          
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {successStories.map((s, i) => (
              <Reveal key={s.name} delay={i}>
                <TiltCard
                  className="h-full rounded-[2rem] bg-white dark:bg-white/[0.03] shadow-soft border border-white/20 dark:border-white/5 overflow-hidden"
                  glowColor="rgba(154, 108, 60, 0.15)"
                >
                  <div className="p-7 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between" style={{ transform: "translateZ(10px)" }}>
                        <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:text-brand-450">
                          {s.condition}
                        </span>
                        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 dark:bg-brand-950/60 dark:text-brand-350 border border-brand-100/30 dark:border-brand-900/30">
                          {s.duration}
                        </span>
                      </div>
                      
                      <div className="mt-6 space-y-4" style={{ transform: "translateZ(15px)" }}>
                        <div className="rounded-2xl bg-earth-50/50 p-4 dark:bg-earth-950/20 border border-earth-100/30 dark:border-earth-900/30">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-earth-600 dark:text-earth-450 block">Before</span>
                          <p className="mt-1 text-sm text-brand-850 dark:text-brand-200/70 leading-relaxed font-medium">
                            {s.before}
                          </p>
                        </div>
                        <div className="rounded-2xl bg-brand-50/50 p-4 dark:bg-brand-950/30 border border-brand-100/30 dark:border-brand-900/30">
                          <span className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                            <FiCheckCircle className="text-brand-500" /> After
                          </span>
                          <p className="mt-1 text-sm text-brand-950 dark:text-brand-50 leading-relaxed font-bold">
                            {s.after}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="mt-6 text-sm font-bold text-brand-950 dark:text-brand-50 border-t border-brand-100/50 dark:border-brand-900/50 pt-4" style={{ transform: "translateZ(5px)" }}>
                      — {s.name}, {s.age} yrs
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Feedback - Real patient reels from the clinic */}
      <section className="section relative">
        {/* Decorative blobs kept in their own clipped layer so hover-zoom isn't cut off */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute right-1/4 top-10 h-80 w-80 rounded-full bg-brand-500/5 blur-3xl" />
          <div className="absolute left-1/4 bottom-10 h-72 w-72 rounded-full bg-gold-400/5 blur-3xl" />
        </div>

        <div className="container-px">
          <SectionHeading
            eyebrow="Video Feedback"
            title="Hear It Straight From Our Patients"
            description="Real, unscripted feedback from patients who found relief at Pannu Vaid. Tap any video to watch their story."
          />
          <div className="mt-12">
            <VideoFeedbackGallery />
          </div>
        </div>
      </section>

      {/* Testimonials - Wrapped in dark lush glass container */}
      <section className="section bg-brand-50/35 dark:bg-[#060c06] border-t border-brand-100/30 dark:border-brand-950/40 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-[100px] pointer-events-none" />
        
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
