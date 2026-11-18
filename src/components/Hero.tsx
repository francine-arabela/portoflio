/* eslint-disable @next/next/no-img-element */
import DraggableNote from "./DraggableNote";
import { BluePaper, GreenPaper, YellowNote } from "./StickyNote";

/* Hero from francine.design. Framer lays it out on a 924 × 636 box that stays
   centred at every screen size; the notes are pinned inside that box and move
   on tablet and phone. Positions are the Framer values (top-left, before
   rotation). */
export default function Hero() {
  return (
    <section id="about" className="relative h-[636px]">
      <div className="absolute left-1/2 top-0 h-[636px] w-[924px] -translate-x-1/2">
        <div className="absolute left-[49%] top-[43px] flex w-[463px] -translate-x-1/2 flex-col items-center text-center">
          <p className="font-helvetica text-[13px] leading-[1.62] tracking-[0.05em] text-text-strong min-[810px]:text-[15px]">
            PRODUCT DESIGNER
          </p>
          <h1 className="mt-[37px] w-[300px] font-mackinac-book text-[50px] font-[350] leading-[1.19] text-brand min-[810px]:w-full min-[810px]:text-[60px]">
            Francine Arabela Paguio
          </h1>
          <img
            src="/framer/plant.png"
            alt=""
            width={121}
            height={102}
            className="mt-[92px] h-[102px] w-[121px] min-[810px]:mt-[56px]"
          />
          <p className="mt-[39px] w-[330px] font-helvetica text-[17px] leading-[1.2] text-text-body">
            A designer who is always curious, learning, and growing to create meaningful,
            people-centered experiences.
          </p>
        </div>

        {/* Yellow sticky note */}
        <DraggableNote
          rotate={6}
          className="absolute left-[503.5px] top-[-143px] min-[810px]:left-[695px] min-[810px]:top-[7px]"
        >
          <YellowNote />
        </DraggableNote>

        {/* Green "open for work" note (not draggable on the Framer site) */}
        <div className="absolute left-[516.5px] top-[311.5px] -rotate-4 min-[810px]:left-[658.5px] min-[810px]:top-[402px]">
          <GreenPaper />
        </div>

        {/* Blue notebook page */}
        <DraggableNote
          className="absolute left-[263px] top-[574px] min-[810px]:left-[124px] min-[810px]:top-[284px] min-[1200px]:left-[33.5px]"
        >
          <BluePaper />
        </DraggableNote>
      </div>
    </section>
  );
}
