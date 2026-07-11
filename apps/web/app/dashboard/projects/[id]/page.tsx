import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { projectService } from "@/lib/services/project.service";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectPage({
  params,
}: Props) {
  const { id } = await params;

  const user = await getCurrentUser();

  const project = await projectService.findById(id, user.id);

  if (!project) {
    notFound();
  }

  if (project.userId !== user.id) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      <div className="rounded-3xl border border-white/10 bg-[#0B1024] p-8">

        <p className="text-sm uppercase tracking-widest text-violet-400">
          Project
        </p>

        <h1 className="mt-2 text-4xl font-black text-white">
          {project.title}
        </h1>

        <p className="mt-4 max-w-3xl text-gray-400">
          {project.description || "No description available."}
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#0B1024] p-6">

          <h2 className="mb-4 text-2xl font-bold text-white">
            AI Prompt
          </h2>

          <div className="rounded-xl bg-black/20 p-5 text-gray-300 whitespace-pre-wrap">
            {project.prompt || "No prompt yet."}
          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0B1024] p-6">

          <h2 className="mb-4 text-xl font-bold text-white">
            Project Details
          </h2>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span className="text-gray-500">Genre</span>
              <span className="text-white">
                {project.genre || "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Style</span>
              <span className="text-white">
                {project.style || "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Language</span>
              <span className="text-white">
                {project.language}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Duration</span>
              <span className="text-white">
                {project.duration
                  ? `${project.duration} min`
                  : "-"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Status</span>
              <span className="rounded-lg bg-violet-500/20 px-3 py-1 text-violet-300">
                {project.status}
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}