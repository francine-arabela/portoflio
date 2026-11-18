"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, type FormEvent, type KeyboardEvent } from "react";

export const CONTACT_EMAIL = "francinearabela.paguio@gmail.com";

/* The postcard from the bottom of francine.design (desktop only). The front is
   a Monet postcard; clicking it flips the card to a small message form. The
   face is 602 × 363 and tilted -2°. */
export default function PostcardFooter() {
  const [flipped, setFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onFrontKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setFlipped(true);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent("Message from francine.design");
    const body = encodeURIComponent(email ? `${message}\n\nFrom: ${email}` : message);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const shadow =
    "0 0.6px 1.6px -1px rgba(0,0,0,0.12), 0 2.3px 6px -2px rgba(0,0,0,0.12), 0 10px 26px -3px rgba(0,0,0,0.14)";
  const label = "font-inter text-[12px] font-medium text-[#888]";
  const field =
    "w-full rounded-[5px] bg-[#f5f5f5] px-[10px] font-inter text-[11.44px] text-[#333] outline-none placeholder:text-[#999] focus:ring-1 focus:ring-[#ddd]";

  return (
    <div className="perspective-1500 h-[363px] w-[602px]">
      <div
        data-cursor="Send me a Message!"
        className="preserve-3d relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.44,0,0.56,1)] hover:scale-[1.05]"
        style={{ transform: `rotate(-2deg) rotateY(${flipped ? 180 : 0}deg)` }}
      >
        {/* Front */}
        <div
          role="button"
          tabIndex={flipped ? -1 : 0}
          aria-label="Flip the postcard to send me a message"
          onClick={() => setFlipped(true)}
          onKeyDown={onFrontKeyDown}
          className="backface-hidden absolute inset-0 cursor-pointer bg-white"
          style={{ boxShadow: shadow }}
        >
          <img
            src="/framer/postcard-paper.png"
            alt=""
            className="absolute left-[-2px] top-[-2px] h-[366px] w-[604px] max-w-none"
          />
          <img
            src="/framer/postcard-monet.png"
            alt="Claude Monet, Bridge over a Pond of Water Lilies"
            className="absolute left-[14.5px] top-[14px] h-[314px] w-[249px] max-w-none object-cover"
          />
          <img
            src="/framer/postcard-divider.svg"
            alt=""
            className="absolute left-[295px] top-[13px] h-[315px] w-[3px] max-w-none"
          />
          <p className="absolute left-[16px] top-[336px] font-dm-mono text-[11px] tracking-[0.55px] text-text-muted">
            PAINTING BY
          </p>
          <p className="absolute left-[180px] top-[337px] font-dm-mono text-[11px] tracking-[0.55px] text-text-muted">
            CLAUDE MONET
          </p>
          <p className="absolute left-[337px] top-[142px] w-[216px] text-center font-mackinac-book text-[28px] font-[350] leading-[1.2] text-text-card">
            Thank you for reading!
          </p>
          <span className="perforated absolute left-[389px] top-[261px] flex h-[30px] w-[106px] items-center justify-center gap-[8px] bg-brand font-helvetica text-[11px] text-white">
            Click The Card
            <img src="/framer/arrow-card.svg" alt="" className="h-[11px] w-[10px]" />
          </span>
          <span className="perforated absolute left-[533px] top-[14px] h-[60px] w-[54px] bg-brand">
            <span className="absolute left-[4px] top-[3px] flex h-[54px] w-[47px] items-center justify-center bg-white font-feroniapi text-[28px] italic text-[rgba(139,3,3,0.8)]">
              FP
            </span>
          </span>
        </div>

        {/* Back */}
        <div
          className="backface-hidden absolute inset-0 bg-white px-[40px] pt-[50px]"
          style={{ transform: "rotateY(180deg)", boxShadow: shadow }}
          aria-hidden={!flipped}
        >
          <button
            type="button"
            tabIndex={flipped ? 0 : -1}
            onClick={() => setFlipped(false)}
            aria-label="Close the message form"
            className="absolute left-[548px] top-[20px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#f0f0f0] transition-colors hover:bg-[#e4e4e4]"
          >
            <img src="/framer/close-x.svg" alt="" className="h-[14px] w-[19px]" />
          </button>

          <form onSubmit={onSubmit} className="flex flex-col">
            <span className={label}>To</span>
            <p className={`${field} mt-[6px] flex h-[32px] items-center text-[#999]`}>{CONTACT_EMAIL}</p>

            <label htmlFor="postcard-email" className={`${label} mt-[24px]`}>
              Email
            </label>
            <input
              id="postcard-email"
              type="email"
              tabIndex={flipped ? 0 : -1}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email or keep yourself anonymous"
              className={`${field} mt-[6px] h-[32px]`}
            />

            <textarea
              required
              tabIndex={flipped ? 0 : -1}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label="Your message"
              placeholder="Write your message here!"
              className={`${field} mt-[16px] h-[84px] resize-y py-[8px]`}
            />

            <button
              type="submit"
              tabIndex={flipped ? 0 : -1}
              className="mt-[18px] h-[34px] w-full rounded-[10px] bg-brand font-inter text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
