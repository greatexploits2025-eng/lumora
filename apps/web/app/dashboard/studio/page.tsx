"use client";

import { useState } from "react";
import PromptBox from "@/components/studio/PromptBox";
import PreviewPanel from "@/components/studio/PreviewPanel";
import GenerationSettings from "@/components/studio/GenerationSettings";
import type { StudioSettings } from "@/components/studio/GenerationSettings";
import Timeline from "@/components/studio/Timeline";

type Status = "idle" | "loading" | "done";

const CREDITS = 125;

export default function StudioPage() {
  const [status,   setStatus]   = useState<Status>("idle");
  const [prompt,   setPrompt]   = useState("");
  const [settings, setSettings] = useState<StudioSettings>({
    style: "Cinematic", duration: "1 min",
    aspectRatio: "16:9", resolution: "1080p", model: "director-1",
  });

  function handleGenerate(value: string) {
    setPrompt(value);
    setStatus("loading");
    setTimeout(() => setStatus("done"), 6000);
  }

  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-8">

      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-white">AI Movie Studio</h1>
          <p className="mt-1 text-gray-500">Build complete cinematic experiences using AI.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 py-2">
            <span className="text-xs text-gray-400">Credits</span>
            <span className="text-sm font-bold text-violet-300">{CREDITS}</span>
          </div>
          <button className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition">
            New Project
          </button>
        </div>
      </div>

      {/* Main two-column layout */}
      <div className="grid gap-8 xl:grid-cols-2">

        {/* Left — prompt + settings */}
        <div className="flex flex-col gap-6">
          <PromptBox onGenerate={handleGenerate} loading={status === "loading"} />
          <GenerationSettings onChange={setSettings} />
        </div>

        {/* Right — preview */}
        <div className="flex flex-col gap-6">
          <PreviewPanel status={status} prompt={prompt} settings={settings} />
          {status === "done" && (
            <div className="flex gap-3">
              <button className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                ↺ Regenerate
              </button>
              <button className="flex-1 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 py-3 text-sm font-semibold text-white hover:opacity-90 transition">
                ⬇ Export Movie
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Timeline */}
      <Timeline />

    </div>
  );
}
