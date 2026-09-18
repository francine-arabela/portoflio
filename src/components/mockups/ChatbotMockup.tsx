export default function ChatbotMockup() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6 sm:p-10">
      <div className="w-full max-w-xl rounded-t-lg border border-black/10 bg-white shadow-xl">
        <div className="rounded-t-lg bg-[#0b3d91] px-4 py-2">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 p-5">
          {[
            { label: "Request a Service", icon: "📄" },
            { label: "Check-in for IT Counter Support", icon: "💬" },
            { label: "Knowledge", icon: "📚" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 rounded-md border border-black/10 bg-[#f7f9fc] p-3 text-center"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-[9px] font-medium leading-tight text-[#0b3d91]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <div className="space-y-2 border-t border-black/10 p-4">
          <div className="ml-auto h-3 w-2/3 rounded-full bg-[#0b3d91]/10" />
          <div className="h-3 w-3/4 rounded-full bg-black/5" />
          <div className="ml-auto h-3 w-1/2 rounded-full bg-[#0b3d91]/10" />
        </div>
      </div>
      <div className="-ml-1 h-3 w-[92%] max-w-xl rounded-b-2xl bg-[#d9d9d9]" />
    </div>
  );
}
