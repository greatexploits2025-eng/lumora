"use client";

import { useState } from "react";

// ── Shared ────────────────────────────────────────────────────────────────────

function CardShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex flex-col gap-6 ${className}`}>
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-bold text-white">{children}</h3>
  );
}

function Divider() {
  return <div className="h-px w-full bg-white/10" />;
}

// ── Card 1 — AI Image Generation ─────────────────────────────────────────────

const PROMPTS = [
  "A king standing in the rain",
  "A futuristic city at sunset",
  "A lone astronaut on Mars",
];

const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
];

function ImageGenCard() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);

  function generate(i: number) {
    setLoading(true);
    setTimeout(() => { setActive(i); setLoading(false); }, 800);
  }

  return (
    <CardShell>
      <CardTitle>🖼 AI Image Generation</CardTitle>
      <Divider />

      {/* Image preview */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/40">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={PLACEHOLDER_IMAGES[active]}
            alt={PROMPTS[active]}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Prompt selector */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-gray-500 uppercase tracking-widest">Prompt</p>
        {PROMPTS.map((p, i) => (
          <button
            key={p}
            onClick={() => generate(i)}
            className={`text-left rounded-xl px-4 py-2.5 text-sm transition-all border ${
              active === i
                ? "border-violet-500 bg-violet-500/10 text-white"
                : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
            }`}
          >
            "{p}"
          </button>
        ))}
      </div>

      <button
        onClick={() => generate((active + 1) % PROMPTS.length)}
        className="mt-auto flex items-center gap-2 self-start rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
      >
        Generate →
      </button>
    </CardShell>
  );
}

// ── Card 2 — Image → Cinematic Video ─────────────────────────────────────────

function VideoCard() {
  const [converted, setConverted] = useState(false);
  const [loading, setLoading] = useState(false);

  function convert() {
    setLoading(true);
    setTimeout(() => { setConverted(true); setLoading(false); }, 1200);
  }

  return (
    <CardShell>
      <CardTitle>🎥 Image → Cinematic Video</CardTitle>
      <Divider />

      <div className="flex flex-col gap-4">
        {/* Source image */}
        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-500 uppercase tracking-widest">Source Image</p>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80"
              alt="Source"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-2xl animate-bounce">↓</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Video preview */}
        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-500 uppercase tracking-widest">Cinematic Video</p>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center">
            {!converted ? (
              <div className="flex flex-col items-center gap-3 text-gray-500">
                <span className="text-4xl">🎬</span>
                <span className="text-sm">Click convert to preview</span>
              </div>
            ) : loading ? (
              <div className="h-8 w-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80"
                  alt="Video preview"
                  className="w-full h-full object-cover"
                />
                {/* Fake video overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                  <div className="h-1 flex-1 rounded-full bg-white/20">
                    <div className="h-full w-2/3 rounded-full bg-violet-500 animate-pulse" />
                  </div>
                  <span className="text-xs text-white/60">0:04 / 0:06</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <span className="text-white text-xl pl-1">▶</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={convert}
        disabled={loading}
        className="mt-auto flex items-center gap-2 self-start rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-50"
      >
        {loading ? "Converting…" : converted ? "Reconvert →" : "Convert to Video →"}
      </button>
    </CardShell>
  );
}

// ── Card 3 — Script → Voice → Talking Character ───────────────────────────────

const PIPELINE = [
  { icon: "📝", label: "Script", desc: "\"A lonely warrior walks through the ruins of a forgotten city, searching for the last ember of hope…\"" },
  { icon: "🎤", label: "Voice", desc: "Deep, cinematic narration generated in seconds." },
  { icon: "🎭", label: "Talking Character", desc: "Your character speaks — lip-synced, expressive, cinematic." },
];

function PipelineCard() {
  const [step, setStep] = useState(0);

  return (
    <CardShell>
      <CardTitle>🎭 Script → Voice → Talking Character</CardTitle>
      <Divider />

      {/* Steps */}
      <div className="flex flex-col gap-3">
        {PIPELINE.map((s, i) => (
          <div key={s.label}>
            <button
              onClick={() => setStep(i)}
              className={`w-full text-left rounded-2xl border p-4 transition-all ${
                step === i
                  ? "border-violet-500 bg-violet-500/10"
                  : i < step
                  ? "border-green-500/40 bg-green-500/5"
                  : "border-white/10 bg-white/5 opacity-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className={`text-sm font-semibold ${step === i ? "text-white" : i < step ? "text-green-400" : "text-gray-500"}`}>
                    {i < step ? "✓ " : ""}{s.label}
                  </p>
                  {step === i && (
                    <p className="mt-1 text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                  )}
                </div>
              </div>
            </button>
            {i < PIPELINE.length - 1 && (
              <div className="flex justify-center py-1">
                <span className={`text-lg transition-colors ${i < step ? "text-green-400" : "text-white/20"}`}>↓</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Character preview */}
      {step === 2 && (
        <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-4 flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-2xl shrink-0">
            🧙
          </div>
          <div>
            <p className="text-sm text-white font-medium">Character is speaking…</p>
            <div className="mt-2 flex gap-1 items-end h-5">
              {[3, 5, 4, 6, 3, 5, 4, 3, 6, 4].map((h, i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-violet-400 animate-pulse"
                  style={{ height: `${h * 3}px`, animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-3 mt-auto">
        {step < PIPELINE.length - 1 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Next: {PIPELINE[step + 1]?.icon} {PIPELINE[step + 1]?.label} →
          </button>
        ) : (
          <button
            onClick={() => setStep(0)}
            className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            ↺ Restart
          </button>
        )}
      </div>
    </CardShell>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function AIShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">
          See It In Action
        </p>
        <h2 className="text-4xl font-black text-white">
          Don't just read about it.{" "}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Experience it.
          </span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Every tool Lumora offers — live, interactive, right here.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <ImageGenCard />
        <VideoCard />
        <PipelineCard />
      </div>
    </section>
  );
}
