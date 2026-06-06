import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Pulled from the Pannu Vaid logo
        brand: {
          50: "#f1f9ed",
          100: "#dcf0d0",
          200: "#bbe2a5",
          300: "#92ce70",
          400: "#6fb945",
          500: "#4f9e28", // bright leaf green
          600: "#3a7d1c",
          700: "#2d6118", // deep forest green (PANNU text)
          800: "#264e18",
          900: "#1f4115",
          950: "#0d240a",
        },
        gold: {
          50: "#fbfbe9",
          100: "#f6f6c6",
          200: "#eded8f",
          300: "#dfdc50",
          400: "#cdc628", // VAID gold-lime
          500: "#aea41b",
          600: "#877d16",
          700: "#665e16",
          800: "#564e18",
          900: "#4a4319",
        },
        earth: {
          50: "#faf7f1",
          100: "#f1e9d9",
          200: "#e3d3b3",
          300: "#d1b585",
          400: "#c0985f",
          500: "#b08247",
          600: "#9a6c3c",
          700: "#7f5533",
          800: "#69462f",
          900: "#583b2a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(120% 120% at 50% 0%, rgba(79,158,40,0.18) 0%, rgba(0,0,0,0) 55%)",
        "brand-gradient":
          "linear-gradient(135deg, #2d6118 0%, #4f9e28 55%, #cdc628 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31, 65, 21, 0.18)",
        soft: "0 10px 40px -12px rgba(31, 65, 21, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
