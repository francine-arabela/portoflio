export default function ScamGuardMockup() {
  const items = [
    { level: "High Priority", label: "Airbnb Crash Personal Support Worker", tone: "bg-red-100 text-red-700" },
    { level: "Medium Priority", label: "Berkshire Gardens Aide Ad", tone: "bg-amber-100 text-amber-700" },
    { level: "High Priority", label: "Victoria Gardens Aide Ad", tone: "bg-red-100 text-red-700" },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center p-6 sm:p-10">
      <div className="flex w-full max-w-xl overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl">
        <div className="hidden w-32 flex-col gap-3 border-r border-black/5 bg-[#fafafa] p-4 text-[9px] text-ink-soft sm:flex">
          <div className="flex items-center gap-2 font-semibold text-ink">
            <span className="text-sm">🛡️</span> Safe Guard
          </div>
          <span>Dashboard</span>
          <span>Chat</span>
          <span>Chat History</span>
          <span>Report A Scam</span>
          <p className="mt-2 text-[8px] uppercase tracking-wide text-ink-faint">Support</p>
          <span>Resources</span>
          <span>Community</span>
        </div>
        <div className="flex-1 p-5">
          <p className="text-sm font-semibold text-ink">Good Morning, Alex</p>
          <p className="mt-3 text-[10px] font-medium uppercase tracking-wide text-ink-faint">
            Scam Warnings
          </p>
          <div className="mt-2 space-y-2">
            {items.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-md bg-[#f7f7f5] px-3 py-2">
                <span className="text-[10px] text-ink-soft">{item.label}</span>
                <span className={`rounded-full px-2 py-0.5 text-[8px] font-semibold ${item.tone}`}>
                  {item.level}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[10px] font-medium uppercase tracking-wide text-ink-faint">
            Monitor your shared information
          </p>
        </div>
      </div>
    </div>
  );
}
