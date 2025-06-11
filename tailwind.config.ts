import type { Config } from "tailwindcss"

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,css}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.svg",
    "./styles/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass,less,styl}",
    "*.{js,ts,jsx,tsx,mdx,css}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#A88C73",
        input: "#A88C73",
        ring: "#A88C73",
        background: "#FDF4E3",
        foreground: "#4B2E2B",
        primary: {
          DEFAULT: "#E6CBA8",
          foreground: "#3B2B28",
        },
        secondary: {
          DEFAULT: "#A88C73",
          foreground: "#FDF4E3",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#E6CBA8",
          foreground: "#3B2B28",
        },
        popover: {
          DEFAULT: "#FDF4E3",
          foreground: "#4B2E2B",
        },
        card: {
          DEFAULT: "#FDF4E3",
          foreground: "#4B2E2B",
        },
      },
      borderRadius: {
        button: "6px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Lato", "sans-serif"],
        heading: ["var(--font-poppins)", "Poppins", "Work Sans", "sans-serif"],
        poppins: ["Poppins", "Work Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
