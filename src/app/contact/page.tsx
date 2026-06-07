import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ConsultationForm } from "@/components/ConsultationForm";
import { site } from "@/lib/site";
import { TiltCard } from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Contact Pannu Vaid — Book an Ayurvedic Consultation in Samrala",
  description:
    "Contact Pannu Vaid Ayurvedic clinic in Samrala, Punjab. Call, WhatsApp, or request an appointment online. View clinic location, hours, and directions.",
  alternates: { canonical: "/contact" },
};

const contactCards = [
  { icon: FiPhone, title: "Call Us", value: site.phone, href: `tel:${site.phoneHref}`, glow: "rgba(79, 158, 40, 0.15)" },
  { icon: FaWhatsapp, title: "WhatsApp", value: "Chat with us", href: `https://wa.me/${site.whatsapp}`, glow: "rgba(37, 211, 102, 0.15)" },
  { icon: FiMail, title: "Email", value: site.email, href: `mailto:${site.email}`, glow: "rgba(205, 198, 40, 0.15)" },
  { icon: FiMapPin, title: "Visit Us", value: "Samrala, Punjab", href: `https://maps.google.com/?q=${encodeURIComponent(site.address.full)}`, glow: "rgba(154, 108, 60, 0.15)" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Book Your Ayurvedic Consultation"
        description="Reach out to start your natural healing journey. We're here to answer your questions and guide your treatment."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section pt-10">
        <div className="container-px">
          {/* Contact cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c, i) => (
              <Reveal key={c.title} delay={i}>
                <TiltCard
                  className="rounded-3xl bg-white dark:bg-white/[0.03] shadow-soft h-full"
                  glowColor={c.glow}
                >
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 text-center h-full justify-center"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft" style={{ transform: "translateZ(15px)" }}>
                      <c.icon size={20} />
                    </span>
                    <span className="text-sm font-bold text-brand-950 dark:text-brand-50" style={{ transform: "translateZ(10px)" }}>{c.title}</span>
                    <span className="text-sm text-brand-800/75 dark:text-brand-200/65" style={{ transform: "translateZ(5px)" }}>
                      {c.value}
                    </span>
                  </a>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {/* Info + map */}
            <div className="space-y-8">
              <Reveal>
                <TiltCard
                  className="rounded-3xl bg-white dark:bg-white/[0.03] shadow-soft"
                  glowColor="rgba(79, 158, 40, 0.12)"
                >
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold tracking-tight text-brand-950 dark:text-brand-50" style={{ transform: "translateZ(15px)" }}>
                      Clinic Information
                    </h3>
                    <ul className="mt-5 space-y-4 text-sm text-brand-850 dark:text-brand-200" style={{ transform: "translateZ(10px)" }}>
                      <li className="flex items-start gap-3">
                        <FiMapPin className="mt-1 shrink-0 text-brand-600 dark:text-brand-400" />
                        <span>{site.address.full}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FiPhone className="shrink-0 text-brand-600 dark:text-brand-400" />
                        <a href={`tel:${site.phoneHref}`} className="hover:underline">{site.phone}</a>
                      </li>
                      <li className="flex items-center gap-3">
                        <FiMail className="shrink-0 text-brand-600 dark:text-brand-400" />
                        <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
                      </li>
                      <li className="flex items-start gap-3">
                        <FiClock className="mt-1 shrink-0 text-brand-600 dark:text-brand-400" />
                        <span>{site.hours}</span>
                      </li>
                    </ul>
                  </div>
                </TiltCard>
              </Reveal>

              <Reveal delay={1}>
                <div className="overflow-hidden rounded-[2rem] border border-brand-100/70 shadow-2xl dark:border-brand-900/60 p-1.5 bg-white dark:bg-white/[0.03]">
                  <iframe
                    title="Pannu Vaid clinic location"
                    src={site.mapEmbed}
                    width="100%"
                    height="320"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full rounded-[1.8rem]"
                  />
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={1}>
              <ConsultationForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
