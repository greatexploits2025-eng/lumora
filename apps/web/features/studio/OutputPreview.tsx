"use client";

import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "loading" | "done";

type Props = {
  status: Status;
  gradient: string;
  label?: string;
  prompt?: string;
  showVideoBar?: boolean;
};

export default function OutputPreview({ status, gradient, label = "Output", prompt, showVideoBar }: Props) {
  return (
    <div className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${gradient}`}>

      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/20"
          >
            <span className="text-4xl">✦</span>
            <span className="text-xs font-mono">{label} will appear here</span>
          </motion.div>
        )}

        {status === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          >
            <div className="h-10 w-10 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
            <span className="text-xs text-violet-300 font-mono animate-pulse">Generating…</span>
          </motion.div>
        )}

        {status === "done" && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0"
          >
            {/* Simulated cinematic scene */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {prompt && (
              <div className="absolute top-3 left-3 rounded-lg border border-white/10 bg-black/50 backdrop-blur px-3 py-1.5 text-xs text-white/70 max-w-[80%] truncate">
                &ldquo;{prompt}&ldquo;
              </div>
            )}

            {/* Fake scene content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 opacity-60">
                <span className="text-5xl">🎬</span>
              </div>
            </div>

            {/* Video bar */}
            {showVideoBar && (
              <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 bg-black/60 backdrop-blur px-4 py-2.5">
                <button className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs pl-0.5">▶</button>
                <div className="h-1 flex-1 rounded-full bg-white/10">
                  <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
                </div>
                <span className="text-xs text-white/40 shrink-0">0:04 / 0:12</span>
              </div>
            )}

            {/* Done badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-green-500/20 border border-green-500/30 px-2.5 py-1 text-xs text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Generated
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
