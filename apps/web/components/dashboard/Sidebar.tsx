"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import {
  LayoutDashboard,
  FolderOpen,
  CreditCard,
  Settings,
  Clapperboard,
  ImageIcon,
  Mic2,
  Drama,
  FileText,
  Film,
} from "lucide-react";

const MAIN_NAV = [
  {
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    href: "/dashboard/projects",
    icon: FolderOpen,
    label: "Projects",
  },
  {
    href: "/dashboard/billing",
    icon: CreditCard,
    label: "Billing",
  },
  {
    href: "/dashboard/settings",
    icon: Settings,
    label: "Settings",
  },
];

const TOOLS = [
  {
    href: "/studio",
    icon: Clapperboard,
    label: "Movie Studio",
  },
  {
    href: "/studio/images",
    icon: ImageIcon,
    label: "AI Images",
  },
  {
    href: "/studio/voice",
    icon: Mic2,
    label: "Voice Studio",
  },
  {
    href: "/studio/character",
    icon: Drama,
    label: "Character Creator",
  },
  {
    href: "/studio/script",
    icon: FileText,
    label: "Script Writer",
  },
  {
    href: "/studio/video",
    icon: Film,
    label: "Image → Video",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();

  async function handleSignOut() {
    await signOut();
    router.push("/");
  }

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-72 flex-col overflow-hidden border-r border-white/10 bg-[#080B1A]">

      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center gap-2.5 border-b border-white/10 px-6">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 text-xs font-black text-white">
          L
        </div>

        <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-xl font-black text-transparent">
          LumoraAI
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-4">

        {/* Main Navigation */}
        <div className="flex flex-col gap-1">
          {MAIN_NAV.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  active
                    ? "border border-violet-500/25 bg-violet-600/20 text-white"
                    : "text-gray-400 hover:bg-violet-600/10 hover:text-white"
                }`}
              >
                <Icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="h-px bg-white/10" />

        {/* AI Tools */}
        <div className="flex flex-col gap-1">
          <p className="mb-2 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            AI Tools
          </p>

          {TOOLS.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  active
                    ? "border border-violet-500/25 bg-violet-600/20 text-white"
                    : "text-gray-400 hover:bg-violet-600/10 hover:text-white"
                }`}
              >
                <Icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      <div className="shrink-0 border-t border-white/10 p-4">
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <span>↪</span>
          Sign Out
        </button>
      </div>
    </aside>
  );
}