"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROMPTS = [
  "A king walks through a burning city at dawn...",
  "An astronaut discovers life on a distant moon...",
  "A samurai stands alone in a field of cherry blossoms...",
  "Noah's Ark rises above a storming ocean at night...",
  "A futuristic city collapses into the sea...",
];

const STEPS = [
  { label: "Understanding prompt", icon: "🧠" },
  { label: "Generating image",     icon: "🎨" },
  { label: "Creating video",       icon: "🎬" },
  { label: "Synthesising voice",   icon: "🎙️" },
  { label: "Composing scene",      icon: "🎥" },
];

export default function Hero() {
  const [promptIndex, setPromptIndex]   = useState(0);
  const [displayed,   setDisplayed]     = useState("");
  const [typing,      setTyping]        = useState(true);
  const [running,     setRunning]       = useState(false);
  const [stepIndex,   setStepIndex]     = useState(-1);
  const [done,        setDone]          = useState(false);

  // ── Typewriter ────────────────────────────────────────────────────────────
  useEffect(() => {
    const full = PROMPTS[promptIndex]!;
    if (!typing) return;

    setDisplayed("");
    setDone(false);
    setRunning(false);
    setStepIndex(-1);

    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(id);
        setTyping(false);
        // pause then auto-advance
        setTimeout(() => {
          setPromptIndex((p) => (p + 1) % PROMPTS.length);
          setTyping(true);
        }, 3200);
      }
    }, 38);

    return () => clearInterval(id);
  }, [promptIndex, typing]);

  // ── Generation steps ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!running) return;
    if (stepIndex >= STEPS.length - 1) { setDone(true); setRunning(false); return; }

    const id = setTimeout(() => setStepIndex((s) => s + 1), 700);
    return () => clearTimeout(id);
  }, [running, stepIndex]);

  function handleGenerate() {
    if (running) return;
    setDone(false);
    setStepIndex(0);
    setRunning(true);
  }

  const progress = stepIndex < 0 ? 0 : Math.round(((stepIndex + 1) / STEPS.length) * 100);

  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center px-6 text-center overflow-hidden">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2"
      >
        <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
        <span className="text-xs font-semibold uppercase tracking-widest text-violet-300">
          AI Movie Studio — Now Live
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-5xl text-6xl font-black leading-tight text-white sm:text-7xl"
      >
        One Prompt.
        <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
          A Complete Film.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
      >
        Generate scripts, cinematic images, AI videos, voices, and talking
        characters — all from a single idea.
      </motion.p>

      {/* Live prompt terminal */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-12 w-full max-w-2xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden"
      >
        {/* Terminal top bar */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-amber-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-gray-500">lumora — prompt studio</span>
        </div>

        {/* Prompt line */}
        <div className="px-5 py-4 text-left">
          <span className="text-xs text-violet-400 font-mono">› prompt</span>
          <p className="mt-1 font-mono text-sm text-gray-200 min-h-[1.5rem]">
            {displayed}
            <span className="inline-block w-[2px] h-[1em] bg-violet-400 ml-0.5 align-middle animate-pulse" />
          </p>
        </div>

        {/* Progress steps */}
        <AnimatePresence>
          {(running || done) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-white/10 px-5 py-4 flex flex-col gap-2"
            >
              {/* Progress bar */}
              <div className="h-1.5 w-full rounded-full bg-white/10 mb-3">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {STEPS.map((step, i) => {
                const state = i < stepIndex ? "done" : i === stepIndex ? "active" : "pending";
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: state === "pending" ? 0.3 : 1, x: 0 }}
                    className="flex items-center gap-3 font-mono text-xs"
                  >
                    <span>{step.icon}</span>
                    <span className={state === "done" ? "text-green-400" : state === "active" ? "text-violet-300" : "text-gray-600"}>
                      {state === "done" ? "✓ " : state === "active" ? "⟳ " : "  "}
                      {step.label}
                    </span>
                    {state === "active" && (
                      <span className="ml-auto text-violet-400 animate-pulse">running…</span>
                    )}
                    {state === "done" && (
                      <span className="ml-auto text-green-500">done</span>
                    )}
                  </motion.div>
                );
              })}

              {done && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-xs text-green-400 font-mono"
                >
                  ✓ Scene ready — open in Movie Studio
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action row */}
        <div className="flex items-center gap-3 border-t border-white/10 px-5 py-4">
          <button
            onClick={handleGenerate}
            disabled={running}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 hover:scale-105 disabled:opacity-50 disabled:scale-100 shadow-[0_0_24px_rgba(139,92,246,0.4)]"
          >
            {running ? (
              <><span className="h-3.5 w-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" /> Generating…</>
            ) : done ? (
              <>✦ Regenerate</>
            ) : (
              <>✦ Generate Scene</>
            )}
          </button>
          <span className="text-xs text-gray-600">or press ⌘ + Enter</span>
        </div>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 flex flex-col gap-4 sm:flex-row"
      >
        <button className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-4 text-base font-semibold text-white transition hover:opacity-90 hover:scale-105">
          Start Creating Free
        </button>
        <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
          Watch Demo ▶
        </button>
      </motion.div>

      {/* Social proof */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-6 text-xs text-gray-600"
      >
        Trusted by 100,000+ creators in 150 countries
      </motion.p>
    </section>
  );
}
