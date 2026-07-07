const TRACKS = ["Video", "Audio", "Voice", "Music"];

export default function Timeline() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0B1024] p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-white">Timeline</h3>
        <div className="flex items-center gap-2">
          <button className="h-7 w-7 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition text-xs">
            ◀
          </button>
          <button className="h-7 w-7 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition text-xs">
            ▶
          </button>
          <span className="text-xs text-gray-600 ml-1">0:00 / 0:00</span>
        </div>
      </div>

      {/* Track rows */}
      <div className="flex flex-col gap-2">
        {TRACKS.map((track) => (
          <div key={track} className="flex items-center gap-3">
            <span className="w-14 shrink-0 text-xs text-gray-600">{track}</span>
            <div className="flex-1 h-8 rounded-lg border border-dashed border-white/10 bg-white/[0.02] flex items-center px-3">
              <span className="text-[10px] text-gray-700">Empty</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
