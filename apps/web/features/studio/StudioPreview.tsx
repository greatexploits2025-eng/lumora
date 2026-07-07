"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import StudioCard from "./StudioCard";
import PromptInput from "./PromptInput";
import OutputPreview from "./OutputPreview";

type Status = "idle" | "loading" | "done";

const TOOL_CARDS = [
  {
    icon: "🎨",
    title: "AI Image Generator",
    description: "Photorealistic cinematic images from text",
    placeholder: "A lone warrior stands in a field of fire…",
    gradient: "from-violet-950/60 to-blue-950/30",
    border: "border-violet-500/20",
    accentColor: "bg-violet-600",
    delay: 0.05,
  },
  {
    icon: "🎬",
    title: "Image → Video",
    description: "Animate any image into a cinematic clip",
    placeholder: "Slow zoom into the warrior's eyes…",
    gradient: "from-blue-950/60 to-cyan-950/30",
    border: "border-blue-500/20",
    accentColor: "bg-blue-600",
    showVideoBar: true,
    delay: 0.1,
  },
  {
    icon: "🎙️",
    title: "Voice Studio",
    description: "Realistic AI narration and voice cloning",
    placeholder: "Narrate: 'In the age of fire, one man stood…'",
    gradient: "from-fuchsia-950/60 to-pink-950/30",
    border: "border-fuchsia-500/20",
    accentColor: "bg-fuchsia-600",
    delay: 0.15,
  },
  {
    icon: "📝",
    title: "Script Writer",
    description: "Full screenplays from a single idea",
    placeholder: "A thriller about an AI that gains consciousness…",
    gradient: "from-emerald-950/60 to-teal-950/30",
    border: "border-emerald-500/20",
    accentColor: "bg-emerald-600",
    delay: 0.2,
  },
  {
    icon: "🧑",
    title: "Talking Characters",
    description: "Lip-synced AI avatars that speak your script",
    placeholder: "Character says: 'The city will burn tonight…'",
    gradient: "from-amber-950/60 to-orange-950/30",
    border: "border-amber-500/20",
    accentColor: "bg-amber-600",
    delay: 0.25,
  },
];

// ── Hero Studio Card ──────────────────────────────────────────────────────────

function HeroStudioCard() {
  const [status, setStatus] = useState<Status>("idle");
  const [prompt, setPrompt] = useState("");
  const [videoStatus, setVideoStatus] = useState<Status>("idle");

  function handleGenerate(value: string) {
    setPrompt(value);
    setStatus("loading");
    setVideoStatus("idle");
    setTimeout(() => setStatus("done"), 2400);
  }

  function handleConvertToVideo() {
    if (status !== "done") return;
    setVideoStatus("loading");
    setTimeout(() => setVideoStatus("done"), 2000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mb-8 overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/80 via-blue-950/50 to-black backdrop-blur-xl"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[400px] w-[500px] rounded-full bg-violet-600/20 blur-[120px] animate-pulse" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-[300px] w-[400px] rounded-full bg-blue-600/15 blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🎥</span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-black text-white">AI Movie Studio</h3>
                <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-2.5 py-0.5 text-xs font-semibold text-violet-300">
                  Flagship
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-0.5">
                From a single prompt to a complete cinematic scene
              </p>
            </div>
          </div>

          {/* Pipeline status */}
          <div className="flex flex-col gap-2">
            {[
              { label: "Image Generated",  done: status === "done" },
              { label: "Video Created",    done: videoStatus === "done" },
              { label: "Voice Synthesised",done: videoStatus === "done" },
              { label: "Scene Composed",   done: videoStatus === "done" },
            ].map((step) => (
              <div key={step.label} className="flex items-center gap-2.5 text-sm">
                <span className={`h-2 w-2 rounded-full shrink-0 transition-colors duration-500 ${step.done ? "bg-green-400" : "bg-white/10"}`} />
                <span className={step.done ? "text-green-400" : "text-gray-600"}>
                  {step.done ? "✓ " : ""}{step.label}
                </span>
              </div>
            ))}
          </div>

          <PromptInput
            placeholder="A king walks through a burning city at dawn…"
            onSubmit={handleGenerate}
            loading={status === "loading"}
          />

          <div className="flex gap-3">
            <button
              onClick={handleConvertToVideo}
              disabled={status !== "done" || videoStatus !== "idle"}
              className="flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20 disabled:opacity-30"
            >
              {videoStatus === "loading" ? (
                <><span className="h-3.5 w-3.5 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" /> Converting…</>
              ) : "▶ Convert to Video"}
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              Create Movie →
            </button>
          </div>
        </div>

        {/* Right — dual preview */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">Image Output</p>
            <OutputPreview
              status={status}
              gradient="from-violet-900/40 to-blue-900/20"
              label="Cinematic Image"
              prompt={prompt}
            />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">Video Output</p>
            <OutputPreview
              status={videoStatus}
              gradient="from-blue-900/40 to-cyan-900/20"
              label="Cinematic Video"
              prompt={prompt}
              showVideoBar
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function StudioPreview() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400">
          🔥 AI Studio Preview
        </p>
        <h2 className="text-5xl font-black text-white">
          See It.{" "}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Feel It.
          </span>{" "}
          Build It.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400">
          Every tool is live and interactive. Type a prompt and watch Lumora work.
        </p>
      </motion.div>

      <HeroStudioCard />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {TOOL_CARDS.map((card) => (
          <StudioCard key={card.title} {...card} />
        ))}

        {/* Coming soon — AI Director */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center"
        >
          <div className="h-14 w-14 rounded-2xl border border-violet-500/20 bg-violet-500/10 flex items-center justify-center text-3xl">
            🎬
          </div>
          <div>
            <h3 className="font-bold text-white">AI Director</h3>
            <p className="mt-1 text-sm text-gray-600">
              Let AI orchestrate your entire film automatically.
            </p>
          </div>
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400">
            Coming in v1.0
          </span>
        </motion.div>
      </div>
    </section>
  );
}
