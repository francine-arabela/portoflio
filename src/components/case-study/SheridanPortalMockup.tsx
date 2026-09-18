export default function SheridanPortalMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm">
      <div className="flex items-center justify-between bg-[#f2f2f2] px-4 py-1.5 font-mono text-[9px] text-ink-faint">
        <span>Sheridan Website</span>
        <span>⋮ More Tools</span>
      </div>

      <div className="flex items-center justify-between border-b-2 border-[#e6007e] bg-[#0b2a52] px-6 py-3">
        <div className="font-display text-base italic text-white">
          Sheridan <span className="ml-1 font-sans text-[10px] not-italic text-white/70">Service Hub</span>
        </div>
        <div className="flex gap-4 font-mono text-[10px] text-white/80">
          <span>Knowledge</span>
          <span>Log in</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0b2a52] to-[#1c4a86] px-6 py-10 text-center">
        <p className="font-display text-xl text-white sm:text-2xl">Welcome to Service Hub</p>
        <div className="mx-auto mt-4 flex max-w-md items-center rounded-full bg-white px-4 py-2">
          <span className="flex-1 text-left font-sans text-[11px] text-ink-faint">How can we help?</span>
          <span className="text-sm">🔍</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-6 py-6 text-left sm:grid-cols-2">
        {[
          { icon: "📘", title: "Knowledge", body: "Explore the knowledge base to get answers to commonly asked questions" },
          { icon: "🛟", title: "Get help", body: "Submit a request to Service Hub" },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <span className="text-lg">{item.icon}</span>
            <div>
              <p className="font-display text-sm text-[#0b2a52]">{item.title} &gt;</p>
              <p className="mt-1 text-[10px] leading-snug text-ink-faint">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 bg-[#fafafa] px-6 py-5 sm:grid-cols-3">
        {[
          { heading: "Most Viewed", links: ["Computing Requirements for Laptops", "Service Requests in myStudent Centre"] },
          { heading: "Featured", links: ["How do I pay my fees?", "Full-time OSAP Document Processing"] },
          { heading: "Most Useful", links: ["View your grades", "Contact your advisor"] },
        ].map((col) => (
          <div key={col.heading} className="hidden first:block sm:block">
            <p className="font-mono text-[9px] font-bold uppercase tracking-wide text-ink">{col.heading}</p>
            <ul className="mt-2 space-y-2">
              {col.links.map((link) => (
                <li key={link} className="text-[9px] text-[#0b2a52] underline decoration-[#0b2a52]/30">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Ask Bruno chat widget */}
      <div className="absolute bottom-4 right-4 hidden w-56 rounded-md border border-black/10 bg-white shadow-xl sm:block">
        <div className="flex items-center justify-between rounded-t-md bg-[#0b2a52] px-3 py-2">
          <span className="font-mono text-[10px] font-bold text-white">Ask Bruno</span>
          <span className="text-[10px] text-white/70">✕</span>
        </div>
        <div className="space-y-2 p-3">
          <div className="rounded-md rounded-tl-none bg-[#f2f5fa] p-2 text-[8px] leading-snug text-ink-soft">
            If you are having trouble seeing your timetable, make sure you have paid your deposit or declared
            your intent to register.
          </div>
          <div className="ml-auto w-fit rounded-md rounded-br-none bg-[#0b2a52] p-2 text-[8px] text-white">
            What support do you need with your timetable?
          </div>
          <div className="ml-auto w-fit rounded-full bg-[#e6007e]/10 px-2 py-1 text-[8px] font-medium text-[#0b2a52]">
            Add, Swap or Drop
          </div>
          <div className="rounded-md rounded-tl-none bg-[#f2f5fa] p-2 text-[8px] leading-snug text-ink-soft">
            How would you like to change your timetable?
          </div>
          <div className="ml-auto w-fit rounded-full bg-[#e6007e]/10 px-2 py-1 text-[8px] font-medium text-[#0b2a52]">
            Add
          </div>
        </div>
        <div className="border-t border-black/5 p-2">
          <div className="rounded-full bg-[#f2f2f2] px-3 py-1.5 text-[8px] text-ink-faint">Message…</div>
        </div>
      </div>
    </div>
  );
}
