/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainWorks from "@/components/MainWorks";
import SiteFooter from "@/components/SiteFooter";

/* Home page, matched to francine.design. On desktop (≥1200px) the white page
   sits inside a dark frame with a 30px margin; on tablet and phone it fills
   the screen. The bottom-right corner of the white page is folded over. */
export default function Home() {
  return (
    <div className="overflow-x-clip bg-white min-[1200px]:bg-frame-bg min-[1200px]:pt-[30px]">
      <div className="relative bg-white pb-[110px] min-[1200px]:mx-[30px] pt-[30px] min-[810px]:pb-[300px] min-[1200px]:pt-0 min-[1200px]:pb-[435px]">
        <Header />
        <main>
          <div className="pt-[174px] min-[810px]:pt-[200px] min-[1200px]:pt-[135px]">
            <Hero />
          </div>
          <div className="mt-[118px]">
            <MainWorks />
          </div>
        </main>
        <img
          src="/framer/page-fold.svg"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-[73px] w-[73px]"
        />
      </div>
      <SiteFooter overlap />
    </div>
  );
}
