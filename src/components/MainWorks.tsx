/* eslint-disable @next/next/no-img-element */
import ProjectCard from "./ProjectCard";

/* All image frames are 596 × 385.5 in Figma; inner positions are kept as
   percentages of that box so the frames scale down on small screens. */
const frameClass =
  "relative aspect-[596/385.5] w-full overflow-hidden border border-dashed border-[#a6a6a6] bg-tag-bg";

function LaptopFrame() {
  return (
    <div className={frameClass}>
      {/* laptop: 527 × 295.18 at (33.29, 43.58) */}
      <div className="absolute left-[5.586%] top-[11.305%] aspect-[527/295.18] w-[88.423%]">
        <img src="/figma/laptop-bezel.svg" alt="" className="absolute left-[9.5%] top-0 h-[98.18%] w-[81.01%]" />
        <img src="/figma/laptop-screen-frame.svg" alt="" className="absolute left-[10.13%] top-[0.92%] h-[93.35%] w-[79.78%]" />
        <div className="absolute inset-[6.8%_12.32%_10.3%_12.32%] overflow-hidden bg-frame-bg">
          <img
            src="/figma/chatbot-screen.png"
            alt="Sheridan student chatbot screens"
            className="absolute left-[-82.68%] top-[-54.64%] h-[168.61%] w-[184%] max-w-none"
          />
        </div>
        <img src="/figma/laptop-base.svg" alt="" className="absolute bottom-0 left-0 h-[2.95%] w-full" />
      </div>
    </div>
  );
}

function ScreenshotFrame() {
  return (
    <div className={frameClass}>
      {/* screenshot: 494 × 356 at (101.29, 26.65) */}
      <div className="absolute left-[16.995%] top-[6.913%] h-[92.348%] w-[82.886%] overflow-hidden rounded-tl-[21.579px] border-[1.022px] border-[#c2c2c2]">
        <img
          src="/figma/scamguard-screen.png"
          alt="Safe Guard dashboard for detecting employment scams"
          className="absolute left-[-10.22%] top-[-3.97%] h-[104.09%] w-[116.41%] max-w-none"
        />
      </div>
    </div>
  );
}

function ComingSoonFrame() {
  return (
    <div className="relative flex aspect-[595.937/385.355] w-full items-center justify-center border border-dashed border-[#999] bg-white">
      <span className="p-[8.526px] font-narrow text-[20.461px] text-brand">Coming Soon!</span>
    </div>
  );
}

export default function MainWorks() {
  return (
    <section id="works" className="mx-auto flex max-w-[1077.65px] flex-col items-center gap-[37px] px-6 pb-16 lg:pb-[262px]">
      <p className="font-dm-mono text-[15.842px] tracking-[0.05em] text-brand">MAIN WORKS</p>

      <div className="flex w-full flex-col gap-20 lg:gap-[110.851px]">
        <ProjectCard
          title="Improving Sheridan’s student chatbot"
          description="Improved student chatbot during its transition to ServiceNow, enhancing information access and the student support experience."
          tags={["UX Research", "Content Design"]}
          href="/works/sheridan-chatbot"
        >
          <LaptopFrame />
        </ProjectCard>

        <ProjectCard
          title="Platform for Employment Scams"
          description="Real-time system designed to detect and recover from job scams. It protects users throughout the entire search process—from prevention and real-time mitigation to recovery."
          tags={["UX Research"]}
        >
          <ScreenshotFrame />
        </ProjectCard>

        <ProjectCard title="Thesis Project" description="In Construction!" tags={["UI/UX", "UX Research"]} muted>
          <div className="lg:pt-[38px]">
            <ComingSoonFrame />
          </div>
        </ProjectCard>
      </div>
    </section>
  );
}
