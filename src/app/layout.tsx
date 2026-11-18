import type { Metadata } from "next";
import { Playfair_Display, Space_Mono, Inter as InterSans } from "next/font/google";
import { dmMono, dmSans, feroniapi, helvetica, inter, mackinac, mackinacBook } from "./fonts";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

// Fonts used by the case study page.
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

const interSans = InterSans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francine Arabela Paguio — Product Designer",
  description:
    "Product designer who is always curious, learning, and growing to create meaningful, people-centered experiences.",
};

const fontVariables = [
  playfair,
  spaceMono,
  interSans,
  helvetica,
  mackinacBook,
  mackinac,
  feroniapi,
  inter,
  dmSans,
  dmMono,
]
  .map((font) => font.variable)
  .join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body className="bg-paper text-ink">
        <SmoothScroll />
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
