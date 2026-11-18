import type { ReactNode } from "react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  muted?: boolean;
  children: ReactNode;
};

export default function ProjectCard({ title, description, tags, href, muted, children }: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex w-full flex-col gap-[29.83px] lg:w-[253px] lg:shrink-0">
        <div className="flex flex-col gap-[17.898px]">
          <h3
            className={`p-[7.457px] font-serif-book text-[24px] leading-normal tracking-[-0.02em] ${
              muted ? "text-[#656565]" : "text-text-strong"
            }`}
          >
            {href ? (
              <Link href={href} className="transition-colors hover:text-brand">
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>
          <p className="p-[7.457px] font-helvetica text-[12.415px] leading-[1.45] text-text-desc">{description}</p>
        </div>
        <ul className="flex flex-wrap gap-[11.932px]">
          {tags.map((tag) => (
            <li
              key={tag}
              className="min-w-[76px] rounded-[5px] bg-tag-bg px-[14px] py-[7.457px] text-center font-narrow text-[10.642px] uppercase leading-[1.45] tracking-[0.07em] text-frame-bg"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {href ? (
        <Link href={href} className="block w-full transition-opacity hover:opacity-90 lg:w-[596px] lg:shrink-0">
          {children}
        </Link>
      ) : (
        <div className="w-full lg:w-[596px] lg:shrink-0">{children}</div>
      )}
    </article>
  );
}
