"use client";

import { motion } from "framer-motion";
import ShowcaseCard from "./ShowcaseCard";

const cards = [
  {
    title: "AI Image Generator",
    icon: "🎨",
    description: "Generate stunning cinematic AI images from a single prompt. Photorealistic, painterly, or sci-fi — your vision, instantly.",
    gradient: "from-violet-900/40 to-blue-900/20",
    border: "border-violet-500/20",
  },
  {
    title: "Image → Video",
    icon: "🎬",
    description: "Breathe motion into still images. Turn any AI image into a smooth cinematic video clip.",
    gradient: "from-blue-900/40 to-cyan-900/20",
    border: "border-blue-500/20",
  },
  {
    title: "Script Writer",
    icon: "📝",
    description: "Write full movie scripts, YouTube videos, and short stories in seconds with AI.",
    gradient: "from-emerald-900/40 to-teal-900/20",
    border: "border-emerald-500/20",
  },
  {
    title: "Voice Studio",
    icon: "🎙️",
    description: "Generate realistic AI voices in multiple languages. Clone, narrate, and direct your cast.",
    gradient: "from-fuchsia-900/40 to-pink-900/20",
    border: "border-fuchsia-500/20",
  },
  {
    title: "Talking Characters",
    icon: "🧑",
    description: "Bring characters to life with perfectly synchronized speech and expressive emotion.",
    gradient: "from-amber-900/40 to-orange-900/20",
    border: "border-amber-500/20",
  },
];

export default function AIShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-28">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4">
          The Full Studio
        </p>
        <h2 className="text-5xl font-black text-white">
          Everything You Need
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-400">
          Build complete AI movies without switching between different tools.
        </p>
      </motion.div>

      {/* Hero featured card — AI Movie Studio */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ y: -4, transition: { duration: 0.25 } }}
        className="group relative mb-8 overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/80 via-blue-950/60 to-fuchsia-950/40 backdrop-blur-xl cursor-pointer"
      >
        {/* Animated background glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-violet-600/20 blur-[120px] animate-pulse" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-[300px] w-[400px] rounded-full bg-blue-600/15 blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative grid lg:grid-cols-2 gap-0">
          {/* Left — text content */}
          <div className="flex flex-col justify-center gap-6 p-10 lg:p-14">
            <div className="flex items-center gap-3">
              <span className="text-5xl">🎥</span>
              <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 uppercase tracking-widest">
                Flagship Feature
              </span>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white leading-tight">
                AI Movie Studio
              </h3>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-md">
                Combine images, videos, voices, and scripts into complete AI films.
                Direct your vision from a single prompt to a full cinematic scene.
              </p>
            </div>

            <ul className="flex flex-col gap-2">
              {["Full scene generation", "Multi-character dialogue", "Cinematic transitions", "AI soundtrack"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex gap-3 mt-2">
              <button className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-7 py-3.5 font-semibold text-white transition hover:opacity-90 hover:scale-105 shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                Create Your First Movie →
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right — cinematic preview placeholder */}
          <div className="relative hidden lg:flex items-center justify-center p-10">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              {/* Gradient scene placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900/60 via-blue-900/40 to-black" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                  <span className="text-white text-2xl pl-1">▶</span>
                </div>
                <p className="text-sm text-white/50">Cinematic preview</p>
              </div>
              {/* Fake film strip bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-black/60 backdrop-blur flex items-center px-4 gap-3">
                <div className="h-1.5 flex-1 rounded-full bg-white/10">
                  <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
                </div>
                <span className="text-xs text-white/40 shrink-0">0:12 / 0:38</span>
              </div>
              {/* Floating scene tags */}
              <div className="absolute top-3 left-3 rounded-lg bg-black/50 backdrop-blur border border-white/10 px-3 py-1.5 text-xs text-white/70">
                Scene 1 — The Awakening
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 5-card grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, i) => (
          <ShowcaseCard
            key={card.title}
            {...card}
            delay={i * 0.08}
          />
        ))}

        {/* AI Director — CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="group relative overflow-hidden rounded-3xl border border-dashed border-white/20 bg-white/[0.02] p-7 backdrop-blur-xl flex flex-col items-center justify-center gap-4 text-center cursor-pointer hover:border-violet-500/40 transition-colors"
        >
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-600/30 to-blue-600/20 border border-violet-500/20 flex items-center justify-center text-3xl">
            🎬
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">AI Director</h3>
            <p className="text-sm text-gray-500">Coming soon — let AI direct your entire film.</p>
          </div>
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400">
            Coming in v1.0
          </span>
        </motion.div>
      </div>
    </section>
  );
}
