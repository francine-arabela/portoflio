import type { ReactNode } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  children: ReactNode;
};

export default function ProjectCard({ title, description, tags, href, children }: ProjectCardProps) {
  return (
    <article className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_1.6fr] sm:gap-10">
      <div>
        <h3 className="font-display text-2xl leading-snug text-ink sm:text-[26px]">
          {href ? (
            <a href={href} className="hover:text-accent">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-black/5 px-3 py-1 font-mono text-[10px] tracking-wide text-ink-soft"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-card-bg sm:aspect-[16/10]">
        {children}
      </div>
    </article>
  );
}
