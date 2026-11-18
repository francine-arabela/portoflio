/* eslint-disable @next/next/no-img-element */

/* The three paper notes from the francine.design hero. Each is drawn at its
   Framer size; the parent places and rotates it. */

const noteText = "font-helvetica text-[14px] text-text-muted";

/** Yellow sticky note with a folded corner (145 × 137, rotated 6°). */
export function YellowNote() {
  return (
    <div className="relative h-[137px] w-[145px]">
      <img
        src="/framer/yellow-note.svg"
        alt=""
        width={158}
        height={151}
        className="absolute left-[-6.5px] top-[-6px] h-[151px] w-[158px] max-w-none"
      />
      <img
        src="/framer/yellow-note-curl.svg"
        alt=""
        width={40}
        height={36}
        className="absolute left-[107.5px] top-[103.8px] h-[36px] w-[40px] max-w-none -rotate-6"
      />
      <p className={`absolute left-[26.19px] top-[28.99px] w-[92.4px] rotate-5 leading-[1.2] ${noteText}`}>
        Previously UX Researcher @ Sheridan
      </p>
    </div>
  );
}

/** Green dashed note with the hand-drawn "Open for work :)" (165 × 59, rotated -4°). */
export function GreenPaper() {
  return (
    <div className="relative h-[59px] w-[165px]">
      <img
        src="/framer/green-paper.svg"
        alt=""
        width={167}
        height={71}
        className="absolute left-[-0.86px] top-[-6.12px] h-[71px] w-[167px] max-w-none rotate-4"
      />
      <img
        src="/framer/open-for-work.svg"
        alt="Open for work :)"
        width={104}
        height={25}
        className="absolute left-[30.21px] top-[17.33px] h-[25px] w-[104px] max-w-none rotate-4"
      />
    </div>
  );
}

/** Blue lined notebook page torn from a binder (245 × 166). */
export function BluePaper() {
  return (
    <div className="relative h-[166px] w-[245px] overflow-clip bg-[url(/framer/blue-paper.svg)] bg-[length:100%_100%]">
      <img
        src="/framer/blue-paper-lines.svg"
        alt=""
        width={245}
        height={161}
        className="absolute left-0 top-[-0.5px] h-[161px] w-[245px] max-w-none"
      />
      <p
        className={`absolute bottom-[37.5px] left-[52%] w-[164px] -translate-x-1/2 -rotate-11 leading-[1.5] ${noteText}`}
      >
        Previously Design Lead
        <br />@ Hackville
      </p>
    </div>
  );
}
