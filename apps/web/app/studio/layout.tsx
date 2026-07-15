import type { ReactNode } from "react";

import StudioSidebar from "@/components/studio/StudioSidebar";

export default function StudioLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#050816] text-white overflow-hidden">
      <StudioSidebar />

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}