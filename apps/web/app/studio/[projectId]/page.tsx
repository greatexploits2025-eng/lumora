import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { projectService } from "@/lib/services/project.service";

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
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl p-8">

        <div className="mb-10 border-b border-white/10 pb-6">

          <h1 className="text-4xl font-bold">
            {project.title}
          </h1>

          <p className="mt-3 text-gray-400">
            {project.description || "No description yet."}
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-[#0B1024] p-6">
            <h3 className="text-lg font-semibold">Status</h3>
            <p className="mt-3 text-violet-400">
              {project.status}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0B1024] p-6">
            <h3 className="text-lg font-semibold">Genre</h3>
            <p className="mt-3">
              {project.genre || "-"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0B1024] p-6">
            <h3 className="text-lg font-semibold">Language</h3>
            <p className="mt-3">
              {project.language}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0B1024] p-6">
            <h3 className="text-lg font-semibold">Duration</h3>
            <p className="mt-3">
              {project.duration ?? "-"} min
            </p>
          </div>

        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-white/10 p-10 text-center">

          <h2 className="text-3xl font-bold">
            🚀 Lumora Studio
          </h2>

          <p className="mt-4 text-gray-400">
            Script generation, scenes, characters,
            image creation, voices and video editing
            will live here.
          </p>

        </div>

      </div>
    </main>
  );
}