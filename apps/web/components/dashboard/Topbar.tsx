"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const LABELS: Record<string, string> = {
  "/dashboard":                   "Dashboard",
  "/dashboard/projects":          "Projects",
  "/dashboard/billing":           "Billing",
  "/dashboard/settings":          "Settings",
  "/dashboard/studio/movie":      "Movie Generator",
  "/dashboard/studio/images":     "AI Images",
  "/dashboard/studio/voice":      "Voice Studio",
  "/dashboard/studio/character":  "Character Creator",
  "/dashboard/studio/script":     "Script Writer",
  "/dashboard/studio/video":      "Image → Video",
};

export default function Topbar() {
  const pathname = usePathname();
  const label = LABELS[pathname] ?? "Dashboard";

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-[#07091a]/80 backdrop-blur-xl px-8">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-600">Studio</span>
        <span className="text-gray-700">/</span>
        <span className="font-semibold text-white">{label}</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">

        {/* Search */}
        <div className="hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-500 w-52">
          <span>🔍</span>
          <span>Search projects…</span>
        </div>

        {/* New project */}
        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 shadow-[0_0_16px_rgba(139,92,246,0.3)]">
          + New
        </button>

        {/* Notifications */}
        <button className="relative h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition">
          🔔
          <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-violet-500 border-2 border-[#07091a] text-[8px] text-white flex items-center justify-center font-bold">
            3
          </span>
        </button>

        {/* Clerk user button */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
