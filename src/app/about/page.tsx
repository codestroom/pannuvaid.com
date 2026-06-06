import type { Metadata } from "next";
import Image from "next/image";
import { FaBullseye, FaEye, FaLeaf, FaSeedling } from "react-icons/fa";
import { PageHero } from "@/components/PageHero";
import { aboutImage } from "@/lib/images";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { CTABand } from "@/components/CTABand";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Pannu Vaid — Our Ayurvedic Story & Philosophy",
  description:
    "Learn about Pannu Vaid, a trusted Ayurvedic healthcare brand in Samrala, Punjab — our mission, vision, philosophy, and decades of healing experience.",
  alternates: { canonical: "/about" },
};

const timeline = [
  { year: "Origins", title: "Rooted in Tradition", desc: "Born from a family lineage of Ayurvedic healers in Punjab, carrying forward generations of herbal knowledge." },
  { year: "Growth", title: "Serving the Community", desc: "Establishing a trusted practice in Samrala, helping thousands find relief from chronic pain naturally." },
  { year: "Expertise", title: "Specialised Care", desc: "Developing focused protocols for joint, nerve, and digestive disorders using authentic Panchakarma." },
  { year: "Today", title: "Modern Ayurveda", desc: "Combining timeless Ayurvedic wisdom with a compassionate, modern patient experience." },
];

const philosophy = [
  { icon: FaLeaf, title: "Treat the Root, Not Symptoms", desc: "We address the underlying imbalance, not just the surface complaint, for lasting results." },
  { icon: FaSeedling, title: "Nature as Medicine", desc: "Pure herbs and natural therapies that work in harmony with your body." },
  { icon: FaBullseye, title: "Personalised to You", desc: "Every patient's constitution (Prakriti) is unique — and so is their treatment." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Pannu Vaid"
        title="Healing Lives Through Authentic Ayurveda"
        description="A trusted Ayurvedic healthcare brand based in Samrala, Punjab — dedicated to natural, root-cause healing for over two decades."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Brand story */}
      <section className="section">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-soft">
                <Image
                  src={aboutImage}
                  alt="Ayurvedic herbs and natural healing at Pannu Vaid"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 to-transparent" />
              </div>
              <div className="glass-card absolute -bottom-6 -right-4 px-6 py-4 sm:right-6">
                <p className="font-display text-3xl font-bold gradient-text">
                  <Counter value={25} suffix="+" />
                </p>
                <p className="text-xs text-brand-800/70 dark:text-brand-200/60">
                  Years of Healing
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="A Legacy of Natural Healing in Punjab"
            />
            <div className="mt-6 space-y-4 text-brand-800/75 dark:text-brand-200/65">
              <p>
                Pannu Vaid was founded on a simple belief: that nature holds the
                answers to lasting health. Rooted in a family tradition of
                Ayurvedic healing, our clinic in Samrala has become a trusted
                destination for patients seeking relief without surgery or
                dependence on painkillers.
              </p>
              <p>
                Over the years, we have refined time-tested Ayurvedic protocols —
                from Panchakarma to personalised herbal formulations — to treat
                joint pain, arthritis, nerve disorders, digestive issues, and
                more. Our focus has always been on the root cause, not just the
                symptoms.
              </p>
              <p>
                Today, Pannu Vaid combines this deep heritage with a warm, modern
                patient experience, helping thousands of families across Punjab
                and beyond reclaim their health, naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section bg-brand-50/40 dark:bg-[#0a130a]">
        <div className="container-px grid gap-6 md:grid-cols-2">
          {[
            { icon: FaBullseye, title: "Our Mission", text: "To make authentic, effective Ayurvedic care accessible to everyone — helping people heal naturally and live pain-free, vibrant lives." },
            { icon: FaEye, title: "Our Vision", text: "To be recognised as one of India's most trusted Ayurvedic healthcare brands, reviving traditional wisdom for modern wellbeing." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i}>
              <div className="glass-card h-full p-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white">
                  <item.icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-brand-800/70 dark:text-brand-200/60">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Ayurvedic Philosophy"
            title="The Principles That Guide Our Care"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i}>
                <div className="glass-card h-full p-7 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white">
                    <p.icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-800/70 dark:text-brand-200/60">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-brand-50/40 dark:bg-[#0a130a]">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Journey"
            title="Decades of Trusted Healing"
          />
          <div className="relative mt-14 grid gap-8 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-brand-200 dark:bg-brand-800 md:block" />
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i}>
                <div className="relative text-center md:text-left">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-gradient font-display font-bold text-white md:mx-0">
                    {i + 1}
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-800/70 dark:text-brand-200/60">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container-px">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <div className="glass-card p-6 text-center">
                  <p className="font-display text-3xl font-bold gradient-text">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-brand-800/70 dark:text-brand-200/60">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
