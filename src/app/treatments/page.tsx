import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TreatmentCard } from "@/components/TreatmentCard";
import { CTABand } from "@/components/CTABand";
import { treatments } from "@/lib/treatments";

export const metadata: Metadata = {
  title: "Ayurvedic Treatments — Joint Pain, Arthritis, Sciatica & More",
  description:
    "Explore our specialised Ayurvedic treatments for knee pain, joint pain, arthritis, back pain, sciatica, nerve and digestive disorders, and general wellness.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Treatments"
        title="Specialised Ayurvedic Treatments"
        description="Root-cause, drug-free care for a wide range of chronic conditions — each protocol personalised to your body and needs."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Treatments" }]}
      />

      <section className="section pt-10">
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t, i) => (
              <TreatmentCard key={t.slug} slug={t.slug} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
