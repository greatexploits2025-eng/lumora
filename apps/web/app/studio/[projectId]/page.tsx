import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { projectService } from "@/lib/services/project.service";
import { sceneService } from "@/lib/services/scene.service";

import SceneSidebar from "@/components/studio/SceneSidebar";
import StudioHeader from "@/components/studio/StudioHeader";
import PreviewPanel from "@/components/studio/PreviewPanel";
import Timeline from "@/components/studio/Timeline";
import QuickOptions from "@/components/studio/QuickOptions";
import GenerationSettings from "@/components/studio/GenerationSettings";
import AssetSidebar from "@/components/studio/AssetSidebar";
import StudioInitializer from "@/components/studio/StudioInitializer";
import SceneEditor from "@/components/studio/SceneEditor";

type Props = {
  params: Promise<{
    projectId: string;
  }>;
  searchParams: Promise<{
    scene?: string;
  }>;
};

export default async function StudioPage({
  params,
  searchParams,
}: Props) {
  const { projectId } = await params;
  const { scene } = await searchParams;

  const user = await getCurrentUser();

  const project = await projectService.findById(
    projectId,
    user.id
  );

  if (!project) {
    notFound();
  }

  const scenes = await sceneService.findAll(projectId);

  const selectedScene =
    scenes.find((s) => s.id === scene) ??
    scenes[0] ??
    null;

  return (
    <div className="flex h-screen flex-col bg-[#050816] text-white">

      <StudioHeader
        title={project.title ?? "Untitled Project"}
      />

      <StudioInitializer scenes={scenes} />

      <div className="flex flex-1 overflow-hidden">

        <SceneSidebar
          projectId={projectId}
          selectedSceneId={selectedScene?.id}
        />

        <main className="flex flex-1 flex-col">

          <div className="flex flex-1 overflow-hidden">

            <div className="flex flex-1 flex-col gap-6 p-6">

              <SceneEditor
                title={selectedScene?.title ?? ""}
                description={selectedScene?.description ?? ""}
                prompt={selectedScene?.prompt ?? ""}
              />

              <PreviewPanel />

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