import Link from "next/link";

const navLinks = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Playground", href: "#playground" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-black/5 bg-paper/90 px-6 py-4 backdrop-blur-sm sm:px-10">
      <Link href="#top" className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5">
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <circle cx="16" cy="12" r="6" fill="#1c1c1c" />
          <path
            d="M6 30c0-6.5 4.5-11 10-11s10 4.5 10 11"
            fill="none"
            stroke="#1c1c1c"
            strokeWidth="2"
          />
          <path d="M10 9c0-4 3-7 6-7s6 3 6 7" fill="#1c1c1c" />
        </svg>
        <span className="sr-only">Francine Arabela Paguio</span>
      </Link>

      <nav className="flex gap-4 font-mono text-[11px] tracking-wide text-ink-soft sm:gap-10 sm:text-[13px]">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="transition-colors hover:text-ink">
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 font-mono text-[11px] text-paper transition-opacity hover:opacity-85 sm:px-4 sm:py-2 sm:text-[13px]"
      >
        Resume
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
