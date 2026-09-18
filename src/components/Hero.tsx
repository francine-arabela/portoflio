import DraggableNote from "./DraggableNote";
import PlantIcon from "./PlantIcon";
import { StickyNote, TornNote } from "./StickyNote";

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-5xl px-6 pb-20 pt-16 text-center sm:pt-24">
      <p className="font-mono text-xs tracking-[0.2em] text-ink-soft">
        PRODUCT &amp; VISUAL DESIGNER
      </p>

      <div className="relative mt-4">
        <h1 className="font-display text-5xl leading-tight text-accent sm:text-6xl">
          Francine
          <br />
          Arabela Paguio
        </h1>

        <DraggableNote
          rotate={3}
          className="absolute -right-4 -top-10 hidden sm:block sm:-right-16 sm:-top-16"
        >
          <StickyNote color="yellow">
            Previously UX
            <br />
            Researcher @<br />
            Sheridan
          </StickyNote>
        </DraggableNote>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
        <DraggableNote rotate={-6} className="hidden sm:block">
          <TornNote>
            Previously Design
            <br />
            Lead @ Hackville
          </TornNote>
        </DraggableNote>

        <div className="flex flex-col items-center gap-4">
          <PlantIcon className="h-10 w-10" />
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            A designer who is always curious, learning, and growing to create
            meaningful, human-centered experiences.
          </p>
        </div>

        <DraggableNote rotate={2} className="hidden sm:block">
          <StickyNote color="green">Open for work :)</StickyNote>
        </DraggableNote>
      </div>
    </section>
  );
}
