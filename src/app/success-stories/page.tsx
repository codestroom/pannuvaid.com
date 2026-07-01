"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheck, FiX, FiClock, FiActivity, FiArrowDown, FiShield, FiHeart } from "react-icons/fi";
import { FaLeaf, FaPlay } from "react-icons/fa";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Stars } from "@/components/Stars";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { CTABand } from "@/components/CTABand";
import { successStories, testimonials, videoFeedback } from "@/lib/content";
import { TiltCard } from "@/components/TiltCard";

// Detailed journey timeline data linked to success stories
const journeyDetails = [
  {
    name: "Balwinder S.",
    age: 62,
    condition: "Severe Osteoarthritis",
    duration: "3 Months Therapy",
    painBefore: 9,
    painAfter: 1,
    mobilityBefore: 20,
    mobilityAfter: 90,
    milestones: [
      {
        week: "Week 0",
        title: "Severe Joint Degradation",
        desc: "Constant bone-on-bone friction, knee swelling, unable to walk more than 50 steps without extreme agony. Dependent on daily ibuprofen.",
      },
      {
        week: "Week 6",
        title: "Cartilage & Lubrication Support",
        desc: "Began daily Shallaki & joint capsule extracts. Knee inflammation dropped by 50%. Morning stiffness began to clear within 20 minutes of waking.",
      },
      {
        week: "Week 12",
        title: "Active Pain-Free Living",
        desc: "Walks 3 km every morning around Samrala park. Painkillers completely stopped. Swelling resolved and joint range of motion fully restored.",
      },
    ],
  },
  {
    name: "Kamaljit K.",
    age: 48,
    condition: "Chronic Sciatica",
    duration: "10 Weeks Therapy",
    painBefore: 8,
    painAfter: 0,
    mobilityBefore: 15,
    mobilityAfter: 95,
    milestones: [
      {
        week: "Week 0",
        title: "Radiating Nerve Agony",
        desc: "Severe sciatic nerve compression radiating down left thigh. Unable to sit on a chair or stand in the kitchen for over 10 minutes.",
      },
      {
        week: "Week 4",
        title: "Nerve Calming & Nourishment",
        desc: "Prescribed targeted Rasna and Ashwagandha formulations to soothe nerve pathways. Radiation frequency reduced from constant to occasional.",
      },
      {
        week: "Week 10",
        title: "Complete Nerve Freedom",
        desc: "Zero pain or numbness. Back to sewing, driving, and managing household chores without physical discomfort.",
      },
    ],
  },
  {
    name: "Sukhwinder P.",
    age: 55,
    condition: "Cervical Spondylosis",
    duration: "8 Weeks Therapy",
    painBefore: 8,
    painAfter: 1,
    mobilityBefore: 30,
    mobilityAfter: 85,
    milestones: [
      {
        week: "Week 0",
        title: "Neck Rigidity & Headaches",
        desc: "Extremely stiff upper spine, shooting numbness in the right arm, and chronic stress headaches from compressed cervical discs.",
      },
      {
        week: "Week 3",
        title: "Spinal Decompression & Relief",
        desc: "Muscle spasms relaxed. Arm numbness disappeared. Headache frequency reduced to once per week.",
      },
      {
        week: "Week 8",
        title: "Restored Neck Flexion",
        desc: "Full neck rotation restored. Neck feels light and painless. No more headaches or arm tingling.",
      },
    ],
  },
];

