import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingActions } from "@/components/FloatingActions";
import { Preloader } from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pannu Vaid | Ayurvedic Treatment & Natural Healing in Punjab",
    template: "%s | Pannu Vaid",
  },
  description: site.description,
  keywords: [
    "Pannu Vaid",
    "Ayurveda Punjab",
    "Ayurvedic Treatment",
    "Knee Pain Treatment",
    "Arthritis Treatment",
    "Joint Pain Relief",
    "Ayurvedic Doctor Punjab",
    "Natural Healing",
    "Herbal Treatment",
    "Ayurveda Clinic Punjab",
  ],
  authors: [{ name: "Pannu Vaid" }],
  creator: "Pannu Vaid",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Pannu Vaid | Ayurvedic Treatment & Natural Healing in Punjab",
    description: site.description,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Pannu Vaid" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pannu Vaid | Ayurvedic Treatment & Natural Healing in Punjab",
    description: site.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b150a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema} />
        <ThemeProvider>
          <Preloader />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
