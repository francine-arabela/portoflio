import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import CaseStudySidebar from "@/components/case-study/CaseStudySidebar";
import SheridanPortalMockup from "@/components/case-study/SheridanPortalMockup";

export const metadata: Metadata = {
  title: "Improving Sheridan's student chatbot — Francine Arabela Paguio",
  description:
    "Case study: improving Sheridan's student chatbot during its transition to ServiceNow.",
};

const PAGE_TITLE = "Improving Sheridan's student chatbot";

function Section({ id, kicker, children }: { id: string; kicker: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-14 first:pt-0">
      <p className="font-mono text-xs tracking-[0.2em] text-accent">{kicker}</p>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function ProblemCard({ number, title, quote, citation }: { number: string; title: string; quote: string; citation?: string }) {
  return (
    <div className="rounded-md bg-card-bg p-5">
      <p className="font-mono text-xs text-ink-faint">{number}</p>
      <p className="mt-2 text-sm font-medium leading-snug text-ink">{title}</p>
      <blockquote className="mt-3 border-l-2 border-accent/40 pl-3 text-xs italic leading-relaxed text-ink-soft">
        “{quote}”
      </blockquote>
      {citation && <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-ink-faint">— {citation}</p>}
    </div>
  );
}

function BeforeAfter({
  beforeLabel = "Before",
  afterLabel = "After",
  before,
  after,
}: {
  beforeLabel?: string;
  afterLabel?: string;
  before: ReactNode;
  after: ReactNode;
}) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <span className="rounded-full bg-black/5 px-3 py-1 font-mono text-[10px] text-ink-soft">{beforeLabel}</span>
        <div className="mt-3 overflow-hidden rounded-md border border-black/10 bg-card-bg">{before}</div>
      </div>
      <div>
        <span className="rounded-full bg-black/5 px-3 py-1 font-mono text-[10px] text-ink-soft">{afterLabel}</span>
        <div className="mt-3 overflow-hidden rounded-md border border-black/10 bg-card-bg">{after}</div>
      </div>
    </div>
  );
}

function TopicChip({ children }: { children: ReactNode }) {
  return (
    <div className="relative rounded-sm bg-sticky-blue px-3 py-4 text-[11px] leading-snug text-ink-soft shadow-sm">
      {children}
      <span className="absolute bottom-1 right-1.5 h-0 w-0 border-b-[9px] border-l-[9px] border-b-transparent border-l-[#8fb3d9]" />
    </div>
  );
}

function ProcessCard({ title, body, insight }: { title: string; body: string; insight: string }) {
  return (
    <div className="rounded-md bg-card-bg p-5">
      <p className="text-sm font-medium text-ink">{title}</p>
      <p className="mt-2 text-xs leading-relaxed text-ink-soft">{body}</p>
      <p className="mt-3 text-xs leading-relaxed text-ink">
        <span className="font-medium">Insight:</span> {insight}
      </p>
    </div>
  );
}

function TestingCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center rounded-md bg-card-bg p-6 text-center text-xs leading-relaxed text-ink-soft">
      {children}
    </div>
  );
}

const dropoffColumns: { heading: string; rows: { text: string; flagged?: boolean }[] }[] = [
  {
    heading: "Greeting",
    rows: [
      { text: "Sign-in prompt", flagged: true },
      { text: "Chatbot introduces itself" },
      { text: "Asks how it can help" },
    ],
  },
  {
    heading: "Conversation",
    rows: [
      { text: "Student describes issue" },
      { text: "Chatbot matches intent", flagged: true },
      { text: "Chatbot asks clarifying question", flagged: true },
    ],
  },
  {
    heading: "Understanding",
    rows: [
      { text: "Chatbot confirms request" },
      { text: "Provides relevant article" },
    ],
  },
  {
    heading: "Ending",
    rows: [
      { text: "Chatbot gives incorrect answer", flagged: true },
      { text: "Asks for feedback" },
    ],
  },
];

