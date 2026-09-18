import PostcardFooter from "./PostcardFooter";

export default function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-footer-bg pt-24 pb-8 sm:pt-28">
      <PostcardFooter />

      <div className="mx-auto mt-24 flex max-w-5xl flex-col items-center justify-between gap-4 px-6 pt-12 font-mono text-[11px] text-white/60 sm:mt-28 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href="mailto:francinearabela.paguio@gmail.com" className="transition-colors hover:text-white">
            francinearabela.paguio@gmail.com
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://www.are.na"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            Are.na
          </a>
        </div>
        <p>Copyright © {new Date().getFullYear()} Francine Paguio</p>
      </div>
    </footer>
  );
}
