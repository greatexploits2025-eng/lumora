"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/features/auth";

const NAV = [
  { href: "/dashboard",           icon: "⬡", label: "Dashboard" },
  { href: "/dashboard/projects",  icon: "🎬", label: "My Projects" },
  { href: "/dashboard/images",    icon: "🎨", label: "AI Images" },
  { href: "/dashboard/videos",    icon: "🎥", label: "Videos" },
  { href: "/dashboard/scripts",   icon: "📝", label: "Scripts" },
  { href: "/dashboard/voices",    icon: "🎙️", label: "Voice Studio" },
  { href: "/dashboard/characters",icon: "🧑", label: "Characters" },
  { href: "/dashboard/studio",    icon: "🎞️", label: "Movie Studio" },
];

const BOTTOM_NAV = [
  { href: "/dashboard/settings",  icon: "⚙️", label: "Settings" },
  { href: "/dashboard/billing",   icon: "💳", label: "Billing" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-white/10 bg-black/20 backdrop-blur-xl">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-white/10 px-6">
        <span className="text-xl font-black bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          LumoraAI
        </span>
      </div>

      {/* Main nav */}
      <nav className="flex flex-1 flex-col gap-1 p-4 overflow-y-auto">
        {NAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                active
                  ? "bg-violet-500/15 border border-violet-500/30 text-white"
                  : "text-gray-500 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom nav */}
      <div className="flex flex-col gap-1 border-t border-white/10 p-4">
        {BOTTOM_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-500 transition hover:bg-white/5 hover:text-white"
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </Link>
        ))}
        <button
          onClick={logout}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-red-500/10 hover:text-red-400 mt-1"
        >
          <span className="text-base">→</span>
          Sign Out
        </button>
      </div>
    </aside>
  );
}
