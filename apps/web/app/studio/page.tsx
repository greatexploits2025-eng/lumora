import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import StudioHeader from "@/components/studio/StudioHeader";
import PromptBox from "@/components/studio/PromptBox";
import PreviewPanel from "@/components/studio/PreviewPanel";
import QuickOptions from "@/components/studio/QuickOptions";
import AssetSidebar from "@/components/studio/AssetSidebar";
import Timeline from "@/components/studio/Timeline";
import StudioCanvas from "@/components/studio/StudioCanvas";

export default async function StudioPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <main className="flex min-h-screen flex-col bg-[#050816] text-white">
      <StudioHeader />

      <div className="flex flex-1 overflow-hidden">
        {/* Main workspace */}
        <div className="flex flex-1 flex-col gap-8 overflow-y-auto p-8">
          <QuickOptions />

          <div className="grid gap-8 lg:grid-cols-2">
            <PromptBox />
            <PreviewPanel />
          </div>

          <Timeline />
        </div>

        {/* Asset sidebar */}
        <AssetSidebar />
      </div>
      <div>
   <StudioCanvas />
</div>
    </main>
  );
}
