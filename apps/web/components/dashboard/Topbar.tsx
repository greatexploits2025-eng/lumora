"use client";

import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import CreateProjectModal from "@/components/projects/CreateProjectModal";

export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CreateProjectModal
        open={open}
        onClose={() => setOpen(false)}
      />

      <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#080B1A] px-10">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Dashboard
          </h2>

          <p className="text-sm text-gray-400">
            Welcome back to Lumora.
          </p>
        </div>

        <div className="flex items-center gap-4">

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 shadow-[0_0_16px_rgba(139,92,246,0.3)]"
          >
            + New Project
          </button>

          <UserButton />

        </div>
      </header>
    </>
  );
}