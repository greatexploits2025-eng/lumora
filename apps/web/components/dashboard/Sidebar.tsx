"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const MAIN_NAV = [
  { href: "/dashboard",             icon: "⬡",  label: "Dashboard" },
  { href: "/dashboard/projects",    icon: "📁",  label: "Projects" },
  { href: "/dashboard/billing",     icon: "💳",  label: "Billing" },
  { href: "/dashboard/settings",    icon: "⚙️",  label: "Settings" },
];

const TOOLS = [
  { href: "/dashboard/studio/movie",     icon: "🎬", label: "Movie Generator" },
  { href: "/dashboard/studio/images",    icon: "🖼",  label: "AI Images" },
  { href: "/dashboard/studio/voice",     icon: "🎤", label: "Voice Studio" },
  { href: "/dashboard/studio/character", icon: "🎭", label: "Character Creator" },
  { href: "/dashboard/studio/script",    icon: "📜", label: "Script Writer" },
  { href: "/dashboard/studio/video",     icon: "🎞",  label: "Image → Video" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const router = useRouter();

  function isActive(href: string) {
    return pathname === href;
  }

  async function handleSignOut() {
    await signOut();
    router.push("/");
  }

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-white/10 bg-[#07091a] overflow-hidden">

      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center gap-2.5 border-b border-white/10 px-6">
        <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-xs font-black text-white">
          L
        </div>
        <span className="text-lg font-black bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          LumoraAI
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-4">

        {/* Main nav */}
        <div className="flex flex-col gap-1">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                isActive(item.href)
                  ? "bg-violet-500/15 border border-violet-500/25 text-white"
                  : "text-gray-500 hover:bg-white/5 hover:text-gray-300"
              }`}
            >
              <span className="w-5 text-center text-base">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* AI Tools */}
        <div className="flex flex-col gap-1">
          <p className="mb-1 px-3 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            AI Tools
          </p>
          {TOOLS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                isActive(item.href)
                  ? "bg-violet-500/15 border border-violet-500/25 text-white"
                  : "text-gray-500 hover:bg-white/5 hover:text-gray-300"
              }`}
            >
              <span className="w-5 text-center text-base">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom — sign out */}
      <div className="shrink-0 border-t border-white/10 p-4">
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <span className="w-5 text-center">↪</span>
          Sign Out
        </button>
      </div>
    </aside>
  );
}
