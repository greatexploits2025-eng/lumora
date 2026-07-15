import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import StudioHeader from "@/components/studio/StudioHeader";
import PromptBox from "@/components/studio/PromptBox";
import PreviewPanel from "@/components/studio/PreviewPanel";
import Timeline from "@/components/studio/Timeline";
import GenerationSettings from "@/components/studio/GenerationSettings";

export default async function StudioPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <>
      <StudioHeader title="AI Movie Studio" />

      <div className="grid grid-cols-[1fr_380px] gap-6 p-8">

        <div className="space-y-6">

          <PromptBox />

          <PreviewPanel />

          <Timeline />

        </div>

        <GenerationSettings />

      </div>
    </>
  );
}