const PROJECTS = [
  { name: "AI Movie Trailer",    type: "🎬", tag: "Movie",     status: "completed",    updated: "2 hours ago" },
  { name: "Bible Animation",     type: "🎨", tag: "Animation", status: "in-progress",  updated: "Yesterday" },
  { name: "Yoruba Drama",        type: "📜", tag: "Script",    status: "draft",         updated: "3 days ago" },
  { name: "Space Documentary",   type: "🎥", tag: "Video",     status: "completed",    updated: "1 week ago" },
  { name: "AI Voice Narration",  type: "🎤", tag: "Voice",     status: "completed",    updated: "1 week ago" },
];

const STATUS: Record<string, string> = {
  completed:    "border-green-500/30 bg-green-500/10 text-green-400",
  "in-progress":"border-violet-500/30 bg-violet-500/10 text-violet-300",
  draft:        "border-white/10 bg-white/5 text-gray-500",
};

export default function RecentProjects() {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">Recent Projects</h2>
        <button className="text-sm text-violet-400 hover:text-violet-300 transition">
          View all →
        </button>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
        {PROJECTS.map((p, i) => (
          <div
            key={p.name}
            className={`flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-white/5 cursor-pointer ${
              i < PROJECTS.length - 1 ? "border-b border-white/5" : ""
            }`}
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="h-10 w-10 shrink-0 rounded-xl border border-white/10 bg-gradient-to-br from-violet-600/20 to-blue-600/10 flex items-center justify-center text-lg">
                {p.type}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">{p.name}</p>
                <p className="text-xs text-gray-600 mt-0.5">{p.tag} · {p.updated}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${STATUS[p.status]}`}>
                {p.status}
              </span>
              <button className="text-gray-600 hover:text-white transition text-sm">
                ···
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
