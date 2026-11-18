"use client";

import { useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";

type DraggableNoteProps = {
  children: ReactNode;
  rotate?: number;
  className?: string;
  style?: CSSProperties;
};

export default function DraggableNote({ children, rotate = 0, className = "", style }: DraggableNoteProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ pointerX: 0, pointerY: 0, posX: 0, posY: 0 });

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      posX: pos.x,
      posY: pos.y,
    };
    setDragging(true);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    setPos({
      x: dragStart.current.posX + (event.clientX - dragStart.current.pointerX),
      y: dragStart.current.posY + (event.clientY - dragStart.current.pointerY),
    });
  }

  function endDrag(event: ReactPointerEvent<HTMLDivElement>) {
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={`touch-none cursor-grab select-none active:cursor-grabbing ${
        dragging ? "z-50 drop-shadow-xl" : "z-10"
      } ${className}`}
      style={{
        ...style,
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${rotate}deg) ${dragging ? "scale(1.05)" : "scale(1)"}`,
      }}
    >
      {children}
    </div>
  );
}
