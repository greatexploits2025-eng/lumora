"use client";

import { useState } from "react";

type Props = {
  onGenerate?: (prompt: string) => void;
  loading?: boolean;
};

export default function PromptBox({ onGenerate, loading }: Props) {
  const [prompt, setPrompt] = useState("");
  const MAX = 600;

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0B1024] p-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-white">Movie Prompt</h2>
        <span className={`text-xs font-mono ${prompt.length > MAX * 0.9 ? "text-red-400" : "text-gray-600"}`}>
          {prompt.length}/{MAX}
        </span>
      </div>

      <textarea
        rows={7}
        maxLength={MAX}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={`Describe the movie...\n\nExample: Create a cinematic trailer about an African kingdom where a forgotten prince returns to reclaim the throne...`}
        className="w-full rounded-2xl border border-white/10 bg-[#050816] p-5 text-sm text-white placeholder-gray-600 outline-none resize-none focus:border-violet-500/50 transition-colors leading-relaxed"
      />

      {/* Suggestions */}
      <div className="mt-3 flex flex-wrap gap-2">
        {["African Kingdom", "Space War", "Noah's Ark", "Samurai Epic"].map((s) => (
          <button
            key={s}
            onClick={() => setPrompt((p) => p ? p : `Create a cinematic ${s.toLowerCase()} movie...`)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-500 hover:border-violet-500/40 hover:text-gray-300 transition"
          >
            {s}
          </button>
        ))}
      </div>

      <button
        onClick={() => prompt.trim() && onGenerate?.(prompt)}
        disabled={!prompt.trim() || loading}
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 py-4 font-bold text-white transition hover:opacity-90 disabled:opacity-40 shadow-[0_0_24px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2"
      >
        {loading ? (
          <><span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" /> Generating…</>
        ) : "✦ Generate Movie"}
      </button>
    </div>
  );
}