export default function SuccessStoriesPage() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [activeJourney, setActiveJourney] = useState<number>(0);

  return (
    <>
      <PageHero
        eyebrow="Recovery Records"
        title="Verified Healing Journeys"
        description="Authentic case files and video documentation from patients who recovered through Pannu Vaid's treatments at our clinic."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Success Stories" }]}
      />

      {/* Video Testimony Player Section */}
      <section className="section bg-hero-radial pt-12 pb-20 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/3 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
        
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50/50 dark:bg-brand-950/60 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:text-brand-350 border border-brand-100/50 dark:border-brand-900/50 shadow-sm">
                <FaPlay className="text-brand-500" size={9} /> Patient Video Diaries
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight text-brand-950 dark:text-brand-50 sm:text-4xl md:text-[2.6rem] tracking-tight">
                Watch Real Pannu Vaid Clinic Recoveries
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-4 text-base sm:text-lg text-brand-800/70 dark:text-brand-200/60 leading-relaxed max-w-2xl mx-auto">
                Watch patient feedback videos recorded live at our Samrala clinic. Real people sharing their path to wellness.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videoFeedback.map((video, idx) => (
              <Reveal key={idx} delay={idx}>
                <TiltCard
                  className="rounded-[2rem] bg-white dark:bg-[#0c160c]/40 border border-white/20 dark:border-white/5 shadow-soft overflow-hidden h-[220px] relative group"
                  glowColor="rgba(79, 158, 40, 0.15)"
                >
                  {playingVideo === idx ? (
                    <div className="absolute inset-0 bg-black">
                      <video
                        src={video.src}
                        poster={video.poster}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div 
                      className="absolute inset-0 cursor-pointer"
                      onClick={() => setPlayingVideo(idx)}
                    >
                      {/* Video Poster Image placeholder fallback */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10" />
                      
                      {/* Placeholder background layout with gradient patterns */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-950/40 to-[#0c160c]">
                        <Image
                          src={video.poster || "/images/about-clinic.jpg"}
                          alt={video.label}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Play Button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <span className="relative h-14 w-14 rounded-full bg-brand-gradient text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <span className="absolute inset-0 rounded-full bg-brand-400/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                          <FaPlay className="relative text-sm ml-1" />
                        </span>
                      </div>

                      {/* Video labels */}
                      <div className="absolute bottom-5 left-5 right-5 z-20 text-white">
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur text-[10px] uppercase font-bold tracking-widest border border-white/10 mb-2">
                          {video.condition}
                        </span>
                        <h4 className="font-display text-base font-bold tracking-tight text-white leading-tight">{video.label}</h4>
                      </div>
                    </div>
                  )}
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Journey Timelines */}
      <section className="section bg-white dark:bg-[#070c07]/20 border-y border-brand-100/30 dark:border-brand-900/10">
        <div className="container-px">
          <SectionHeading
            eyebrow="Interactive Journey Map"
            title="The Healing Chronology"
            description="Toggle through patient stories to explore their week-by-week timeline of recovery."
          />

          {/* Toggle buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {journeyDetails.map((journey, idx) => (
              <button
                key={journey.name}
                onClick={() => setActiveJourney(idx)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border ${
                  activeJourney === idx
                    ? "bg-brand-gradient border-transparent text-white shadow-md shadow-brand-900/10"
                    : "border-brand-100 dark:border-brand-900 bg-brand-50/20 dark:bg-white/[0.02] text-brand-800 dark:text-brand-300 hover:bg-brand-50/50 dark:hover:bg-white/[0.05]"
                }`}
              >
                {journey.name} ({journey.condition})
              </button>
            ))}
          </div>

          {/* Selected Journey Display */}
          <div className="mt-12 max-w-5xl mx-auto">
            <Reveal key={activeJourney}>
              <div className="grid gap-10 lg:grid-cols-12 items-start bg-brand-50/15 dark:bg-[#0a110a]/40 border border-brand-100/35 dark:border-brand-900/30 rounded-[2.5rem] p-6 sm:p-10 shadow-soft">
                
                {/* Left Column: Progress Indicators */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-brand-100 dark:bg-brand-950/60 text-brand-655 text-sm">
                      <FiActivity />
                    </span>
                    <h3 className="font-display text-lg font-black text-brand-950 dark:text-brand-50">Clinical Metrics</h3>
                  </div>

                  <p className="text-xs text-brand-800/60 dark:text-brand-200/40 font-bold uppercase tracking-wider">
                    Patient Profile: {journeyDetails[activeJourney].age} Years Old • {journeyDetails[activeJourney].duration}
                  </p>

                  <div className="space-y-5">
                    {/* Pain scale: clear before vs after bars */}
                    <div className="space-y-2.5">
                      <div className="flex justify-between text-xs font-bold text-brand-900 dark:text-brand-200">
                        <span>Pain Level Scale</span>
                        <span>
                          <span className="text-rose-500 font-extrabold">{journeyDetails[activeJourney].painBefore}/10</span> ➜{" "}
                          <span className="text-brand-600 dark:text-brand-400 font-extrabold">{journeyDetails[activeJourney].painAfter}/10</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-12 shrink-0 text-[10px] font-black uppercase tracking-wider text-rose-500">Before</span>
                        <div className="h-2.5 flex-1 rounded-full bg-brand-100 dark:bg-brand-950/80 overflow-hidden">
                          <motion.div
                            key={`pain-before-${activeJourney}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${journeyDetails[activeJourney].painBefore * 10}%` }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-rose-400 to-rose-600"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-12 shrink-0 text-[10px] font-black uppercase tracking-wider text-brand-600 dark:text-brand-400">After</span>
                        <div className="h-2.5 flex-1 rounded-full bg-brand-100 dark:bg-brand-950/80 overflow-hidden">
                          <motion.div
                            key={`pain-after-${activeJourney}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.max(journeyDetails[activeJourney].painAfter * 10, 2)}%` }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                            className="h-full rounded-full bg-brand-gradient"
                          />
                        </div>
                      </div>
                      <p className="text-[10px] text-brand-800/50 dark:text-brand-200/30 font-semibold leading-normal">
                        Self-reported pain before therapy vs. after completing the protocol.
                      </p>
                    </div>

                    {/* Mobility index: before vs after bars */}
                    <div className="space-y-2.5">
                      <div className="flex justify-between text-xs font-bold text-brand-900 dark:text-brand-200">
                        <span>Mobility & Strength Index</span>
                        <span>
                          <span className="text-rose-500">{journeyDetails[activeJourney].mobilityBefore}%</span> ➜{" "}
                          <span className="text-brand-600 dark:text-brand-400">{journeyDetails[activeJourney].mobilityAfter}%</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-12 shrink-0 text-[10px] font-black uppercase tracking-wider text-rose-500">Before</span>
                        <div className="h-2.5 flex-1 rounded-full bg-brand-100 dark:bg-brand-950/80 overflow-hidden">
                          <motion.div
                            key={`mob-before-${activeJourney}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${journeyDetails[activeJourney].mobilityBefore}%` }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-rose-400 to-rose-600"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-12 shrink-0 text-[10px] font-black uppercase tracking-wider text-brand-600 dark:text-brand-400">After</span>
                        <div className="h-2.5 flex-1 rounded-full bg-brand-100 dark:bg-brand-950/80 overflow-hidden">
                          <motion.div
                            key={`mob-after-${activeJourney}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${journeyDetails[activeJourney].mobilityAfter}%` }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                            className="h-full rounded-full bg-brand-gradient"
                          />
                        </div>
                      </div>
                      <p className="text-[10px] text-brand-800/50 dark:text-brand-200/30 font-semibold leading-normal">
                        Combines flexibility, joint lubrication levels, and muscle fatigue thresholds.
                      </p>
                    </div>
                  </div>

                  {/* Certified Treatment Badge */}
                  <div className="rounded-2xl border border-brand-200/60 bg-brand-50/50 dark:border-brand-900/40 dark:bg-white/[0.01] p-4 flex gap-3 items-center">
                    <FiShield className="text-brand-600 text-xl shrink-0" />
                    <div>
                      <h4 className="text-xs font-black uppercase text-brand-950 dark:text-brand-200 tracking-wider">Verified Recovery</h4>
                      <p className="text-[10px] text-brand-850 dark:text-brand-200/50 mt-0.5 leading-normal">
                        Patient recovery record certified by the practitioners at Samrala clinic.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Timeline Chronology */}
                <div className="lg:col-span-8">
                  <h4 className="font-display text-base font-extrabold text-brand-950 dark:text-brand-50 mb-6 flex items-center gap-2">
                    <FiClock className="text-brand-600" /> Patient Healing Timeline
                  </h4>

                  <div className="relative border-l-2 border-brand-100 dark:border-brand-900 pl-6 sm:pl-8 space-y-8 ml-3">
                    {journeyDetails[activeJourney].milestones.map((milestone, idx) => (
                      <div key={idx} className="relative">
                        {/* Timeline Node Icon/Dot */}
                        <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white dark:bg-[#070c07] border-2 border-brand-500 text-brand-655 shadow-sm">
                          {idx === 2 ? <FiHeart className="text-xs fill-brand-500 text-white" /> : <span className="text-[10px] font-black">{idx + 1}</span>}
                        </span>

                        <div className="space-y-1">
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-brand-50/90 dark:bg-brand-950/80 border border-brand-100 dark:border-brand-900 text-[10px] font-black uppercase tracking-widest text-brand-700 dark:text-brand-300">
                            {milestone.week}
                          </span>
                          <h5 className="font-display text-base font-bold text-brand-950 dark:text-brand-50 tracking-tight">
                            {milestone.title}
                          </h5>
                          <p className="text-sm text-brand-850 dark:text-brand-200/70 leading-relaxed max-w-2xl">
                            {milestone.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Before & After Case Files */}
      <section className="section relative overflow-hidden">
        <div className="absolute left-1/4 top-1/3 -z-10 h-80 w-80 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 bottom-10 -z-10 h-72 w-72 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />

        <div className="container-px">
          <SectionHeading
            eyebrow="Case Files"
            title="Before & After Treatment"
            description="Documented patient transformations — where they started, and how Pannu Vaid helped them recover."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {successStories.map((s, i) => (
              <Reveal key={s.name} delay={i}>
                <TiltCard
                  className="h-full rounded-[2rem] bg-white dark:bg-[#0c160c]/40 shadow-soft border border-white/20 dark:border-white/5 overflow-hidden"
                  glowColor="rgba(79, 158, 40, 0.15)"
                >
                  <div className="flex h-full flex-col p-7">
                    {/* Case header */}
                    <div className="flex items-center justify-between" style={{ transform: "translateZ(10px)" }}>
                      <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:text-brand-450">
                        <FaLeaf className="text-brand-500" size={10} /> {s.condition}
                      </span>
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold text-brand-700 dark:bg-brand-950/60 dark:text-brand-350 border border-brand-100/30 dark:border-brand-900/30 inline-flex items-center gap-1.5">
                        <FiClock size={11} /> {s.duration}
                      </span>
                    </div>

                    {/* Before / After comparison */}
                    <div className="mt-6 flex-1" style={{ transform: "translateZ(15px)" }}>
                      <div className="rounded-2xl bg-rose-50/60 p-4 dark:bg-rose-950/15 border border-rose-100/50 dark:border-rose-900/20">
                        <span className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-rose-600 dark:text-rose-400">
                          <FiX size={12} strokeWidth={3} /> Before Treatment
                        </span>
                        <p className="mt-1.5 text-sm text-brand-850 dark:text-brand-200/70 leading-relaxed font-medium">
                          {s.before}
                        </p>
                      </div>

                      <div className="relative z-10 -my-2.5 flex justify-center">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-white shadow-md border-2 border-white dark:border-[#0c160c]">
                          <FiArrowDown size={15} strokeWidth={3} />
                        </span>
                      </div>

                      <div className="rounded-2xl bg-brand-50/60 p-4 dark:bg-brand-950/30 border border-brand-100/50 dark:border-brand-900/30">
                        <span className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                          <FiCheck size={12} strokeWidth={3} /> After Treatment
                        </span>
                        <p className="mt-1.5 text-sm text-brand-950 dark:text-brand-50 leading-relaxed font-bold">
                          {s.after}
                        </p>
                      </div>
                    </div>

                    {/* Patient footer */}
                    <div className="mt-6 flex items-center gap-3 border-t border-brand-100/50 dark:border-brand-900/50 pt-4" style={{ transform: "translateZ(5px)" }}>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white shadow-soft">
                        {s.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-brand-950 dark:text-brand-50">{s.name}</p>
                        <p className="text-xs text-brand-800/60 dark:text-brand-200/50">{s.age} years • Samrala Clinic</p>
                      </div>
                      <div className="ml-auto">
                        <Stars count={5} />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Written Reviews */}
      <section className="section bg-hero-radial">
        <div className="container-px">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="Shared Words of Recovery"
            description="Verified Google reviews and clinic register entries from our community."
          />
          <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i % 3} className="break-inside-avoid">
                <TiltCard
                  className="rounded-3xl bg-white dark:bg-[#0c160c]/40 shadow-soft p-6 border border-white/20 dark:border-white/5"
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
      <section className="section bg-brand-50/40 dark:bg-[#0a130a] border-t border-brand-100/20 dark:border-brand-900/20">
        <div className="container-px">
          <TestimonialCarousel />
        </div>
      </section>

      <CTABand />
    </>
  );
}