const dropoffDetails = [
  {
    label: "Greeting",
    detail:
      "Some students dropped off right after the sign-in prompt, before ever reaching the chatbot's first message.",
  },
  {
    label: "Conversation",
    detail:
      "The biggest drop-off happened when the chatbot misread intent and asked an unnecessary clarifying question.",
  },
  {
    label: "Ending",
    detail:
      "Students who received an incorrect answer left the conversation immediately, without asking a follow-up question.",
  },
];

export default function SheridanChatbotCaseStudy() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-12 sm:pt-16">
        <h1 className="font-display text-3xl leading-snug text-ink sm:hidden">{PAGE_TITLE}</h1>

        <div className="flex flex-col gap-12 sm:flex-row sm:gap-16">
          <CaseStudySidebar title={PAGE_TITLE} />

          <div className="min-w-0 flex-1">
            <SheridanPortalMockup />

            <dl className="mt-8 grid grid-cols-2 gap-6 border-b border-black/10 pb-10 text-sm sm:grid-cols-4">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">Role</dt>
                <dd className="mt-2 space-y-1 text-ink-soft">
                  <p>UX Researcher</p>
                  <p>Content Designer</p>
                  <p>Platform Associate</p>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">Duration</dt>
                <dd className="mt-2 text-ink-soft">4 months</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">Tools</dt>
                <dd className="mt-2 space-y-1 text-ink-soft">
                  <p>Figma</p>
                  <p>ServiceNow</p>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">Team</dt>
                <dd className="mt-2 space-y-1 text-ink-soft">
                  <p>Me!</p>
                  <p>Farwa Babar</p>
                  <p>Christopher Bourne</p>
                </dd>
              </div>
            </dl>

            <Section id="problem-overview" kicker="PROBLEM OVERVIEW">
              <h2 className="font-display text-2xl text-ink">Chatbot Improvement</h2>
              <p className="text-sm leading-relaxed text-ink-soft">
                Every semester, thousands of students rely on the student chatbot for important school
                information. We focused on making answers clearer, more accurate, and easier to find.
              </p>
            </Section>

            <Section id="problem-space" kicker="PROBLEM SPACE">
              <h2 className="font-display text-2xl text-ink">Questions Were Left Unanswered</h2>
              <p className="text-sm leading-relaxed text-ink-soft">
                By reviewing past student logs and ratings, we identified three core areas for improvement,
                based on common issues students frequently encountered, like poorly answered high-traffic
                questions.
              </p>

              <div className="mt-6 max-w-sm space-y-2 rounded-md bg-card-bg p-5">
                <div className="ml-auto w-fit rounded-md rounded-br-none bg-[#0b2a52] px-3 py-2 text-xs text-white">
                  When is convocation?
                </div>
                <div className="w-fit rounded-md rounded-tl-none bg-white px-3 py-2 text-xs text-ink-soft shadow-sm">
                  Sorry, I am unable to answer this right now.
                </div>
              </div>
              <p className="text-xs text-ink-faint">
                Students failed to receive an answer from the previous ServiceNow chatbot iteration.
              </p>
            </Section>

            <Section id="main-problem-areas" kicker="MAIN PROBLEM AREAS">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ProblemCard
                  number="01"
                  title="Information gaps in topic coverage left important content unanswered."
                  quote="Some of my questions have gone through an entire semester and haven't been answered yet."
                  citation="Student survey"
                />
                <ProblemCard
                  number="02"
                  title="Some existing topics were overloaded, trying to handle too many different questions."
                  quote="Multiple health-related topics were combined, even though each one needed a more personalized response."
                />
                <ProblemCard
                  number="03"
                  title="Some topics weren't triggering properly for the way students actually phrase things."
                  quote="Many students were asking for help but phrased it like a complaint, so it went unanswered."
                />
                <ProblemCard
                  number="04"
                  title="There weren't consistent messaging patterns across topics."
                  quote="I never got a notification or reply — my comment sat unanswered for weeks."
                  citation="Student survey"
                />
              </div>
              <div className="mx-auto mt-4 sm:w-1/2 sm:pr-2">
                <ProblemCard
                  number="05"
                  title="There was a gap in escalation handling, with counselors overriding the chatbot, leading to a lack of trust in the system."
                  quote="Escalated cases were left sitting for months at a time."
                />
              </div>
            </Section>

            <Section id="key-improvements" kicker="KEY IMPROVEMENTS">
              <h3 className="font-display text-xl text-ink">Greeting Message</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                <span className="font-medium text-ink">Before:</span> The sign-in form was a pain point for
                students because it was tedious, and they didn&apos;t see the value it added.
              </p>
              <p className="text-sm leading-relaxed text-ink-soft">
                <span className="font-medium text-ink">After:</span> We replaced it with a single sign-on
                (SSO) flow and moved a linked chatbot guide to onboard students instead.
              </p>
              <BeforeAfter
                before={
                  <div className="p-3">
                    <div className="rounded-t-sm bg-[#0b2a52] px-3 py-2 text-center text-[10px] font-medium text-white">
                      Welcome Back
                    </div>
                    <div className="space-y-2 bg-white p-3">
                      <div className="h-2 w-1/3 rounded bg-black/10" />
                      <div className="h-6 rounded border border-black/10" />
                      <div className="h-2 w-1/4 rounded bg-black/10" />
                      <div className="h-6 rounded border border-black/10" />
                      <div className="ml-auto h-5 w-16 rounded-full bg-[#0b2a52]" />
                    </div>
                  </div>
                }
                after={
                  <div className="space-y-2 bg-white p-3">
                    <div className="w-fit rounded-md rounded-tl-none bg-[#f2f5fa] px-3 py-2 text-[10px] text-ink-soft">
                      Hi! I&apos;m the Sheridan chatbot. How can I help you today?
                    </div>
                    <div className="ml-auto w-fit rounded-full bg-[#e6007e]/10 px-3 py-1 text-[10px] font-medium text-[#0b2a52]">
                      Get Started
                    </div>
                  </div>
                }
              />

              <h3 className="mt-10 font-display text-xl text-ink">Conversation Matching</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                Added more diverse phrasing (synonyms) based on real student queries. This triggered more
                relevant conversation topics based on how students actually phrase their questions.
              </p>

              <h3 className="mt-10 font-display text-xl text-ink">Ending Message</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                <span className="font-medium text-ink">Before:</span> A mandatory rating and feedback prompt
                discouraged students from finishing the conversation.
              </p>
              <p className="text-sm leading-relaxed text-ink-soft">
                <span className="font-medium text-ink">After:</span> The ending message is now optional and
                personalized for students, staff, and faculty.
              </p>
              <BeforeAfter
                before={
                  <div className="space-y-2 bg-white p-3">
                    <div className="w-fit rounded-md rounded-tl-none bg-[#f2f5fa] px-3 py-2 text-[10px] text-ink-soft">
                      Please rate this conversation before you go.
                    </div>
                    <div className="flex gap-1 text-sm">★★★★★</div>
                    <div className="h-10 rounded border border-black/10" />
                    <div className="ml-auto h-5 w-20 rounded-full bg-[#0b2a52]" />
                  </div>
                }
                after={
                  <div className="space-y-2 bg-white p-3">
                    <div className="w-fit rounded-md rounded-tl-none bg-[#f2f5fa] px-3 py-2 text-[10px] text-ink-soft">
                      Glad I could help! Want to rate this chat?
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full bg-[#e6007e]/10 px-3 py-1 text-[10px] font-medium text-[#0b2a52]">
                        Sure
                      </span>
                      <span className="rounded-full bg-black/5 px-3 py-1 text-[10px] text-ink-soft">
                        No thanks
                      </span>
                    </div>
                  </div>
                }
              />

              <h3 className="mt-10 font-display text-xl text-ink">Added New Conversation Topics (Intents)</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                We identified 8 topics that needed to be added to the chatbot, based on high-traffic
                conversations that didn&apos;t have an answer.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <TopicChip>Verifying Log-in Details</TopicChip>
                <TopicChip>Learning Materials</TopicChip>
                <TopicChip>Response Time</TopicChip>
                <TopicChip>How to Actively Seek Help</TopicChip>
                <TopicChip>Providing Diploma</TopicChip>
                <TopicChip>Failed Course</TopicChip>
                <TopicChip>Application Assistance</TopicChip>
                <TopicChip>Student Advisement</TopicChip>
              </div>
            </Section>

            <Section id="our-process" kicker="OUR PROCESS">
              <h3 className="font-display text-xl text-ink">Learning About Conversational Design</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                This was my first time working on a chatbot, so I wanted to understand the space and
                existing industry standards before jumping into design.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <ProcessCard
                  title="Competitor Analysis"
                  body="We looked through similar student-facing chatbots to see what tone and structure they used."
                  insight="Bolded, structured responses were easier for students to skim."
                />
                <ProcessCard
                  title="Response Design"
                  body="We reviewed which message structures felt most helpful and least robotic."
                  insight="Short, direct answers with a follow-up option performed best."
                />
                <ProcessCard
                  title="Best Practices for Chatbots"
                  body="Research into general chatbot UX gave us a shared vocabulary for our reviews."
                  insight="Consistent tone builds trust faster than a longer, more detailed answer."
                />
              </div>

              <h3 className="mt-10 font-display text-xl text-ink">Chatbot Testing</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                We focused our chatbot testing on conversation flow by walking through real student queries
                from chatbot logs, tickets, and high-traffic topics. We tested based on:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <TestingCard>Prompting with different language and different student phrasing</TestingCard>
                <TestingCard>Accuracy of responses to common and high-traffic student questions</TestingCard>
                <TestingCard>Tone and clarity of messages</TestingCard>
                <TestingCard>How well student intent was detected and routed</TestingCard>
              </div>

              <h3 className="mt-10 font-display text-xl text-ink">Identifying Drop-off Points</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                Using real student query logs, we identified the main stages of the chatbot&apos;s user
                flow. One of the most common drop-off points was when the chatbot provided an incorrect
                answer, which caused students to exit the chat before finding a resolution.
              </p>

              <div className="grid grid-cols-2 gap-3 overflow-x-auto sm:grid-cols-4">
                {dropoffColumns.map((col) => (
                  <div key={col.heading}>
                    <p className="border-b border-black/10 pb-2 font-mono text-[10px] uppercase tracking-wide text-ink">
                      {col.heading}
                    </p>
                    <ul className="mt-2 space-y-2">
                      {col.rows.map((row) => (
                        <li
                          key={row.text}
                          className={`rounded px-2 py-1.5 text-[10px] leading-snug ${
                            row.flagged ? "bg-red-50 text-red-700" : "text-ink-soft"
                          }`}
                        >
                          {row.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
                {dropoffDetails.map((item) => (
                  <details key={item.label} className="group py-3">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm text-ink">
                      {item.label}
                      <span className="text-ink-faint transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-2 text-xs leading-relaxed text-ink-soft">{item.detail}</p>
                  </details>
                ))}
              </div>
            </Section>

            <Section id="lessons-learned" kicker="LESSONS LEARNED">
              <ol className="space-y-4">
                <li className="flex gap-4 rounded-md bg-card-bg p-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sticky-blue text-xs font-medium text-ink">
                    1
                  </span>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    <span className="font-medium text-ink">Conversational design:</span> Learned how to
                    write clearer, more concise chatbot messages that feel human and easy to follow.
                  </p>
                </li>
                <li className="flex gap-4 rounded-md bg-card-bg p-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sticky-blue text-xs font-medium text-ink">
                    2
                  </span>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    <span className="font-medium text-ink">Working with ServiceNow:</span> Learned how to
                    navigate platform limitations, timelines, and cross-team workflows. Adjusted our goals
                    based on what was realistically possible.
                  </p>
                </li>
              </ol>
            </Section>

            <Section id="next-steps" kicker="NEXT STEPS">
              <p className="text-sm leading-relaxed text-ink-soft">
                To measure the impact of these improvements, we&apos;re looking at chatbot KPIs already
                available within the platform&apos;s analytics, such as:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-md bg-card-bg p-5">
                  <p className="text-sm font-medium text-ink">Chatbot resolution rate</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                    How often the chatbot answers questions without needing a live agent.
                  </p>
                </div>
                <div className="rounded-md bg-card-bg p-5">
                  <p className="text-sm font-medium text-ink">Conversation drop-off rate</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                    Where students leave before completing the conversation.
                  </p>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
