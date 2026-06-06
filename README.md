# Pannu Vaid — Ayurvedic Healthcare Website

A world-class, ultra-modern, fully responsive website for **Pannu Vaid**, an Ayurvedic healthcare brand based in Samrala, Punjab, India.

## ✨ Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** (custom brand theme from the logo)
- **Framer Motion** (animations, page reveals, parallax)
- **React Icons**
- SEO-optimized architecture, Schema.org JSON-LD, dynamic sitemap & robots
- Mobile-first, Core Web Vitals friendly (all routes prerendered static/SSG)

## 🎨 Brand

Colors are pulled directly from the Pannu Vaid logo and defined in `tailwind.config.ts`:

- `brand` — deep forest → bright leaf green
- `gold` — VAID gold-lime accent
- `earth` — natural earth tones

Fonts: **Fraunces** (display) + **Inter** (body) via `next/font`.

## 📁 Structure

```
src/
├─ app/
│  ├─ layout.tsx            # Root layout, SEO metadata, schema, providers
│  ├─ page.tsx              # Home
│  ├─ about/page.tsx
│  ├─ treatments/page.tsx
│  ├─ treatments/[slug]/    # 11 dynamic treatment pages (SSG)
│  ├─ success-stories/
│  ├─ blog/                 # listing + [slug] articles (SSG)
│  ├─ contact/
│  ├─ sitemap.ts | robots.ts | manifest.ts
│  └─ globals.css
├─ components/              # Navbar (mega menu), Footer, Hero, Carousel,
│                          # Accordion, Counter, ConsultationForm, floating
│                          # WhatsApp/Call, ScrollProgress, Preloader, ThemeToggle...
└─ lib/                     # site config, treatments, blog/testimonials, schema, utils
```

## 🚀 Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
```

## 🔧 Configuration

Edit `src/lib/site.ts` to set the real **phone, WhatsApp number, email, address,
Google Maps embed, and social links**. Set the live domain in `.env`:

```
NEXT_PUBLIC_SITE_URL=https://www.pannuvaid.com
```

> Update `site.url` in `src/lib/site.ts` to match your production domain so
> canonical URLs, sitemap, and schema are correct.

## ✅ Features Implemented

- Sticky animated navbar with treatments **mega menu** + mobile drawer
- Full-screen animated **hero** with parallax & floating herb elements
- Animated **counters**, scroll-triggered reveals, page preloader, scroll progress bar
- **Dark / light mode** (system-aware, persisted)
- Floating **WhatsApp** + **Call** + back-to-top buttons
- 11 **treatment** pages: overview, symptoms, causes, Ayurvedic approach, benefits, FAQ accordion, sticky consultation form, related treatments
- **Success stories**: before/after, video testimonial cards, reviews, carousel
- **Blog** with search, category filters, breadcrumbs, related posts (SSG)
- **Contact**: cards, clinic info, Google Map embed, appointment form → WhatsApp funnel
- **SEO**: per-page metadata, Open Graph, Twitter cards, canonical URLs,
  LocalBusiness + MedicalClinic + FAQ + Article JSON-LD, sitemap.xml, robots.txt, manifest

## ☁️ Deploy to Vercel

1. Push this folder to a Git repo.
2. Import into [Vercel](https://vercel.com/new) (framework auto-detected as Next.js).
3. Add env var `NEXT_PUBLIC_SITE_URL`.
4. Deploy. Security headers are pre-configured in `vercel.json`.

## 📝 Notes / Next Steps

- Replace placeholder hero/blog/treatment image blocks with real photography
  (drop files in `public/` and swap the gradient `div`s for `next/image`).
- Wire the consultation form to a real backend (e.g. Resend, a CRM, or
  `app/api/contact/route.ts`) — it currently confirms via WhatsApp deep-link.
- Swap placeholder phone/email/address in `src/lib/site.ts` with real details.
- Optionally add GSAP for advanced timeline animations (Framer Motion covers
  the current interactions).
```
# pannuvaid.com
