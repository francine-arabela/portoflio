import Link from "next/link";

const navLinks = [
  { label: "WORKS", href: "/#works" },
  { label: "ABOUT", href: "/#about" },
  { label: "PLAYGROUND", href: "/#playground" },
];

function Logo() {
  return (
    <span className="relative block h-[42.807px] w-[28px]" aria-hidden="true">
      {/* eslint-disable @next/next/no-img-element */}
      <img src="/figma/logo-group.svg" alt="" width={28} height={41.763} className="absolute left-0 top-0" />
      <img src="/figma/logo-v1.svg" alt="" width={2.741} height={3.766} className="absolute left-[3.88px] top-[38.6px]" />
      <img src="/figma/logo-v2.svg" alt="" width={3.217} height={4.844} className="absolute left-[8.09px] top-[37.96px]" />
      <img src="/figma/logo-v3.svg" alt="" width={3.092} height={0.641} className="absolute left-[9px] top-[13.2px]" />
      {/* eslint-enable @next/next/no-img-element */}
    </span>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-[85px] bg-white">
      <div className="mx-auto grid h-full max-w-[1031px] grid-cols-[1fr_auto_1fr] items-center px-6 sm:items-start sm:pl-[23px] sm:pr-[13px]">
        <Link href="/" className="justify-self-start sm:mt-[26px]">
          <Logo />
          <span className="sr-only">Francine Paguio, home</span>
        </Link>

        <nav className="flex gap-3 sm:mt-[39px] font-dm-mono text-[10px] tracking-[0.05em] text-text-muted sm:gap-[41px] sm:text-[13px]">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex w-fit items-center justify-center gap-[1.937px] justify-self-end sm:mt-[32px] sm:w-[99.823px] rounded-[7.959px] bg-brand px-2 py-1 font-dm-mono text-[11px] sm:px-[10px] sm:py-[6px] sm:text-[13.562px] font-medium text-white transition-opacity hover:opacity-85"
        >
          RESUME
          <span className="flex h-[10.975px] w-[8.087px] items-center justify-center" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/arrow-resume.svg" alt="" width={14.377} height={10.962} className="max-w-none shrink-0 -rotate-[53.62deg]" />
          </span>
        </a>
      </div>
    </header>
  );
}
