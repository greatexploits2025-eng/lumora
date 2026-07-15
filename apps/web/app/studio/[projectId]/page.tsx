import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { projectService } from "@/lib/services/project.service";

import StudioHeader from "@/components/studio/StudioHeader";
import StudioSidebar from "@/components/studio/StudioSidebar";
import PromptBox from "@/components/studio/PromptBox";
import StudioCanvas from "@/components/studio/StudioCanvas";
import GenerationSettings from "@/components/studio/GenerationSettings";
import Timeline from "@/components/studio/Timeline";

type Props = {
  params: Promise<{
    projectId: string;
  }>;
};

export default async function StudioPage({
  params,
}: Props) {
  const { projectId } = await params;

  const user = await getCurrentUser();

  const project = await projectService.findById(
    projectId,
    user.id
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="flex h-screen bg-[#050816] text-white overflow-hidden">

      <StudioSidebar />

      <div className="flex flex-1 flex-col">

        <StudioHeader
          title={project.title}
        />

        <div className="flex flex-1 overflow-hidden">

          <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-6">

            <PromptBox />

            <StudioCanvas />

            <Timeline />

          </div>

          <GenerationSettings />

        </div>

      </div>

    </main>
  );
}