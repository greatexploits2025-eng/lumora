"use client";

import { useState } from "react";
import { FileText, Users, Mic2, Music, Film, Download } from "lucide-react";

const TABS = [
  { icon: FileText, label: "Script" },
  { icon: Users,    label: "Characters" },
  { icon: Mic2,     label: "Voice" },
  { icon: Music,    label: "Music" },
  { icon: Film,     label: "Timeline" },
  { icon: Download, label: "Export" },
];

export default function AssetSidebar() {
  const [active, setActive] = useState("Script");

  return (
    <aside className="flex w-64 shrink-0 flex-col border-l border-white/10 bg-[#0B1024]">
      {/* Tab buttons */}
      <div className="flex flex-col gap-1 p-4 border-b border-white/10">
        <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">
          Assets
        </p>
        {TABS.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all text-left ${
              active === label
                ? "bg-violet-500/15 border border-violet-500/25 text-white"
                : "text-gray-500 hover:bg-white/5 hover:text-gray-300"
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>

      {/* Panel content */}
      <div className="flex-1 p-5">
        <p className="text-xs text-gray-600 text-center mt-8">
          {active} assets will appear here after generation.
        </p>
      </div>
    </aside>
  );
}
