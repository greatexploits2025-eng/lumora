const actions = [
  { icon: "🎨", label: "New Image",     desc: "Generate a cinematic AI image",    color: "hover:border-violet-500/40" },
  { icon: "🎬", label: "New Video",     desc: "Convert an image to video",         color: "hover:border-blue-500/40" },
  { icon: "📝", label: "New Script",    desc: "Write a movie script with AI",      color: "hover:border-emerald-500/40" },
  { icon: "🎙️", label: "New Voice",    desc: "Generate AI narration or dialogue", color: "hover:border-fuchsia-500/40" },
  { icon: "🧑", label: "New Character", desc: "Create a talking AI character",     color: "hover:border-amber-500/40" },
  { icon: "🎥", label: "New Movie",     desc: "Compose a full AI film scene",      color: "hover:border-pink-500/40" },
];

export default function QuickActions() {
  return (
    <div>
      <h2 className="mb-5 text-lg font-bold text-white">Quick Actions</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((a) => (
          <button
            key={a.label}
            className={`flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-xl transition-all ${a.color} hover:bg-white/8 hover:-translate-y-0.5`}
          >
            <span className="text-3xl shrink-0">{a.icon}</span>
            <div>
              <p className="font-semibold text-white text-sm">+ {a.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{a.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
