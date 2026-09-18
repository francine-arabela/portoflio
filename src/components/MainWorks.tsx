import ProjectCard from "./ProjectCard";
import ChatbotMockup from "./mockups/ChatbotMockup";
import ScamGuardMockup from "./mockups/ScamGuardMockup";

export default function MainWorks() {
  return (
    <section id="works" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="text-center font-mono text-xs tracking-[0.2em] text-accent">MAIN WORKS</p>

      <div className="mt-12 flex flex-col gap-16 sm:gap-20">
        <ProjectCard
          title="Improving Sheridan's student chatbot"
          description="Improved student chatbot during its transition to ServiceNow, enhancing information access and the student support experience."
          tags={["CO-OP", "UX RESEARCH", "CONTENT DESIGN"]}
        >
          <ChatbotMockup />
        </ProjectCard>

        <ProjectCard
          title="Platform for Employment Scams"
          description="Real-time system designed to detect and recover from job scams. Through prevention and real-time mitigation to recovery."
          tags={["RTI SECOND PLACE", "UI/UX DESIGN", "UX RESEARCH"]}
        >
          <ScamGuardMockup />
        </ProjectCard>

        <ProjectCard title="Thesis project" description="In Construction!" tags={["UI/UX", "UX RESEARCH"]}>
          <div className="flex h-full w-full items-center justify-center border-2 border-dashed border-black/10">
            <span className="font-mono text-sm text-accent">Coming Soon!</span>
          </div>
        </ProjectCard>
      </div>
    </section>
  );
}
