"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiMenu, FiPhone, FiX } from "react-icons/fi";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { treatments } from "@/lib/treatments";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments", mega: true },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/langar-sewa", label: "Langar Sewa" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-brand-100/60 bg-white/80 py-2 shadow-soft backdrop-blur-xl dark:border-brand-900/60 dark:bg-[#0b150a]/80"
          : "py-4"
      )}
    >
      <nav className="container-px flex items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.mega ? (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition hover:bg-brand-50 dark:hover:bg-white/5",
                    pathname.startsWith("/treatments") && "text-brand-600"
                  )}
                >
                  {link.label}
                  <FiChevronDown
                    className={cn("transition", megaOpen && "rotate-180")}
                  />
                </Link>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
                    >
                      <div className="glass-card grid grid-cols-2 gap-1 p-3">
                        {treatments.map((t) => (
                          <Link
                            key={t.slug}
                            href={`/treatments/${t.slug}`}
                            className="group flex items-start gap-3 rounded-2xl p-3 transition hover:bg-brand-50 dark:hover:bg-white/5"
                          >
                            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                              <t.icon size={16} />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold">
                                {t.title}
                              </span>
                              <span className="block text-xs text-brand-700/70 dark:text-brand-200/60">
                                {t.short}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition hover:bg-brand-50 dark:hover:bg-white/5",
                    pathname === link.href && "text-brand-600"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary">
            Book Consultation
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-brand-200 dark:border-brand-800"
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium hover:bg-brand-50 dark:hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 flex gap-2">
                <a href={`tel:${site.phoneHref}`} className="btn-outline flex-1">
                  <FiPhone /> Call
                </a>
                <Link href="/contact" className="btn-primary flex-1">
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
