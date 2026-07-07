"use client";

import { UserButton } from "@clerk/nextjs";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#080B1A] px-10">
      <div>
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <p className="text-sm text-gray-400">Welcome back to Lumora.</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 shadow-[0_0_16px_rgba(139,92,246,0.3)]">
          + New
        </button>
        <UserButton
          afterSignOutUrl="/"
          appearance={{ elements: { avatarBox: "w-11 h-11" } }}
        />
      </div>
    </header>
  );
}
