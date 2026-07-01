import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { treatments } from "@/lib/treatments";

export function Footer() {
  return (
    <footer className="border-t border-brand-100/70 bg-brand-50/40 dark:border-brand-900/60 dark:bg-[#0a130a]">
      <div className="container-px grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-brand-800/70 dark:text-brand-200/60">
            Authentic healing with Pannu Vaid in Samrala, Punjab — blending traditional
            wisdom with personalised, root-cause care.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: FaFacebookF, href: site.social.facebook, label: "Facebook" },
              { icon: FaInstagram, href: site.social.instagram, label: "Instagram" },
              { icon: FaYoutube, href: site.social.youtube, label: "YouTube" },
              { icon: FaWhatsapp, href: `https://wa.me/${site.whatsapp}`, label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-brand-200 text-brand-700 transition hover:bg-brand-gradient hover:text-white dark:border-brand-800 dark:text-brand-200"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-800/70 dark:text-brand-200/60">
            {[
              { href: "/about", label: "About Us" },
              { href: "/treatments", label: "Treatments" },
              { href: "/success-stories", label: "Success Stories" },
              { href: "/langar-sewa", label: "Langar Sewa" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-brand-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Treatments</h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-800/70 dark:text-brand-200/60">
            {treatments.slice(0, 6).map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/treatments/${t.slug}`}
                  className="transition hover:text-brand-600"
                >
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-brand-800/70 dark:text-brand-200/60">
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-0.5 shrink-0 text-brand-600" />
              {site.address.full}
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="shrink-0 text-brand-600" />
              <a href={`tel:${site.phoneHref}`} className="hover:text-brand-600">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="shrink-0 text-brand-600" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-600">
                {site.email}
              </a>
            </li>
            <li className="text-xs">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-100/70 py-6 dark:border-brand-900/60">
        <div className="container-px flex flex-col items-center justify-between gap-2 text-xs text-brand-800/60 dark:text-brand-200/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Pannu Vaid's authentic care in Samrala, Punjab • Made with care for your wellness.
          </p>
        </div>
      </div>
    </footer>
  );
}
