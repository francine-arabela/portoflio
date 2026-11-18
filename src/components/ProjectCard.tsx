import type { ReactNode } from "react";
import Link from "next/link";

type ProjectCardProps = {
  title: ReactNode;
  description: string;
  tags: string[];
  href?: string;
  /** Narrow the text column on phones (Framer does this for the last row). */
  narrowText?: boolean;
  className?: string;
  children: ReactNode;
};

/* One row of "Main works" on francine.design: text on the left, image on the
   right; stacked on phones. Hovering a linked row shows the "Go To Project"
   cursor. */
export default function ProjectCard({
  title,
  description,
  tags,
  href,
  narrowText,
  className = "",
  children,
}: ProjectCardProps) {
  const body = (
    <>
      <div
        className={`flex flex-col gap-[19px] min-[810px]:w-auto min-[810px]:max-w-[253px] min-[810px]:flex-1 min-[810px]:gap-[29.83px] ${
          narrowText ? "w-[253px]" : "w-full"
        }`}
      >
        <div className="flex flex-col gap-[11px] min-[810px]:gap-[17.9px]">
          <h3 className="font-mackinac text-[24px] leading-[1.2] text-text-strong">{title}</h3>
          <p className="font-helvetica text-[16px] leading-[1.45] text-text-body">{description}</p>
        </div>
        <ul className="flex flex-wrap gap-[11.93px]">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-[5px] bg-tag-bg p-[7.457px] font-dm-sans text-[10px] uppercase leading-[1.2] tracking-[0.06em] text-tag-text min-[810px]:text-[12px]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full min-[810px]:w-[303px] min-[810px]:shrink-0 min-[1200px]:w-auto min-[1200px]:max-w-[596px] min-[1200px]:flex-1">{children}</div>
    </>
  );

  const rowClass = `flex w-full flex-col items-start gap-[30px] min-[810px]:flex-row min-[810px]:items-center min-[810px]:justify-center min-[810px]:gap-[178px] min-[1200px]:gap-[180.9px] ${className}`;

  return href ? (
    <Link href={href} data-cursor="Go To Project" className={rowClass}>
      {body}
    </Link>
  ) : (
    <article className={rowClass}>{body}</article>
  );
}
