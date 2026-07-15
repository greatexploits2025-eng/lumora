import type { ReactNode } from "react";

import StudioHeader from "@/components/studio/StudioHeader";
import StudioSidebar from "@/components/studio/StudioSidebar";
import PreviewPanel from "@/components/studio/PreviewPanel";
import PromptBox from "@/components/studio/PromptBox";
import Timeline from "@/components/studio/Timeline";
import QuickOptions from "@/components/studio/QuickOptions";
import GenerationSettings from "@/components/studio/GenerationSettings";
import AssetSidebar from "@/components/studio/AssetSidebar";

type Props = {
  children: ReactNode;
};

export default function StudioLayout({
  children,
}: Props) {
  return (
    <div className="flex h-screen flex-col bg-[#050816]">

      <StudioHeader />

      <div className="flex flex-1 overflow-hidden">

        <StudioSidebar />

        <main className="flex flex-1 flex-col">

          <div className="flex flex-1 overflow-hidden">

            <div className="flex flex-1 flex-col">

              <PreviewPanel />

              {children}

              <PromptBox />

              <Timeline />

            </div>

            <aside className="w-96 border-l border-white/10 bg-[#090D1D]">

              <QuickOptions />

              <GenerationSettings />

              <AssetSidebar />

            </aside>

          </div>

        </main>

      </div>

    </div>
  );
}