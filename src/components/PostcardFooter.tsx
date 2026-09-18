"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";
import PondArt from "./PondArt";

const CONTACT_EMAIL = "francinearabela.paguio@gmail.com";

export default function PostcardFooter() {
  const [flipped, setFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function flipToBack() {
    setFlipped(true);
  }

  function flipToFront() {
    setFlipped(false);
  }

  function handleFrontKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flipToBack();
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
    <div className="relative z-10 mx-auto -mb-16 w-full max-w-2xl px-6 sm:-mb-20">
      <div className="perspective-1200">
        <div
          className={`relative h-[260px] w-full rotate-1 preserve-3d transition-transform duration-700 ease-out sm:h-[300px] ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div
            role="button"
            tabIndex={0}
            onClick={flipToBack}
            onKeyDown={handleFrontKeyDown}
            aria-label="Flip postcard to write a message"
            className="absolute inset-0 grid cursor-pointer grid-cols-[1fr_1.1fr] overflow-hidden rounded-sm bg-[#fbfaf6] shadow-2xl backface-hidden sm:grid-cols-[1fr_1.3fr]"
          >
            <div className="relative h-full w-full overflow-hidden border-r border-black/10">
              <PondArt />
            </div>
            <div className="relative flex flex-col justify-between p-3 sm:p-8">
              <div className="absolute right-2 top-2 flex h-10 w-8 items-center justify-center border border-dashed border-accent sm:right-6 sm:top-6 sm:h-14 sm:w-11">
                <span className="font-display text-sm italic text-accent sm:text-lg">FP</span>
              </div>

              <p className="mt-10 text-center font-display text-base leading-snug text-ink-soft sm:mt-6 sm:text-2xl">
                Thank you for
                <br />
                reading!
              </p>

              <div className="flex items-end justify-between gap-2">
                <span className="hidden font-mono text-[9px] uppercase tracking-wide text-ink-faint sm:inline">
                  Painting by <span className="ml-1">Claude Monet</span>
                </span>
                <span className="flex items-center gap-1 whitespace-nowrap rounded-sm bg-accent px-2.5 py-1 font-mono text-[10px] text-paper sm:px-3 sm:py-1.5 sm:text-[11px]">
                  Click The Card <span aria-hidden="true">↗</span>
                </span>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 rotate-y-180 overflow-hidden rounded-sm bg-[#fbfaf6] shadow-2xl backface-hidden">
            <div className="grid h-full grid-cols-1 sm:grid-cols-[1.4fr_1fr]">
              <div
                className="flex flex-col gap-2 p-4 sm:border-r sm:border-black/10 sm:p-6"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(0,0,0,0.08) 28px)",
                }}
              >
                <label className="font-mono text-[9px] uppercase tracking-wide text-ink-faint">
                  Leave a message
                </label>
                {sent ? (
                  <p className="font-display text-lg text-accent">
                    Thanks for writing — your mail app should be opening now!
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="flex h-full flex-col gap-2">
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Say hello, share feedback, or leave a note…"
                      className="h-full flex-1 resize-none bg-transparent font-display text-base text-ink-soft outline-none placeholder:text-ink-faint/70"
                    />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="border-t border-black/10 bg-transparent pt-2 font-mono text-xs text-ink outline-none placeholder:text-ink-faint"
                    />
                    <button
                      type="submit"
                      className="mt-1 flex w-fit items-center gap-1 self-end rounded-sm bg-accent px-3 py-1.5 font-mono text-[11px] text-paper"
                    >
                      Send <span aria-hidden="true">↗</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="flex flex-col justify-between p-4 sm:p-6">
                <div className="ml-auto flex h-14 w-11 items-center justify-center border border-dashed border-accent">
                  <span className="font-display text-lg italic text-accent">FP</span>
                </div>
                <div className="space-y-2 font-mono text-[10px] text-ink-faint">
                  <p className="border-b border-black/10 pb-1">To: Francine Arabela Paguio</p>
                </div>
                <button
                  type="button"
                  onClick={flipToFront}
                  className="self-start font-mono text-[9px] uppercase tracking-wide text-ink-faint underline-offset-2 hover:underline"
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
