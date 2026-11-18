"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, type FormEvent, type KeyboardEvent } from "react";

const CONTACT_EMAIL = "francinearabela.paguio@gmail.com";

/* The postcard is 662.74 × 400.51 in Figma, rotated -2.62°, inside a
   680.37 × 430.4 bounding box. Sizes are expressed in container units of
   that bounding box so the card scales down on narrow screens. */
const u = (px: number) => `calc(${px} * 100cqw / 680.37)`;

export default function PostcardFooter() {
  const [flipped, setFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleFrontKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setFlipped(true);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${email || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="@container aspect-[680.37/430.4] w-full">
      <div className="flex h-full w-full items-center justify-center perspective-1200">
        <div
          className={`relative rotate-[-2.62deg] preserve-3d transition-transform duration-700 ease-out ${
            flipped ? "rotate-y-180" : ""
          }`}
          style={{ width: u(662.743), height: u(400.512) }}
        >
          {/* Front */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setFlipped(true)}
            onKeyDown={handleFrontKeyDown}
            aria-label="Flip postcard to write a message"
            className="absolute inset-0 cursor-pointer bg-white backface-hidden"
          >
            <img
              src="/figma/postcard-monet.png"
              alt="Claude Monet, Bridge over a Pond of Water Lilies"
              className="absolute left-0 top-0 h-full object-cover"
              style={{ width: u(321.745) }}
            />
            <p
              className="absolute -translate-x-1/2 -translate-y-1/2 text-center font-hand leading-normal text-[rgba(30,30,30,0.9)]"
              style={{ left: u(491.3), top: u(180.6), width: u(236.935), fontSize: u(34) }}
            >
              Thank you for reading!
            </p>
            <span
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap bg-brand font-narrow font-medium text-white"
              style={{
                left: u(501.1),
                top: u(303.1),
                height: u(32.717),
                paddingLeft: u(8.432),
                paddingRight: u(13.89),
                gap: u(1.686),
                borderRadius: u(6.927),
                fontSize: u(11.805),
              }}
            >
              Click The Card
              <span
                className="flex items-center justify-center"
                style={{ width: u(7.039), height: u(9.553) }}
                aria-hidden="true"
              >
                <img
                  src="/figma/arrow-card.svg"
                  alt=""
                  className="max-w-none shrink-0 -rotate-[53.62deg]"
                  style={{ width: u(12.514), height: u(9.542) }}
                />
              </span>
            </span>
          </div>

          {/* Back */}
          <div className="absolute inset-0 rotate-y-180 overflow-hidden bg-white backface-hidden">
            <div className="grid h-full grid-cols-[1.4fr_1fr]">
              <div
                className="flex flex-col gap-2 border-r border-black/10 p-3 sm:p-6"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(0,0,0,0.08) 28px)",
                }}
              >
                <label htmlFor="postcard-message" className="font-dm-mono text-[9px] uppercase tracking-wide text-text-muted">
                  Leave a message
                </label>
                {sent ? (
                  <p className="font-hand text-xl text-brand">Thanks for writing! Your mail app should be opening now.</p>
                ) : (
                  <form onSubmit={handleSubmit} className="flex h-full flex-col gap-2">
                    <textarea
                      id="postcard-message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Say hello, share feedback, or leave a note…"
                      className="h-full flex-1 resize-none bg-transparent font-hand text-lg text-text-body outline-none placeholder:text-text-muted/60 sm:text-xl"
                    />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      aria-label="Your email"
                      className="border-t border-black/10 bg-transparent pt-2 font-dm-mono text-[11px] text-text-strong outline-none placeholder:text-text-muted/70"
                    />
                    <button
                      type="submit"
                      className="mt-1 flex w-fit items-center gap-1 self-end rounded-[6.927px] bg-brand px-3 py-1.5 font-narrow text-[12px] font-medium text-white"
                    >
                      Send <span aria-hidden="true">↗</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="flex flex-col justify-between p-3 sm:p-6">
                <div className="ml-auto flex h-14 w-11 items-center justify-center border border-dashed border-brand">
                  <span className="font-serif-book text-lg italic text-brand">FP</span>
                </div>
                <p className="border-b border-black/10 pb-1 font-dm-mono text-[10px] text-text-muted">
                  To: Francine Paguio
                </p>
                <button
                  type="button"
                  onClick={() => setFlipped(false)}
                  className="self-start font-dm-mono text-[9px] uppercase tracking-wide text-text-muted underline-offset-2 hover:underline"
                >
                  ← Click to flip back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
