"use client";

import { useState } from "react";

type Props = {
  placeholder?: string;
  onSubmit: (prompt: string) => void;
  loading?: boolean;
};

export default function PromptInput({ placeholder = "Describe your scene…", onSubmit, loading }: Props) {
  const [value, setValue] = useState("");

  function handleSubmit() {
    if (!value.trim() || loading) return;
    onSubmit(value.trim());
  }

  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur focus-within:border-violet-500/50 transition-colors">
      <span className="text-violet-400 text-sm font-mono shrink-0">›</span>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-white placeholder-gray-600 outline-none font-mono"
      />
      <button
        onClick={handleSubmit}
        disabled={!value.trim() || loading}
        className="shrink-0 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-1.5 text-xs font-semibold text-white transition hover:opacity-90 disabled:opacity-40"
      >
        {loading ? (
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
            Running
          </span>
        ) : "Generate →"}
      </button>
    </div>
  );
}
