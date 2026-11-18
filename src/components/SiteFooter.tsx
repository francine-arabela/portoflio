import PostcardFooter, { CONTACT_EMAIL } from "./PostcardFooter";

const links = [
  { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/francinearabela" },
  { label: "Are.na", href: "https://www.are.na/francine-paguio/channels" },
];

type SiteFooterProps = {
  /** On the home page the postcard overlaps the white page above it. Other
      pages get white space above the footer for the top of the card. */
  overlap?: boolean;
};

/* Dark footer from francine.design: contact links on the left, copyright on
   the right, and (on desktop) the flip postcard hanging over the top edge. */
export default function SiteFooter({ overlap = false }: SiteFooterProps) {
  return (
    <>
      {overlap ? null : <div aria-hidden="true" className="hidden h-[260px] min-[1200px]:block" />}
      <footer className="relative bg-frame-bg px-4 pb-[50px] pt-[250px] min-[810px]:px-[40px] min-[1200px]:px-[30px] min-[1200px]:pb-[150px]">
        <div className="absolute left-1/2 top-[-225px] z-20 hidden -translate-x-1/2 min-[1200px]:block">
          <PostcardFooter />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-y-[4px] font-inter text-[14px] leading-[1.2] text-white">
          <ul className="flex flex-wrap gap-x-[41px] gap-y-[4px]">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="transition-opacity hover:opacity-70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="ml-auto">Copyright © 2026 Francine Paguio</p>
        </div>
      </footer>
    </>
  );
}
