import type { ReactNode } from "react";

/* Sticky notes from the Figma hero. Each is drawn unrotated; the
   DraggableNote wrapper applies the rotation from the design. */

/** Yellow note with a folded bottom-right corner ("Previously UX Researcher"). */
export function FoldedNote({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-[136.453px] w-[144.836px]">
      {/* eslint-disable @next/next/no-img-element */}
      <img src="/figma/sticky-yellow.svg" alt="" width={144.836} height={136.453} className="absolute inset-0" />
      <img
        src="/figma/sticky-yellow-curl.svg"
        alt=""
        width={34.266}
        height={29.664}
        className="absolute left-[110.57px] top-[106.79px] max-w-none rotate-[-179.35deg]"
      />
      {/* eslint-enable @next/next/no-img-element */}
      <p className="relative w-[92.4px] pl-[26px] pt-[29px] font-helvetica text-[14px] leading-normal text-text-muted box-content">
        {children}
      </p>
    </div>
  );
}

/** Blue note with punched binder holes along the top ("Previously Design Lead"). */
export function BinderNote({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-[118.507px] w-[217.348px] items-center justify-center bg-note-blue">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/figma/binder-holes.svg"
        alt=""
        width={201.248}
        height={24.15}
        className="absolute left-1/2 top-[-7.8px] max-w-none -translate-x-1/2"
      />
      <p className="relative mt-[11px] mr-[12px] w-[149.4px] font-helvetica text-[14px] leading-normal text-text-muted">
        {children}
      </p>
    </div>
  );
}

/** Green dashed note ("Open for work :)"). */
export function DashedNote({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[58.778px] w-[164.134px] skew-x-[-1.12deg] items-center justify-center border border-dashed border-note-green-border bg-note-green">
      <p className="whitespace-nowrap font-helvetica text-[14px] leading-normal text-text-muted">{children}</p>
    </div>
  );
}
