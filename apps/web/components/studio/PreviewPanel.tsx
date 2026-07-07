"use client";

import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "loading" | "done";

type Props = {
  status?: Status;
  prompt?: string;
  settings?: {
    style: string;
    duration: string;
    aspectRatio: string;
    resolution: string;
  };
};

const STEPS = [
  "Analysing prompt…",
  "Writing script…",
  "Generating images…",
  "Composing video…",
  "Adding voice…",
  "Finalising scene…",
];

export default function PreviewPanel({ status = "idle", prompt, settings }: Props) {
  return (
    <div className="flex flex-col gap-4">

      {/* Settings summary bar */}
      {settings && (
        <div className="flex flex-wrap gap-2">
          {[settings.style, settings.duration, settings.aspectRatio, settings.resolution].map((v) => (
            <span key={v} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
              {v}
            </span>
          ))}
        </div>
      )}

      {/* Preview area */}
      <div className="relative flex min-h-[500px] items-center justify-center rounded-3xl border border-dashed border-white/20 bg-[#0B1024] overflow-hidden">

        {/* Ambient glow when loading */}
        {status === "loading" && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-blue-900/20 animate-pulse" />
        )}

        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4 text-center px-8"
            >
              <div className="text-7xl">🎬</div>
              <h3 className="text-2xl font-bold text-white">Movie Preview</h3>
              <p className="text-gray-500 max-w-xs">
                Enter a prompt, choose your settings, and click Generate Movie.
              </p>
            </motion.div>
          )}

          {status === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-6 text-center px-8"
            >
              <div className="h-16 w-16 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
              <div>
                <p className="text-white font-semibold">Generating your movie…</p>
                {prompt && (
                  <p className="mt-2 text-xs text-gray-500 max-w-xs truncate">"{prompt}"</p>
                )}
              </div>
              {/* Step list */}
              <div className="flex flex-col gap-1.5 text-left w-48">
                {STEPS.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.4 }}
                    className="flex items-center gap-2 text-xs text-gray-500"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-500 shrink-0 animate-pulse" />
                    {step}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {status === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col"
            >
              {/* Fake video output */}
              <div className="flex-1 bg-gradient-to-br from-violet-900/40 via-blue-900/30 to-black flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                    <span className="text-white text-2xl pl-1">▶</span>
                  </div>
                  {prompt && (
                    <p className="text-xs text-white/50 max-w-xs text-center px-4">"{prompt}"</p>
                  )}
                </div>
              </div>
              {/* Video controls */}
              <div className="flex items-center gap-3 bg-black/60 backdrop-blur px-5 py-3">
                <button className="text-white text-sm">▶</button>
                <div className="flex-1 h-1.5 rounded-full bg-white/10">
                  <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
                </div>
                <span className="text-xs text-white/40 shrink-0">0:08 / 0:32</span>
                <button className="text-xs text-gray-500 hover:text-white transition">⬇ Export</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
