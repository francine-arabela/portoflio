import localFont from "next/font/local";
import { DM_Mono, DM_Sans, Inter } from "next/font/google";

/* Fonts used on francine.design (the Framer site). The custom ones are the
   same font files uploaded to the Framer project. */

export const helvetica = localFont({
  src: "../fonts/helvetica-regular.woff2",
  variable: "--font-helvetica",
  weight: "400",
  display: "swap",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

export const mackinacBook = localFont({
  src: "../fonts/mackinac-pro-book.woff2",
  variable: "--font-mackinac-book",
  weight: "350",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const mackinac = localFont({
  src: [
    { path: "../fonts/mackinac-regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/mackinac-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-mackinac",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const feroniapi = localFont({
  src: "../fonts/feroniapi-medium-italic.woff2",
  variable: "--font-feroniapi",
  weight: "500",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
});
