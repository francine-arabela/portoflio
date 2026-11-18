/* eslint-disable @next/next/no-img-element */
import ProjectCard from "./ProjectCard";

/* "Main works" from francine.design: three project rows. */
export default function MainWorks() {
  return (
    <section id="works" className="mx-auto flex w-full max-w-[1030px] flex-col items-center px-[30px] min-[810px]:px-[40px] min-[1200px]:px-0">
      <h2 className="font-helvetica text-[15.84px] tracking-[0.05em] text-brand">MAIN WORKS</h2>

      <div className="mt-[61px] flex w-full flex-col gap-[103px] min-[810px]:gap-[110.85px]">
        <ProjectCard
          href="/works/sheridan-chatbot"
          className="py-[22px] min-[810px]:py-[33px]"
          title={
            <>
              Improving Sheridan’s student chatbot <em className="italic">(Shipped 2025)</em>
            </>
          }
          description="Improved student chatbot during its transition to ServiceNow, enhancing information access and the student support experience."
          tags={["Co-Op", "UX Research", "Content Design"]}
        >
          <img
            src="/framer/project-chatbot.png"
            alt="Sheridan student chatbot shown on a laptop"
            className="h-[414px] w-full max-w-[583px] object-contain min-[810px]:h-[303px] min-[1200px]:h-[414px]"
          />
        </ProjectCard>

        <ProjectCard
          className="py-[20px] min-[810px]:py-[31px]"
          title="Platform for Employment Scams"
          description="Real-time system designed to detect and recover from job scams. Through prevention and real-time mitigation to recovery."
          tags={["RTI Second Place", "UI/UX Design", "UX Research"]}
        >
          <div className="aspect-[596/386] w-full max-w-[596px] overflow-hidden bg-tag-bg">
            <img
              src="/framer/project-scamguard.png"
              alt="Safe Guard dashboard for detecting employment scams"
              className="h-full w-full object-cover"
            />
          </div>
        </ProjectCard>

        <ProjectCard
          narrowText
          title={
            <>
              Designing for an Accessibility Startup <em className="italic">(Shipped 2026)</em>
            </>
          }
          description="In Construction!"
          tags={["UX Research", "Product Design"]}
        >
          <div className="relative aspect-[1.44] w-full max-w-[596px] border border-dashed border-[#999] bg-white">
            <span className="absolute left-[52%] top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-helvetica text-[16px] text-brand min-[1200px]:text-[20.46px]">
              Coming Soon!
            </span>
          </div>
        </ProjectCard>
      </div>
    </section>
  );
}
