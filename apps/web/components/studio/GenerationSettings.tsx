"use client";

import { useState } from "react";

const STYLES = ["Cinematic", "Pixar", "Anime", "Documentary", "Hyper Realistic", "Ghibli"];
const DURATIONS = ["30 sec", "1 min", "3 min", "5 min", "10 min"];
const ASPECT_RATIOS = ["16:9", "9:16", "1:1", "21:9"];
const RESOLUTIONS = ["720p", "1080p", "2K", "4K"];
const MODELS = [
  { id: "vision-1",   name: "Lumora Vision 1",       desc: "Fast, high-quality image generation" },
  { id: "director-1", name: "Lumora Director 1",      desc: "Full scene composition & cinematics" },
  { id: "story",      name: "Lumora Story Engine",    desc: "Narrative-driven multi-scene films" },
];

function OptionGroup({
  title,
  items,
  selected,
  onSelect,
}: {
  title: string;
  items: string[];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gray-500">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
              selected === item
                ? "border-violet-500 bg-violet-500/15 text-white"
                : "border-white/10 bg-white/5 text-gray-400 hover:border-violet-500/50 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export type StudioSettings = {
  style: string;
  duration: string;
  aspectRatio: string;
  resolution: string;
  model: string;
};

type Props = {
  onChange?: (settings: StudioSettings) => void;
};

export default function GenerationSettings({ onChange }: Props) {
  const [style,       setStyle]       = useState("Cinematic");
  const [duration,    setDuration]    = useState("1 min");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [resolution,  setResolution]  = useState("1080p");
  const [model,       setModel]       = useState("director-1");

  function update(key: keyof StudioSettings, value: string) {
    const next = { style, duration, aspectRatio, resolution, model, [key]: value };
    if (key === "style")       setStyle(value);
    if (key === "duration")    setDuration(value);
    if (key === "aspectRatio") setAspectRatio(value);
    if (key === "resolution")  setResolution(value);
    if (key === "model")       setModel(value);
    onChange?.(next);
  }

  return (
    <div className="flex flex-col gap-7 rounded-3xl border border-white/10 bg-[#0B1024] p-8">

      <OptionGroup title="Style"        items={STYLES}       selected={style}       onSelect={(v) => update("style", v)} />
      <div className="h-px bg-white/5" />
      <OptionGroup title="Duration"     items={DURATIONS}    selected={duration}    onSelect={(v) => update("duration", v)} />
      <div className="h-px bg-white/5" />
      <OptionGroup title="Aspect Ratio" items={ASPECT_RATIOS}selected={aspectRatio} onSelect={(v) => update("aspectRatio", v)} />
      <div className="h-px bg-white/5" />
      <OptionGroup title="Resolution"   items={RESOLUTIONS}  selected={resolution}  onSelect={(v) => update("resolution", v)} />
      <div className="h-px bg-white/5" />

      {/* AI Model */}
      <div>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gray-500">AI Model</h3>
        <div className="flex flex-col gap-2">
          {MODELS.map((m) => (
            <button
              key={m.id}
              onClick={() => update("model", m.id)}
              className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition-all ${
                model === m.id
                  ? "border-violet-500 bg-violet-500/10"
                  : "border-white/10 bg-white/5 hover:border-violet-500/40"
              }`}
            >
              <div className={`mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 flex items-center justify-center ${
                model === m.id ? "border-violet-500" : "border-gray-600"
              }`}>
                {model === m.id && <div className="h-2 w-2 rounded-full bg-violet-500" />}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{m.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{m.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
