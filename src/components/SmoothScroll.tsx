"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/* Lenis smooth scrolling, as on francine.design. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: true });
    return () => lenis.destroy();
  }, []);
  return null;
}
