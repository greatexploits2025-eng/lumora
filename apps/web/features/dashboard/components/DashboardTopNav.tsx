"use client";

import { UserButton } from "@clerk/nextjs";
import { useCurrentUser } from "@/features/auth";

export default function DashboardTopNav() {
  const user = useCurrentUser();

  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 bg-black/10 backdrop-blur-xl px-8">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Studio</span>
        <span className="text-gray-700">/</span>
        <span className="text-sm text-white font-medium">Dashboard</span>
      </div>

      <div className="flex items-center gap-4">
        {/* New project button */}
        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
          + New Project
        </button>

        {/* Plan badge */}
        {user && (
          <span className="hidden sm:block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
            {user.plan}
          </span>
        )}

        {/* Clerk user button — handles avatar, profile, sign out */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
