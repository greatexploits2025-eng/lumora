const testimonials = [
  {
    stars: 5,
    quote: "Lumora completely changed the way I create AI films. Nothing else comes close.",
    name: "Sarah M.",
    role: "Independent Filmmaker",
    avatar: "🎬",
    float: "animate-float",
    delay: "0s",
  },
  {
    stars: 5,
    quote: "I generated a full short film — script, visuals, voice, and video — in under an hour.",
    name: "James K.",
    role: "YouTube Creator",
    avatar: "📺",
    float: "animate-float-gentle",
    delay: "1s",
  },
  {
    stars: 5,
    quote: "My students use Lumora to bring their stories to life. It's transformed my classroom.",
    name: "Dr. Amara O.",
    role: "Educator",
    avatar: "📚",
    float: "animate-float-slow",
    delay: "0.5s",
  },
  {
    stars: 5,
    quote: "The image-to-video feature is insane. I use it for every brand campaign now.",
    name: "Lena R.",
    role: "Brand Designer",
    avatar: "🎨",
    float: "animate-float",
    delay: "1.8s",
  },
  {
    stars: 5,
    quote: "Voice cloning + talking characters = my content output tripled overnight.",
    name: "Marcus T.",
    role: "Content Creator",
    avatar: "📱",
    float: "animate-float-gentle",
    delay: "0.3s",
  },
  {
    stars: 5,
    quote: "I pitched a full movie concept with Lumora-generated visuals. Got funded.",
    name: "Priya S.",
    role: "Screenwriter",
    avatar: "✍️",
    float: "animate-float-slow",
    delay: "1.3s",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <div className="mb-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">
          Testimonials
        </p>
        <h2 className="text-4xl font-black text-white">
          Loved by creators{" "}
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            worldwide.
          </span>
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className={`${t.float} rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 flex flex-col gap-4 hover:border-violet-500/40 transition-colors`}
            style={{ animationDelay: t.delay }}
          >
            {/* Stars */}
            <div className="flex gap-0.5">
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i} className="text-amber-400 text-sm">⭐</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-300 text-sm leading-relaxed flex-1">
              "{t.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-2 border-t border-white/10">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-lg shrink-0">
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
