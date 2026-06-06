import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pannu Vaid — Ayurvedic Healing",
    short_name: "Pannu Vaid",
    description:
      "Natural Ayurvedic treatment for joint pain, arthritis, and wellness in Samrala, Punjab.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2d6118",
    icons: [
      { src: "/logo.png", sizes: "any", type: "image/png" },
    ],
  };
}
