import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaBowlFood,
  FaHandsHolding,
  FaHeart,
  FaLeaf,
  FaUtensils,
  FaClock,
  FaPeopleGroup,
  FaSeedling,
  FaHandHoldingHeart,
} from "react-icons/fa6";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { CTABand } from "@/components/CTABand";
import { TiltCard } from "@/components/TiltCard";
import { langarImages } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Langar Sewa — Free Community Kitchen | Pannu Vaid",
  description:
    "ਲੰਗਰ ਸੇਵਾ — A free community kitchen at Pannu Vaid, Samrala. Fresh, wholesome vegetarian meals served daily to every patient, attendant, and visitor — with love, in the spirit of seva.",
  alternates: { canonical: "/langar-sewa" },
};

const values = [
  {
    icon: FaHandsHolding,
    title: "Sewa Without Distinction",
    desc: "Everyone who walks in is served the same warm meal — regardless of caste, creed, faith, or means.",
    glow: "rgba(79, 158, 40, 0.15)",
  },
  {
    icon: FaSeedling,
    title: "Fresh & Sattvic",
    desc: "Simple, pure vegetarian food cooked fresh every day in our own community kitchen — light, nourishing, and wholesome.",
    glow: "rgba(205, 198, 40, 0.15)",
  },
  {
    icon: FaHeart,
    title: "Cooked With Love",
    desc: "Prepared by devoted sewadars who give their time selflessly, every plate carries the warmth of genuine care.",
    glow: "rgba(154, 108, 60, 0.15)",
  },
];

const menu = [
  { item: "ਰੋਟੀ / Roti", note: "Fresh, hand-made" },
  { item: "ਦਾਲ / Dal", note: "Wholesome & hearty" },
  { item: "ਸਬਜ਼ੀ / Sabzi", note: "Seasonal vegetables" },
  { item: "ਚਾਹ / Chai", note: "Hot, comforting tea" },
];

const stats = [
  { value: 365, suffix: "", label: "Days a Year", icon: FaClock },
  { value: 100, suffix: "%", label: "Free of Cost", icon: FaHandHoldingHeart },
  { value: 100, suffix: "+", label: "Meals Daily", icon: FaBowlFood },
  { value: 1, suffix: "", label: "Family, All Welcome", icon: FaPeopleGroup },
];

const gallery = [
  { src: langarImages.langarHall, alt: "Langar Hall (ਲੰਗਰ ਹਾਲ) — the community dining entrance at Pannu Vaid", span: "lg:col-span-2 lg:row-span-2" },
  { src: langarImages.communityCooking, alt: "Sewadars preparing the langar together in the community kitchen", span: "" },
  { src: langarImages.cookingStove, alt: "A sewadar cooking a large pot of langar on the stove", span: "" },
  { src: langarImages.kitchenCounter, alt: "The langar kitchen counter stocked with ingredients and provisions", span: "" },
  { src: langarImages.kitchenPrep, alt: "Meal preparation underway in the langar kitchen", span: "" },
  { src: langarImages.diningHall, alt: "The clean, comfortable langar dining hall where guests are served", span: "lg:col-span-2" },
];

const helpWays = [
  "Volunteer as a sewadar in the kitchen or hall",
  "Contribute ration, grains, or fresh vegetables",
  "Sponsor a day of langar in a loved one's name",
  "Simply share a meal and join the sangat",
];

