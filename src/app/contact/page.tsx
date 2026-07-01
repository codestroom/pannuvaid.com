import type { Metadata } from "next";
import { FaWhatsapp, FaMapMarkedAlt, FaRegCompass } from "react-icons/fa";
import { FiClock, FiMail, FiMapPin, FiPhone, FiCompass, FiSend, FiFileText, FiCalendar, FiBriefcase } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ConsultationForm } from "@/components/ConsultationForm";
import { site } from "@/lib/site";
import { TiltCard } from "@/components/TiltCard";
import { ClinicStatus } from "@/components/ClinicStatus";

export const metadata: Metadata = {
  title: "Contact Pannu Vaid — Book an Ayurvedic Consultation in Samrala",
  description:
    "Contact Pannu Vaid Ayurvedic clinic in Samrala, Punjab. Call, WhatsApp, or request an appointment online. View clinic location, hours, and directions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect With Us"
        title="Start Your Healing Journey"
        description="Whether you need chronic pain guidance or wish to order herbal remedies, we are ready to assist you. Consult in-person or virtually."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Modern, creative split-screen layout with Grid Backdrop */}
      <section className="section relative overflow-hidden bg-brand-50/5 dark:bg-[#070b06]/10">
        
        {/* Fine graph dots background for premium texture */}
        <div 
          className="absolute inset-0 -z-20 opacity-60 dark:opacity-40 pointer-events-none" 
          style={{
            backgroundImage: "radial-gradient(rgba(79, 158, 40, 0.08) 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px"
          }}
        />

        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gold-500/5 blur-[130px] pointer-events-none" />

        <div className="container-px">
          
          {/* Asymmetrical Grid of Connect Cards */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mb-16">
            
            {/* WhatsApp - Featured block spanning 2 columns */}
            <Reveal className="sm:col-span-2 lg:col-span-2">
              <TiltCard
                className="group relative h-full rounded-[2.2rem] bg-gradient-to-br from-emerald-500/10 via-emerald-500/[0.02] to-transparent dark:from-emerald-500/15 dark:to-transparent border border-emerald-500/20 dark:border-emerald-500/10 shadow-soft p-8 flex flex-col justify-between overflow-hidden"
                glowColor="rgba(16, 185, 129, 0.22)"
              >
                {/* Large watermark brand icon */}
                <div className="absolute right-4 top-4 text-emerald-500/5 dark:text-emerald-500/10 text-9xl font-bold pointer-events-none transform translate-x-4 -translate-y-4">
                  <FaWhatsapp />
                </div>

                <div className="space-y-4" style={{ transform: "translateZ(10px)" }}>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-450 border border-emerald-200/50 dark:border-emerald-900/50">
                    ⚡ Instant Response
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-brand-950 dark:text-brand-50 tracking-tight">
                      Consult via WhatsApp
                    </h3>
                    <p className="text-xs text-brand-850 dark:text-brand-200/60 mt-1 leading-relaxed max-w-sm">
                      Send your case sheets, joint reports, or prescription queries directly to our main clinic WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="pt-8" style={{ transform: "translateZ(15px)" }}>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition-all shadow-md hover:shadow-lg"
                  >
                    <FaWhatsapp className="text-base" /> Start Chat Now
                  </a>
                </div>
              </TiltCard>
            </Reveal>

            {/* Call Direct */}
            <Reveal className="lg:col-span-1">
              <TiltCard
                className="group relative h-full rounded-[2.2rem] bg-gradient-to-b from-amber-500/10 to-transparent dark:from-amber-500/10 border border-amber-500/25 dark:border-amber-500/5 shadow-soft p-6 flex flex-col justify-between"
                glowColor="rgba(245, 158, 11, 0.15)"
              >
                <div className="space-y-4" style={{ transform: "translateZ(10px)" }}>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-white/50 dark:border-white/10 shadow-soft text-amber-600 dark:text-amber-400">
                    <FiPhone className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-950 dark:text-brand-50 tracking-tight">Call Reception</h3>
                    <p className="text-[10px] text-brand-800/50 dark:text-brand-200/40 mt-0.5">Clinic enquiry desk</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    {site.phones.map((p) => (
                      <a
                        key={p.href}
                        href={`tel:${p.href}`}
                        className="text-sm font-black text-brand-950 dark:text-brand-100 hover:text-amber-700 dark:hover:text-amber-450 transition-colors"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="pt-6" style={{ transform: "translateZ(15px)" }}>
                  <a href={`tel:${site.phoneHref}`} className="text-xs font-black uppercase tracking-wider text-amber-700 hover:text-amber-800 dark:text-amber-450 dark:hover:text-amber-300">
                    Tap to Call →
                  </a>
                </div>
              </TiltCard>
            </Reveal>

            {/* Email Care */}
            <Reveal className="lg:col-span-1">
              <TiltCard
                className="group relative h-full rounded-[2.2rem] bg-gradient-to-b from-yellow-500/10 to-transparent dark:from-yellow-500/10 border border-yellow-500/25 dark:border-yellow-500/5 shadow-soft p-6 flex flex-col justify-between"
                glowColor="rgba(234, 179, 8, 0.15)"
              >
                <div className="space-y-4" style={{ transform: "translateZ(10px)" }}>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-white/50 dark:border-white/10 shadow-soft text-yellow-600 dark:text-yellow-450">
                    <FiMail className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-950 dark:text-brand-50 tracking-tight">Email Support</h3>
                    <p className="text-[10px] text-brand-800/50 dark:text-brand-200/40 mt-0.5">For reports & cases</p>
                  </div>
                  <p className="text-sm font-black text-brand-950 dark:text-brand-100 truncate">{site.email}</p>
                </div>
                <div className="pt-6" style={{ transform: "translateZ(15px)" }}>
                  <a href={`mailto:${site.email}`} className="text-xs font-black uppercase tracking-wider text-yellow-700 hover:text-yellow-800 dark:text-yellow-450 dark:hover:text-yellow-300">
                    Send Email →
                  </a>
                </div>
              </TiltCard>
            </Reveal>

            {/* Directions Map Link */}
            <Reveal className="lg:col-span-1">
              <TiltCard
                className="group relative h-full rounded-[2.2rem] bg-gradient-to-b from-brand-500/10 to-transparent dark:from-brand-500/10 border border-brand-500/25 dark:border-brand-500/5 shadow-soft p-6 flex flex-col justify-between"
                glowColor="rgba(79, 158, 40, 0.15)"
              >
                <div className="space-y-4" style={{ transform: "translateZ(10px)" }}>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-white/50 dark:border-white/10 shadow-soft text-brand-650 dark:text-brand-400">
                    <FiCompass className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-950 dark:text-brand-50 tracking-tight">Get Directions</h3>
                    <p className="text-[10px] text-brand-800/50 dark:text-brand-200/40 mt-0.5">Samrala clinic site</p>
                  </div>
                  <p className="text-sm font-black text-brand-950 dark:text-brand-100">Vill. Bondli, Samrala</p>
                </div>
                <div className="pt-6" style={{ transform: "translateZ(15px)" }}>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(site.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black uppercase tracking-wider text-brand-700 hover:text-brand-800 dark:text-brand-400 dark:hover:text-brand-300"
                  >
                    Open GPS →
                  </a>
                </div>
              </TiltCard>
            </Reveal>

          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Column - Operational Dashboard & Consultation Pipeline */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Operational hours & Status indicator */}
              <Reveal>
                <TiltCard
                  className="rounded-[2.5rem] bg-white dark:bg-[#0c160c]/40 border border-white/20 dark:border-white/5 shadow-soft p-6 sm:p-8 space-y-6"
                  glowColor="rgba(79, 158, 40, 0.1)"
                >
                  <div className="flex items-center justify-between gap-4 flex-wrap border-b border-brand-100/35 dark:border-brand-900/10 pb-4" style={{ transform: "translateZ(10px)" }}>
                    <h3 className="font-display text-2xl font-black text-brand-950 dark:text-brand-50 tracking-tight">
                      Clinic Desk
                    </h3>
                    <ClinicStatus />
                  </div>

                  <div className="space-y-4 text-sm sm:text-base" style={{ transform: "translateZ(15px)" }}>
                    <div className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-650 border border-brand-100 dark:border-brand-900">
                        <FiMapPin className="text-base" />
                      </span>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-brand-800/40 dark:text-brand-250/30 block">Location</span>
                        <span className="text-brand-950 dark:text-brand-100 font-semibold leading-relaxed mt-0.5 block">{site.address.full}</span>
                      </div>
                    </div>

                    {/* Timeline hours */}
                    <div className="rounded-2xl bg-brand-50/20 dark:bg-white/[0.02] border border-brand-100/30 dark:border-white/5 p-4 space-y-3">
                      <p className="text-[10px] font-black uppercase tracking-widest text-brand-800/60 dark:text-brand-300 flex items-center gap-1.5">
                        <FiClock className="text-brand-650" /> Working Schedule
                      </p>
                      
                      <div className="flex justify-between items-center text-xs font-semibold">
                        <span className="text-brand-850 dark:text-brand-200">Monday – Sunday</span>
                        <span className="text-brand-950 dark:text-brand-50 bg-white dark:bg-brand-950/80 border border-brand-100 dark:border-brand-900/50 px-2 py-0.5 rounded-lg">9:00 AM – 5:00 PM</span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

              {/* Map container with Satellite Compass layout */}
              <Reveal delay={2}>
                <div className="overflow-hidden rounded-[2.5rem] border border-brand-100/70 shadow-2xl dark:border-brand-900/60 p-2 bg-white dark:bg-[#0c160c]/40 space-y-3">
                  <div className="relative w-full rounded-[2.2rem] overflow-hidden">
                    <iframe
                      title="Pannu Vaid clinic location"
                      src={site.mapEmbed}
                      width="100%"
                      height="240"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block w-full filter dark:invert dark:opacity-85 dark:contrast-115 border-0"
                    />
                  </div>
                  <div className="px-4 pb-2 pt-1 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-800/40 dark:text-brand-200/40 flex items-center gap-1.5">
                      <FaMapMarkedAlt className="text-brand-650" /> Clinic Locator Map
                    </span>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(site.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-extrabold text-brand-650 hover:underline flex items-center gap-1"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* Right Column - Booking Request Form + Consultation Journey */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal delay={1}>
                <ConsultationForm />
              </Reveal>

              {/* Your Consultation Journey — fills the space beside the map */}
              <Reveal delay={2}>
                <div className="rounded-[2.5rem] border border-brand-100/35 bg-white dark:border-brand-900/45 dark:bg-[#0c160c]/40 p-6 sm:p-8">
                  <div className="text-center sm:text-left">
                    <h3 className="font-display text-xl font-black text-brand-950 dark:text-brand-50 tracking-tight">
                      Your Consultation Journey
                    </h3>
                    <p className="text-xs text-brand-800/60 dark:text-brand-200/40 mt-1 leading-relaxed">
                      A simple three-step process to receive personalized Ayurvedic treatment.
                    </p>
                  </div>

                  <div className="relative mt-8 grid gap-8 sm:grid-cols-3 sm:gap-4">
                    {/* Connector line behind the badges (desktop) */}
                    <div className="hidden sm:block absolute top-[1.375rem] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-100 via-brand-300/60 to-brand-100 dark:from-brand-900 dark:via-brand-700/50 dark:to-brand-900" />

                    {[
                      { n: "1", title: "Submit Request", desc: "Fill in the booking form above with your concerns." },
                      { n: "2", title: "Confirm on WhatsApp", desc: "Tap to open WhatsApp and connect directly with the practitioner." },
                      { n: "3", title: "Receive Formulation", desc: "Undergo a phone assessment and have remedies shipped to your address." },
                    ].map((step) => (
                      <div key={step.n} className="relative flex flex-col items-center text-center">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm font-black text-white shadow-lg ring-4 ring-white dark:ring-[#0c160c] z-10">
                          {step.n}
                        </span>
                        <h4 className="mt-4 text-xs font-black uppercase tracking-wider text-brand-950 dark:text-brand-50">
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-brand-850 dark:text-brand-200/60 leading-relaxed mt-1.5 max-w-[12rem]">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
