"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

const sections: Section[] = [
  { id: "problem-overview", label: "Problem Overview" },
  { id: "problem-space", label: "Problem Space" },
  { id: "main-problem-areas", label: "Main Problem Areas" },
  { id: "key-improvements", label: "Key Improvements" },
  { id: "our-process", label: "Our Process" },
  { id: "lessons-learned", label: "Lessons Learned" },
  { id: "next-steps", label: "Next Steps" },
];

export default function CaseStudySidebar({ title }: { title: string }) {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sticky top-24 hidden h-fit shrink-0 self-start sm:block sm:w-48 lg:w-56">
      <h1 className="font-display text-[28px] leading-snug text-ink lg:text-[32px]">{title}</h1>

      <nav className="mt-10 flex flex-col gap-4 text-sm">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`transition-colors ${
              activeId === section.id ? "font-medium text-ink" : "text-ink-faint hover:text-ink-soft"
            }`}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
