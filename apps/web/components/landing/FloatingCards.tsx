const cards = [
  {
    float: "animate-float",
    delay: "0s",
    gradient: "from-violet-600/20 to-blue-600/10",
    border: "border-violet-500/30",
    icon: "🎬",
    title: "AI Movie Studio",
    desc: "Direct full cinematic scenes with a single prompt.",
  },
  {
    float: "animate-float-slow",
    delay: "1.5s",
    gradient: "from-blue-600/20 to-cyan-600/10",
    border: "border-blue-500/30",
    icon: "🖼",
    title: "Image Generation",
    desc: "Photorealistic visuals from your imagination.",
  },
  {
    float: "animate-float-gentle",
    delay: "0.8s",
    gradient: "from-fuchsia-600/20 to-pink-600/10",
    border: "border-fuchsia-500/30",
    icon: "🎤",
    title: "AI Voice Studio",
    desc: "Clone, narrate, and voice your characters.",
  },
  {
    float: "animate-float",
    delay: "2s",
    gradient: "from-emerald-600/20 to-teal-600/10",
    border: "border-emerald-500/30",
    icon: "📝",
    title: "Script Generator",
    desc: "From idea to full screenplay in seconds.",
  },
  {
    float: "animate-float-slow",
    delay: "0.4s",
    gradient: "from-amber-600/20 to-orange-600/10",
    border: "border-amber-500/30",
    icon: "🎥",
    title: "Image to Video",
    desc: "Breathe life into still images with motion.",
  },
  {
    float: "animate-float-gentle",
    delay: "1.2s",
    gradient: "from-rose-600/20 to-red-600/10",
    border: "border-rose-500/30",
    icon: "🎭",
    title: "Character Creator",
    desc: "Build talking, expressive AI characters.",
  },
];

export default function FloatingCards() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <div className="mb-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">
          Everything You Need
        </p>
        <h2 className="text-4xl font-black text-white">
          One platform.{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Infinite stories.
          </span>
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`${card.float} rounded-3xl border ${card.border} bg-gradient-to-br ${card.gradient} backdrop-blur-xl p-8 flex flex-col gap-4 transition-shadow hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]`}
            style={{ animationDelay: card.delay }}
          >
            <span className="text-4xl">{card.icon}</span>
            <h3 className="text-xl font-bold text-white">{card.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
