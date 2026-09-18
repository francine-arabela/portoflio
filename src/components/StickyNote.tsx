import type { ReactNode } from "react";

type StickyNoteProps = {
  children: ReactNode;
  color: "yellow" | "green";
  rotate?: string;
  className?: string;
};

const colorMap = {
  yellow: "bg-sticky-yellow",
  green: "bg-sticky-green",
};

export function StickyNote({ children, color, rotate = "rotate-0", className = "" }: StickyNoteProps) {
  return (
    <div
      className={`relative w-fit px-4 py-3 font-mono text-[11px] leading-snug text-ink-soft shadow-[2px_6px_10px_rgba(0,0,0,0.12)] ${colorMap[color]} ${rotate} ${className}`}
    >
      {children}
    </div>
  );
}

export function TornNote({ children, rotate = "rotate-0", className = "" }: Omit<StickyNoteProps, "color">) {
  return (
    <div
      className={`relative w-fit bg-sticky-blue px-4 pb-3 pt-4 font-mono text-[11px] leading-snug text-ink-soft shadow-[2px_6px_10px_rgba(0,0,0,0.12)] ${rotate} ${className}`}
      style={{
        clipPath:
          "polygon(0% 8%, 6% 2%, 12% 8%, 18% 2%, 24% 8%, 30% 2%, 36% 8%, 42% 2%, 48% 8%, 54% 2%, 60% 8%, 66% 2%, 72% 8%, 78% 2%, 84% 8%, 90% 2%, 96% 8%, 100% 4%, 100% 100%, 0% 100%)",
      }}
    >
      {children}
    </div>
  );
}
