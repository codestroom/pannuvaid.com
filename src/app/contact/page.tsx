import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ConsultationForm } from "@/components/ConsultationForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Pannu Vaid — Book an Ayurvedic Consultation in Samrala",
  description:
    "Contact Pannu Vaid Ayurvedic clinic in Samrala, Punjab. Call, WhatsApp, or request an appointment online. View clinic location, hours, and directions.",
  alternates: { canonical: "/contact" },
};

const contactCards = [
  { icon: FiPhone, title: "Call Us", value: site.phone, href: `tel:${site.phoneHref}` },
  { icon: FaWhatsapp, title: "WhatsApp", value: "Chat with us", href: `https://wa.me/${site.whatsapp}` },
  { icon: FiMail, title: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: FiMapPin, title: "Visit", value: "Samrala, Punjab", href: site.mapEmbed },
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
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass-card flex flex-col items-center gap-3 p-6 text-center transition hover:-translate-y-1"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white">
                    <c.icon size={20} />
                  </span>
                  <span className="text-sm font-semibold">{c.title}</span>
                  <span className="text-sm text-brand-800/70 dark:text-brand-200/60">
                    {c.value}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {/* Info + map */}
            <div className="space-y-8">
              <Reveal>
                <div className="glass-card p-7">
                  <h3 className="font-display text-xl font-semibold">
                    Clinic Information
                  </h3>
                  <ul className="mt-5 space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <FiMapPin className="mt-0.5 shrink-0 text-brand-600" />
                      <span>{site.address.full}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FiPhone className="shrink-0 text-brand-600" />
                      <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <FiMail className="shrink-0 text-brand-600" />
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiClock className="mt-0.5 shrink-0 text-brand-600" />
                      <span>{site.hours}</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={1}>
                <div className="overflow-hidden rounded-3xl border border-brand-100/70 shadow-soft dark:border-brand-900/60">
                  <iframe
                    title="Pannu Vaid clinic location"
                    src={site.mapEmbed}
                    width="100%"
                    height="320"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full"
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
