import PostcardFooter from "./PostcardFooter";

/* Footer used by the case study pages: the postcard on the dark frame
   colour, with contact links underneath. */
export default function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-frame-bg px-3 pb-8 pt-16 sm:pt-24">
      <div className="mx-auto w-full max-w-[680.37px]">
        <PostcardFooter />
      </div>

      <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-4 px-6 font-dm-mono text-[11px] text-white/60 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href="mailto:francinearabela.paguio@gmail.com" className="transition-colors hover:text-white">
            francinearabela.paguio@gmail.com
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
            LinkedIn
          </a>
          <a href="https://www.are.na" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
            Are.na
          </a>
        </div>
        <p>Copyright © {new Date().getFullYear()} Francine Paguio</p>
      </div>
    </footer>
  );
}
