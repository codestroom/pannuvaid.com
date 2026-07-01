"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiSearch, FiActivity, FiCheckCircle } from "react-icons/fi";
import { FaLeaf, FaBone, FaBrain, FaSpa } from "react-icons/fa";
import { treatments } from "@/lib/treatments";
import { diseaseCategories, type DiseaseCategory } from "@/lib/diseases";
import { treatmentImage } from "@/lib/images";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { CTABand } from "@/components/CTABand";

export default function TreatmentsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "joints" | "internal">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [directorySearch, setDirectorySearch] = useState("");

  // Categorize treatments
  const filteredTreatments = useMemo(() => {
    return treatments.filter((t) => {
      // Apply search query
      const matchesSearch =
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.short.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.overview.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      // Apply tab filter
      if (activeTab === "joints") {
        const jointSlugs = [
          "knee-pain",
          "joint-pain",
          "arthritis",
          "back-pain",
          "sciatica",
          "cervical-pain",
          "chronic-pain-relief",
        ];
        return jointSlugs.includes(t.slug);
      }
      if (activeTab === "internal") {
        const internalSlugs = [
          "nerve-disorders",
          "digestive-disorders",
          "allergy-management",
          "general-wellness",
        ];
        return internalSlugs.includes(t.slug);
      }
      return true;
    });
  }, [activeTab, searchQuery]);

  // Filter disease directory
  const filteredCategories = useMemo(() => {
    if (!directorySearch.trim()) return diseaseCategories;
    const query = directorySearch.toLowerCase();
    return diseaseCategories.filter(
      (cat: DiseaseCategory) =>
        cat.punjabi.toLowerCase().includes(query) ||
        cat.english.toLowerCase().includes(query) ||
        cat.conditions.some((cond: string) => cond.toLowerCase().includes(query))
    );
  }, [directorySearch]);

  const matchesQuery = (cat: DiseaseCategory) => {
    if (!directorySearch.trim()) return false;
    const query = directorySearch.toLowerCase();
    return (
      cat.punjabi.toLowerCase().includes(query) ||
      cat.english.toLowerCase().includes(query) ||
      cat.conditions.some((cond: string) => cond.toLowerCase().includes(query))
    );
  };

  return (
    <>
      {/* Dynamic Visual Hero Section */}
      <section className="relative overflow-hidden bg-hero-radial pb-16 pt-32 sm:pt-40 lg:pb-24 lg:pt-44 border-b border-brand-100/35 dark:border-brand-900/30">
        {/* Ambient background glows */}
        <div className="absolute left-1/3 top-1/4 -z-10 h-80 w-80 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

        <div className="container-px">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-800/60 dark:text-brand-200/40 mb-6">
            <Link href="/" className="hover:text-brand-650 dark:hover:text-brand-400">Home</Link>
            <span>/</span>
            <span className="text-brand-950 dark:text-brand-50">Treatments</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="text-left lg:col-span-7 space-y-6">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50/50 dark:bg-brand-950/60 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:text-brand-350 border border-brand-100/50 dark:border-brand-900/50">
                  🌿 Classical Ayurvedic Apothecary
                </span>
              </Reveal>

              <Reveal delay={1}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6.5xl font-black leading-[1.1] tracking-tight text-brand-950 dark:text-brand-50">
                  Specialised Care <br />
                  By <span className="gradient-text">Pannu Vaid</span>
                </h1>
              </Reveal>

              <Reveal delay={2}>
                <p className="max-w-xl text-base sm:text-lg text-brand-800/80 dark:text-brand-200/70 leading-relaxed">
                  Root-cause, drug-free care by Pannu Vaid for a wide range of chronic spinal, joint, and internal conditions. Each healing protocol is personalized to your body constitution (Prakriti).
                </p>
              </Reveal>
            </div>

            {/* Right Graphic Panel */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <Reveal delay={3} className="w-full max-w-[420px]">
                <TiltCard
                  className="rounded-[2.5rem] bg-white dark:bg-[#0c160c]/40 border border-white/20 dark:border-white/5 shadow-2xl p-4 overflow-hidden relative aspect-square"
                  glowColor="rgba(79, 158, 40, 0.15)"
                >
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                    <Image
                      src="/images/treatments-hero.png"
                      alt="Ayurvedic Treatment Room setup at Pannu Vaid clinic"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />
                    
                    {/* Float label */}
                    <div className="absolute bottom-5 left-5 right-5 text-white flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-white shadow-soft">
                        <FaSpa size={18} />
                      </span>
                      <div>
                        <h4 className="font-display text-sm font-bold text-white tracking-tight">Samrala Treatment Rooms</h4>
                        <p className="text-[10px] text-white/70">Authentic herbs and pooling oils</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-12 bg-brand-50/15 dark:bg-[#070c07]/20 border-b border-brand-100/20 dark:border-brand-900/10">
        <div className="container-px">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Therapies" },
                { id: "joints", label: "Joints & Spine" },
                { id: "internal", label: "Internal Health" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border ${
                    activeTab === tab.id
                      ? "bg-brand-gradient border-transparent text-white shadow-md shadow-brand-900/10"
                      : "border-brand-100 dark:border-brand-900 bg-brand-50/20 dark:bg-white/[0.02] text-brand-800 dark:text-brand-300 hover:bg-brand-50/50 dark:hover:bg-white/[0.05]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:max-w-xs">
              <span className="absolute inset-y-0 left-4 flex items-center text-brand-800/40 dark:text-brand-200/40">
                <FiSearch size={16} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search conditions..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-brand-200/80 bg-white/60 text-xs sm:text-sm outline-none transition-all duration-350 focus:border-brand-500 focus:bg-white dark:border-brand-800 dark:bg-white/5 dark:focus:bg-[#0c160c] dark:focus:border-brand-400 text-brand-950 dark:text-brand-50"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Grid listing */}
      <section className="section py-16">
        <div className="container-px">
          {filteredTreatments.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <span className="text-3xl">🔍</span>
              <h3 className="font-display text-xl font-bold text-brand-950 dark:text-brand-50">No treatments found</h3>
              <p className="text-sm text-brand-800/60 dark:text-brand-200/40 max-w-sm mx-auto">
                Try searching for keywords like &ldquo;knee&rdquo;, &ldquo;spine&rdquo;, &ldquo;nerve&rdquo;, or &ldquo;digestion&rdquo; to find our specialized protocols.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTreatments.map((t, i) => {
                const Icon = t.icon;
                return (
                  <Reveal key={t.slug} delay={i % 3}>
                    <TiltCard
                      className="h-full rounded-3xl bg-white dark:bg-[#0c160c]/40 shadow-soft hover:shadow-2xl border border-white/20 dark:border-white/5 overflow-hidden flex flex-col justify-between"
                      glowColor="rgba(79, 158, 40, 0.15)"
                    >
                      <Link href={`/treatments/${t.slug}`} className="group flex flex-col h-full justify-between">
                        <div>
                          {/* Image frame */}
                          <div className="relative aspect-[16/10] overflow-hidden" style={{ transform: "translateZ(10px)" }}>
                            <Image
                              src={treatmentImage(t.slug)}
                              alt={`${t.title} Ayurvedic treatment at Pannu Vaid clinic`}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />
                            
                            {/* Icon overlay badge */}
                            <span className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-white shadow-soft">
                              <Icon size={18} />
                            </span>
                          </div>

                          {/* Content */}
                          <div className="p-6 space-y-2.5" style={{ transform: "translateZ(15px)" }}>
                            <h3 className="font-display text-lg font-bold text-brand-950 dark:text-brand-50 tracking-tight transition-colors duration-300 group-hover:text-brand-650 dark:group-hover:text-brand-400">
                              {t.title}
                            </h3>
                            <p className="text-xs text-brand-850 dark:text-brand-200/70 leading-relaxed line-clamp-3">
                              {t.short}
                            </p>
                          </div>
                        </div>

                        {/* Footer Link */}
                        <div className="px-6 pb-6 pt-3 border-t border-brand-100/10 dark:border-brand-900/10 flex items-center justify-between" style={{ transform: "translateZ(5px)" }}>
                          <span className="text-[10px] font-black uppercase text-brand-700 dark:text-brand-350 tracking-widest">Apothecary Protocol</span>
                          <span className="text-xs font-bold text-brand-650 dark:text-brand-400 group-hover:underline flex items-center gap-1">
                            Learn more <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Comprehensive Directory of Treated Conditions */}
      <section className="section py-20 bg-brand-50/10 dark:bg-[#070c07]/20 border-t border-brand-100/20 dark:border-brand-900/10 relative overflow-hidden">
        {/* Soft background decor */}
        <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50/50 dark:bg-brand-950/60 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:text-brand-350 border border-brand-100/50 dark:border-brand-900/50">
                📋 Specialised Treatment Directory
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 font-display text-3xl sm:text-4.5xl font-black text-brand-950 dark:text-brand-50 tracking-tight">
                Conditions We Treat
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-4 text-sm sm:text-base text-brand-800/80 dark:text-brand-200/70 max-w-xl mx-auto leading-relaxed">
                Pannu Vaid provides expert root-cause diagnosis and highly effective Ayurvedic treatments for the following **20 key medical categories** and their specific conditions:
              </p>
            </Reveal>

            {/* Directory Search Bar */}
            <Reveal delay={3} className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-brand-800/40 dark:text-brand-200/40">
                  <FiSearch size={18} />
                </span>
                <input
                  type="text"
                  value={directorySearch}
                  onChange={(e) => setDirectorySearch(e.target.value)}
                  placeholder="Search from our 20+ specialized clinical categories..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-brand-200/85 bg-white text-xs sm:text-sm outline-none transition-all duration-350 focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 dark:border-brand-800 dark:bg-white/5 dark:focus:bg-[#0c160c] dark:focus:border-brand-400 text-brand-950 dark:text-brand-50"
                />
              </div>
            </Reveal>
          </div>

          {/* Directory Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCategories.map((cat, idx) => (
              <Reveal key={cat.id} delay={idx % 4}>
                <div
                  className={`h-full rounded-[2rem] p-6 bg-white dark:bg-[#0c160c]/40 border transition-all duration-350 ${
                    directorySearch && matchesQuery(cat)
                      ? "border-brand-500/80 dark:border-brand-400 shadow-[0_12px_30px_rgba(79,158,40,0.12)] bg-brand-50/20"
                      : "border-brand-100/60 dark:border-brand-900/40 shadow-soft"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      {/* Punjabi Category Name */}
                      <h4 className="font-display text-lg font-black text-brand-950 dark:text-brand-100 leading-tight">
                        {cat.punjabi}
                      </h4>
                      {/* English Category Name */}
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-brand-650 dark:text-brand-400 mt-1">
                        {cat.english}
                      </p>
                    </div>
                    {/* Index Badge */}
                    <span className="text-2xl font-black bg-gradient-to-br from-brand-650 to-gold-500 bg-clip-text text-transparent opacity-80 shrink-0">
                      {String(cat.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Specific Conditions Bullets */}
                  <ul className="space-y-2">
                    {cat.conditions.map((cond, cIdx) => (
                      <li
                        key={cIdx}
                        className={`text-xs flex items-start gap-2 leading-relaxed transition-all duration-200 ${
                          directorySearch && cond.toLowerCase().includes(directorySearch.toLowerCase())
                            ? "text-brand-700 dark:text-brand-350 font-bold scale-[1.02]"
                            : "text-brand-850 dark:text-brand-200/80"
                        }`}
                      >
                        <span className="text-brand-500 shrink-0 mt-1">•</span>
                        <span>{cond}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Consultation Journey Guide */}
      <section className="section py-16 bg-white dark:bg-[#070c07]/20 border-t border-brand-100/30 dark:border-brand-900/10">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50/50 dark:bg-brand-950/60 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:text-brand-350 border border-brand-100/50 dark:border-brand-900/50">
                🔄 Consultation to Recovery
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 font-display text-2xl sm:text-3.5xl font-black text-brand-950 dark:text-brand-50 tracking-tight">
                Our Clinical Methodology
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Dosha Analysis",
                desc: "We diagnose your unique physical & energetic type, finding where blockages (Ama) have accumulated.",
                icon: FaLeaf,
              },
              {
                step: "02",
                title: "Custom Formulations",
                desc: "We assemble targeted herbal solutions, medicated oils, and capsules tailored specifically to your diagnosis.",
                icon: FaBone,
              },
              {
                step: "03",
                title: "Toxicity Extraction",
                desc: "Through correct herb dosage and lifestyle guidelines, we flush out deep inflammation and prevent recurrence.",
                icon: FaBrain,
              },
            ].map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <Reveal key={step.step} delay={idx}>
                  <div className="rounded-3xl border border-brand-100/50 dark:border-brand-900/30 bg-brand-50/10 dark:bg-[#0c160c]/40 p-6 space-y-4 shadow-sm relative overflow-hidden group">
                    <span className="absolute right-4 top-4 text-3xl font-black opacity-10 dark:opacity-5 group-hover:scale-110 transition-transform">{step.step}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-white shadow-soft">
                      <StepIcon size={18} />
                    </span>
                    <h4 className="font-display text-base font-extrabold text-brand-950 dark:text-brand-50">{step.title}</h4>
                    <p className="text-xs text-brand-850 dark:text-brand-200/70 leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