export default function LangarSewaPage() {
  return (
    <>
      <PageHero
        eyebrow="ਲੰਗਰ ਸੇਵਾ • Langar Sewa"
        title="A Free Meal, Served With Love, For Everyone"
        description="In the timeless spirit of seva, our community kitchen serves fresh, wholesome vegetarian food to every patient, attendant, and visitor — no one leaves hungry."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Langar Sewa" }]}
      />

      {/* Intro — entrance sign beside the story */}
      <section className="section overflow-hidden relative">
        <div className="absolute -left-20 top-1/3 -z-10 h-80 w-80 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative pb-12 pl-4 pr-2 sm:pl-10">
              <div
                aria-hidden
                className="absolute -top-8 -left-2 h-40 w-40 rounded-full border-2 border-dashed border-brand-300/40 dark:border-brand-700/30 animate-spin-slow"
              />
              <TiltCard
                className="relative rounded-[2.5rem] bg-white shadow-2xl dark:bg-white/[0.04] overflow-hidden"
                glowColor="rgba(79, 158, 40, 0.15)"
              >
                <div className="relative aspect-[5/4] w-full rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/5">
                  <Image
                    src={langarImages.entranceSign}
                    alt="ਲੰਗਰ ਸੇਵਾ sign welcoming visitors at the entrance of the Pannu Vaid community kitchen"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/35 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/35 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
                    <FaLeaf className="text-brand-300" size={10} /> All Are Welcome
                  </span>
                </div>
              </TiltCard>

              <div className="absolute -bottom-2 left-0 sm:-left-2 z-20 w-32 sm:w-44 -rotate-3 transition-transform duration-500 hover:rotate-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-2xl dark:border-[#0b150a]">
                  <Image
                    src={langarImages.cookingStove}
                    alt="A sewadar lovingly cooking langar over the flame"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="What Is Langar?"
              title="A Tradition of Sharing & Equality"
            />
            <div className="mt-6 space-y-4 text-brand-800/80 dark:text-brand-200/70 leading-relaxed text-base">
              <p>
                Langar is the centuries-old tradition of a free community kitchen
                where a wholesome meal is offered to all — rich or poor, near or
                far — seated together as equals. At Pannu Vaid, this spirit of{" "}
                <em>seva</em> lives at the heart of everything we do.
              </p>
              <p>
                Many who come to us travel long distances for treatment, often
                with family by their side. Our langar makes sure that nobody has
                to worry about a meal. Food is cooked fresh each day in our own
                kitchen and served with warmth, dignity, and care.
              </p>
              <p>
                It is our humble way of healing not just the body, but the heart
                too — because a kind meal shared in good company is medicine of
                its own.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {helpWays.slice(0, 4).map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-brand-100/50 bg-brand-50/40 px-4 py-3 text-sm font-bold text-brand-900 dark:border-brand-900/40 dark:bg-brand-950/30 dark:text-brand-100"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-gradient text-white shadow-sm">
                    <FiCheck size={13} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section bg-brand-50/40 dark:bg-[#0a130a] relative overflow-hidden">
        <div className="absolute left-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-brand-500/5 blur-3xl" />
        <div className="container-px">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, idx) => (
              <Reveal key={s.label} delay={idx}>
                <TiltCard
                  className="group rounded-2xl bg-white shadow-soft dark:bg-white/[0.04] overflow-hidden"
                  glowColor="rgba(205, 198, 40, 0.15)"
                >
                  <div className="p-6 text-center border border-white/20 dark:border-white/5 rounded-2xl flex flex-col items-center">
                    <span className="mb-3 grid h-10 w-10 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" style={{ transform: "translateZ(20px)" }}>
                      <s.icon size={16} />
                    </span>
                    <p className="font-display text-3xl font-black gradient-text sm:text-4xl leading-none" style={{ transform: "translateZ(15px)" }}>
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-2 text-xs sm:text-sm font-semibold text-brand-850 dark:text-brand-200/60" style={{ transform: "translateZ(10px)" }}>
                      {s.label}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section relative overflow-hidden">
        <div className="absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />
        <div className="container-px">
          <SectionHeading
            eyebrow="The Spirit of Seva"
            title="Why We Serve Langar"
            description="More than a meal — it's a promise that everyone who comes to us is cared for like family."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i}>
                <TiltCard
                  className="h-full rounded-3xl bg-white dark:bg-white/[0.03] shadow-soft"
                  glowColor={v.glow}
                >
                  <div className="p-8 h-full">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft" style={{ transform: "translateZ(15px)" }}>
                      <v.icon size={22} />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-950 dark:text-brand-50" style={{ transform: "translateZ(10px)" }}>
                      {v.title}
                    </h3>
                    <p className="mt-3 text-brand-850 dark:text-brand-200/70 leading-relaxed text-sm" style={{ transform: "translateZ(5px)" }}>
                      {v.desc}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — seva in action */}
      <section className="section bg-brand-50/40 dark:bg-[#0a130a] relative overflow-hidden">
        <div className="container-px">
          <SectionHeading
            eyebrow="Seva in Action"
            title="Inside Our Community Kitchen"
            description="A glimpse of the devoted hands and warm spaces behind every plate we serve."
          />
          <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={i % 3}>
                <div
                  className={`group relative h-full w-full overflow-hidden rounded-3xl shadow-soft ${g.span}`}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/55 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
                  <p className="absolute bottom-3 left-4 right-4 text-xs font-semibold text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {g.alt}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Menu + Timings */}
      <section className="section relative overflow-hidden">
        <div className="absolute -left-20 top-1/4 -z-10 h-80 w-80 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
        <div className="container-px grid items-stretch gap-8 lg:grid-cols-5">
          {/* Today's langar card */}
          <Reveal className="lg:col-span-3">
            <div className="h-full rounded-[2.5rem] border border-brand-100/60 bg-white p-8 shadow-soft dark:border-brand-900/50 dark:bg-white/[0.03] sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-700 dark:bg-brand-950/60 dark:text-brand-350 border border-brand-100/50 dark:border-brand-900/50">
                <FaUtensils className="text-brand-500" size={11} /> Today's Langar
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-brand-950 dark:text-brand-50 sm:text-3xl">
                Simple, Fresh & Nourishing
              </h3>
              <p className="mt-3 text-sm text-brand-800/70 dark:text-brand-200/60 leading-relaxed">
                The menu changes with the day and the season, but it is always
                pure vegetarian, freshly cooked, and served hot.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {menu.map((m) => (
                  <div
                    key={m.item}
                    className="flex items-center gap-4 rounded-2xl border border-brand-100/60 bg-brand-50/40 p-4 dark:border-brand-900/40 dark:bg-brand-950/30"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white shadow-sm">
                      <FaBowlFood size={16} />
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-brand-950 dark:text-brand-50">
                        {m.item}
                      </p>
                      <p className="text-xs text-brand-700/70 dark:text-brand-200/60">
                        {m.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Timings / serving card */}
          <Reveal className="lg:col-span-2" delay={1}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] bg-brand-gradient p-8 text-white shadow-2xl sm:p-10">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-gold-400/20 blur-3xl" />
              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur border border-white/20">
                  <FaClock size={22} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight">
                  Served Through the Day
                </h3>
                <p className="mt-3 text-sm text-white/85 leading-relaxed">
                  Whenever you arrive, there is a warm meal and a hot cup of chai
                  waiting. Our langar runs every day the clinic is open — no one
                  is ever turned away hungry.
                </p>
              </div>
              <div className="relative mt-8 space-y-3 text-sm">
                <p className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur border border-white/15">
                  <FaLeaf className="text-gold-200" /> {site.hours}
                </p>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-bold text-brand-800 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <FaWhatsapp className="text-[#25D366] text-lg" /> Ask About Langar
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contribute / Sewa CTA */}
      <section className="section bg-brand-50/40 dark:bg-[#0a130a] relative overflow-hidden">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={langarImages.communityCooking}
                  alt="Sewadars working together to prepare the community langar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/35 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
                  <FaHandsHolding className="text-brand-300" size={11} /> Join the Sewa
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Be a Part of It"
              title="Lend Your Hands to the Langar"
            />
            <p className="mt-6 text-brand-800/80 dark:text-brand-200/70 leading-relaxed">
              Langar runs on the selfless love of the sangat. There are many
              beautiful ways to take part — give your time, share provisions, or
              sponsor a day of meals. Every contribution, big or small, helps us
              keep the kitchen warm.
            </p>
            <ul className="mt-7 space-y-3">
              {helpWays.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-brand-100/50 bg-white px-4 py-3 text-sm font-semibold text-brand-900 shadow-sm dark:border-brand-900/40 dark:bg-white/[0.03] dark:text-brand-100"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-gradient text-white shadow-sm">
                    <FiCheck size={13} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Contribute / Volunteer
                <FiArrowRight />
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <FaWhatsapp className="text-[#25D366] text-lg" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
