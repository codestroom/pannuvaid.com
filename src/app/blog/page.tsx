import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BlogExplorer } from "@/components/BlogExplorer";

export const metadata: Metadata = {
  title: "Pannu Vaid Blog — Health Tips, Herbal Remedies & Wellness",
  description:
    "Read expert Ayurvedic articles on joint pain, arthritis, herbal remedies, lifestyle, and wellness from the Pannu Vaid team in Punjab.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Pannu Vaid Blog"
        title="Wisdom for Natural, Healthy Living"
        description="Practical health advice and Ayurvedic guidance on pain relief, herbal remedies, and wellness from Pannu Vaid."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <section className="section pt-10">
        <div className="container-px">
          <BlogExplorer />
        </div>
      </section>
    </>
  );
}
