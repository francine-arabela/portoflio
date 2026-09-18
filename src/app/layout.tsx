import type { Metadata } from "next";
import { Playfair_Display, Space_Mono, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Francine Arabela Paguio — Product & Visual Designer",
  description:
    "Product & visual designer who is always curious, learning, and growing to create meaningful, human-centered experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${spaceMono.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-paper text-ink">{children}</body>
    </html>
  );
}
