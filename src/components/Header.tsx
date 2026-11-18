"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Works", href: "/#works" },
  { label: "About", href: "/#about" },
  { label: "Playground", href: "/#playground" },
];

const RESUME_HREF =
  "https://www.dropbox.com/scl/fi/d1msjxrrrqar8g2thui0j/francinedesign_resume2026.pdf?rlkey=j7v25148safpjklcgs6cd8cnc&st=fce0b9pg&dl=0";

/* Header from francine.design: logo, three links and the red Resume button
   on desktop and tablet; a logo and a menu toggle on phones. */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-40 bg-white">
      {/* Desktop and tablet */}
      <div className="mx-auto hidden h-[133px] w-full max-w-[643px] -translate-x-[9px] items-center min-[810px]:flex min-[1200px]:max-w-[1019px]">
        <Link href="/" className="block shrink-0" aria-label="Francine Paguio, home">
          <img src="/framer/logo.svg" alt="" width={36} height={56} className="h-[56px] w-[36px]" />
        </Link>

        <nav className="ml-[98px] flex gap-2 min-[1200px]:ml-[235px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex h-[80px] w-[105px] items-center justify-center font-helvetica text-[16px] leading-[1.3] tracking-[-0.1px] text-text-muted transition-transform duration-200 hover:-translate-y-0.5 min-[1200px]:w-[144px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={RESUME_HREF}
          target="_blank"
          rel="noreferrer"
          className="ml-auto flex h-[34px] w-[104px] items-center justify-center gap-[11px] rounded-[5px] bg-[#8b0203] font-inter text-[16px] leading-[1.3] tracking-[-0.1px] text-off-white transition-opacity duration-200 hover:opacity-80"
        >
          Resume
          <img src="/framer/arrow-resume.svg" alt="" width={11} height={13} className="h-[13px] w-[11px]" />
        </a>
      </div>

      {/* Phone */}
      <div className="flex h-[104px] items-start justify-between px-4 pt-4 min-[810px]:hidden">
        <Link href="/" aria-label="Francine Paguio, home" onClick={() => setMenuOpen(false)}>
          <img src="/framer/logo-phone.svg" alt="" width={46} height={37} className="h-[37px] w-[46px] object-contain" />
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="phone-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative mt-[3px] h-[30px] w-[30px]"
        >
          <span
            className={`absolute left-[8.5px] top-[11px] h-[2px] w-[13px] bg-[#33302b] transition-transform duration-300 ${
              menuOpen ? "translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`absolute left-[8.5px] top-[17px] h-[2px] w-[13px] bg-[#33302b] transition-all duration-300 ${
              menuOpen ? "-translate-y-[3px] opacity-0" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="phone-menu"
          className="absolute inset-x-0 top-[104px] z-50 h-[calc(100dvh-104px)] border-t border-[#d8c8b0] bg-white px-6 pt-[70px] min-[810px]:hidden"
        >
          <ul className="flex flex-col gap-[16px] font-inter text-[17px] text-[#33302b]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={RESUME_HREF} target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
