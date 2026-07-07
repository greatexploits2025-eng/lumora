const projects = [
  { name: "AI Movie Trailer",   status: "completed", type: "🎬 Movie",     updatedAt: "2 hours ago" },
  { name: "Bible Animation",    status: "in-progress",type: "🎨 Animation", updatedAt: "Yesterday" },
  { name: "Yoruba Drama",       status: "draft",      type: "📝 Script",    updatedAt: "3 days ago" },
  { name: "Space Documentary",  status: "completed",  type: "🎥 Video",     updatedAt: "1 week ago" },
  { name: "AI Voice Narration", status: "completed",  type: "🎙️ Voice",    updatedAt: "1 week ago" },
];

const STATUS_STYLES: Record<string, string> = {
  completed:   "border-green-500/30 bg-green-500/10 text-green-400",
  "in-progress":"border-violet-500/30 bg-violet-500/10 text-violet-300",
  draft:       "border-white/10 bg-white/5 text-gray-500",
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
        {projects.map((p, i) => (
          <div
            key={p.name}
            className={`flex items-center justify-between gap-4 px-6 py-4 transition hover:bg-white/5 cursor-pointer ${
              i < projects.length - 1 ? "border-b border-white/5" : ""
            }`}
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-600/30 to-blue-600/20 border border-white/10 flex items-center justify-center text-lg shrink-0">
                {p.type.split(" ")[0]}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-white text-sm truncate">{p.name}</p>
                <p className="text-xs text-gray-600 mt-0.5">{p.type} · {p.updatedAt}</p>
              </div>
            </div>
            <span className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[p.status]}`}>
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
