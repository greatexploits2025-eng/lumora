import Link from "next/link";

const TOOLS = [
  {
    href:     "/dashboard/studio",
    icon:     "🎬",
    label:    "Movie Generator",
    desc:     "Compose full AI film scenes from a prompt",
    gradient: "from-violet-600/20 to-blue-600/10",
    border:   "border-violet-500/20",
    glow:     "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
    badge:    "Flagship",
    badgeStyle: "border-violet-500/40 bg-violet-500/10 text-violet-300",
  },
  {
    href:     "/dashboard/studio/images",
    icon:     "🖼",
    label:    "AI Images",
    desc:     "Generate cinematic images from text",
    gradient: "from-blue-600/20 to-cyan-600/10",
    border:   "border-blue-500/20",
    glow:     "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]",
    badge:    null,
    badgeStyle: "",
  },
  {
    href:     "/dashboard/studio/voice",
    icon:     "🎤",
    label:    "Voice Studio",
    desc:     "Clone voices and generate AI narration",
    gradient: "from-fuchsia-600/20 to-pink-600/10",
    border:   "border-fuchsia-500/20",
    glow:     "group-hover:shadow-[0_0_30px_rgba(217,70,239,0.2)]",
    badge:    null,
    badgeStyle: "",
  },
  {
    href:     "/dashboard/studio/character",
    icon:     "🎭",
    label:    "Character Creator",
    desc:     "Build lip-synced talking AI characters",
    gradient: "from-amber-600/20 to-orange-600/10",
    border:   "border-amber-500/20",
    glow:     "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
    badge:    null,
    badgeStyle: "",
  },
  {
    href:     "/dashboard/studio/script",
    icon:     "📜",
    label:    "Script Writer",
    desc:     "Write full screenplays in seconds",
    gradient: "from-emerald-600/20 to-teal-600/10",
    border:   "border-emerald-500/20",
    glow:     "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]",
    badge:    null,
    badgeStyle: "",
  },
  {
    href:     "/dashboard/studio/video",
    icon:     "🎞",
    label:    "Image → Video",
    desc:     "Animate any image into a cinematic clip",
    gradient: "from-rose-600/20 to-red-600/10",
    border:   "border-rose-500/20",
    glow:     "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]",
    badge:    null,
    badgeStyle: "",
  },
];

export default function ToolGrid() {
  return (
    <div>
      <h2 className="mb-5 text-lg font-bold text-white">AI Tools</h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {TOOLS.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className={`group relative flex flex-col gap-4 rounded-2xl border ${tool.border} bg-gradient-to-br ${tool.gradient} p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${tool.glow}`}
          >
            {tool.badge && (
              <span className={`absolute top-4 right-4 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${tool.badgeStyle}`}>
                {tool.badge}
              </span>
            )}
            <span className="text-3xl">{tool.icon}</span>
            <div>
              <h3 className="font-bold text-white text-sm">{tool.label}</h3>
              <p className="mt-1 text-xs text-gray-500 leading-relaxed">{tool.desc}</p>
            </div>
            <span className="text-xs text-gray-600 group-hover:text-violet-400 transition-colors">
              Open →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
