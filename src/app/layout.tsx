import type { Metadata } from "next";
import {
  Playfair_Display,
  Space_Mono,
  Inter,
  DM_Mono,
  Fraunces,
  Archivo_Narrow,
  Caveat,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Figma "Portfolio 2026" fonts. The design uses Adobe fonts (P22 Mackinac Pro,
// Elza Narrow, Adobe Handwriting Ernie); these are the closest Google Fonts.
const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const fraunces = Fraunces({
  variable: "--font-serif-book",
  subsets: ["latin"],
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-narrow",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Francine Arabela Paguio — UI/UX & Visual Designer",
  description:
    "UI/UX & visual designer who is always curious, learning, and growing to create meaningful, human-centered experiences.",
};

// Adobe Fonts web project ID (fonts.adobe.com → Web Projects), e.g. "abc1234".
// Set it in Vercel's environment variables to load the real design fonts.
const adobeFontsKit = process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${spaceMono.variable} ${inter.variable} ${dmMono.variable} ${fraunces.variable} ${archivoNarrow.variable} ${caveat.variable} antialiased`}
    >
      {adobeFontsKit ? (
        <head>
          <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
          <link rel="stylesheet" href={`https://use.typekit.net/${adobeFontsKit}.css`} />
        </head>
      ) : null}
      <body className="bg-paper text-ink">{children}</body>
    </html>
  );
}
