import DraggableNote from "./DraggableNote";
import { BinderNote, DashedNote, FoldedNote } from "./StickyNote";

/* Positions come from the Figma frame: each note's centre is given as an
   offset from the hero column's centre line and from the top of the section. */
const notePosition = (dx: number, top: number) => ({
  left: `calc(50% + ${dx}px)`,
  top: `${top}px`,
});

export default function Hero() {
  return (
    <section id="about" className="relative px-6 pb-24 pt-20 lg:pb-[285px] lg:pt-[189px]">
      <div className="mx-auto flex w-full max-w-[463px] lg:-translate-x-[7px] flex-col items-center gap-[39px] text-center">
        <div className="flex w-full max-w-[397px] flex-col gap-[55px]">
          <p className="font-helvetica text-[15px] leading-[1.624] tracking-[0.05em] text-text-body">
            Hi! I’m FRANCINE PAGUIO
          </p>
          <h1 className="whitespace-pre-wrap font-serif-book text-[48px] font-normal leading-[1.2] text-brand sm:text-[60px]">
            {"UI/UX  & Visual Designer"}
          </h1>
        </div>

        <div className="flex w-full max-w-[309px] flex-col items-center gap-[35px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/figma/plant.png"
            alt=""
            width={121}
            height={102}
            className="h-[102px] w-[121px] object-cover object-bottom opacity-95"
          />
          <p className="font-helvetica text-[15px] font-light leading-[1.2] text-text-body">
            A designer who is always curious, learning, and growing to create meaningful,{" "}
            <br className="hidden sm:inline" />
            human-centered experiences.
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        <DraggableNote
          rotate={5.7}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={notePosition(253.4, 247.1)}
        >
          <FoldedNote>Previously UX Researcher @ SHERIDAN</FoldedNote>
        </DraggableNote>

        <DraggableNote
          rotate={-11.46}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={notePosition(-312.2, 423.3)}
        >
          <BinderNote>Previously Design Lead @ HACKVILLE</BinderNote>
        </DraggableNote>

        <DraggableNote
          rotate={7.26}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={notePosition(268.75, 517.6)}
        >
          <DashedNote>Open for work :)</DashedNote>
        </DraggableNote>
      </div>
    </section>
  );
}
