import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainWorks from "@/components/MainWorks";
import PostcardFooter from "@/components/PostcardFooter";

/* Home page, built from Figma "Portfolio 2026" frame 625:1234: a white
   1351px page on a dark frame, with the postcard hanging off the bottom edge
   (half of it overlaps the white page). */
export default function Home() {
  return (
    <div className="min-h-screen bg-frame-bg px-3 pb-[92px] pt-3 sm:px-[45px] sm:pt-10">
      <div className="mx-auto max-w-[1351px] bg-white">
        <Header />
        <main>
          <Hero />
          <MainWorks />
          {/* Reserves the top half of the postcard inside the white page. */}
          <div className="mx-auto aspect-[680.37/215.2] w-full max-w-[680.37px]" aria-hidden="true" />
        </main>
      </div>

      <footer className="relative mx-auto aspect-[680.37/215.2] w-full max-w-[680.37px] lg:translate-x-[29.5px]">
        <div className="absolute inset-x-0 bottom-0 h-[200%]">
          <PostcardFooter />
        </div>
      </footer>
    </div>
  );
}
