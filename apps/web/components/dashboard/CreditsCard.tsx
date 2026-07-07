const CREDITS = [
  { label: "Images",   used: 23,  total: 50,  color: "from-violet-500 to-blue-500",   icon: "🎨" },
  { label: "Videos",   used: 3,   total: 5,   color: "from-blue-500 to-cyan-500",     icon: "🎬" },
  { label: "Scripts",  used: 1,   total: 3,   color: "from-emerald-500 to-teal-500",  icon: "📝" },
  { label: "Voices",   used: 8,   total: 20,  color: "from-fuchsia-500 to-pink-500",  icon: "🎙️" },
];

export default function CreditsCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-white">Credits</h2>
          <p className="text-xs text-gray-500 mt-0.5">Free Plan · Resets monthly</p>
        </div>
        <button className="rounded-xl border border-violet-500/40 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-300 transition hover:bg-violet-500/20">
          Upgrade ↗
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {CREDITS.map((c) => {
          const pct = Math.round((c.used / c.total) * 100);
          const low = pct >= 80;
          return (
            <div key={c.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <span>{c.icon}</span> {c.label}
                </span>
                <span className={`text-xs font-semibold ${low ? "text-red-400" : "text-gray-500"}`}>
                  {c.used} / {c.total}
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${c.color} transition-all duration-700`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-gray-600 text-center">
        Upgrade to Pro for 2,000 images, 200 videos & unlimited scripts
      </p>
    </div>
  );
}
