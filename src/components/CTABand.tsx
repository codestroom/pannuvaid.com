import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function CTABand() {
  return (
    <section className="section">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-6 py-16 text-center text-white shadow-soft sm:px-12">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Begin Your Natural Healing Journey Today
              </h2>
              <p className="mt-4 text-white/85">
                Book a personalised Ayurvedic consultation with Pannu Vaid and
                take the first step towards lasting, drug-free relief.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn bg-white text-brand-700 hover:-translate-y-0.5"
                >
                  Book Consultation
                </Link>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                >
                  <FiPhone /> {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
