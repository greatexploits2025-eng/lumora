import Link from "next/link";
import { projectService } from "@/lib/services/project.service";
import { getCurrentUser } from "@/lib/auth";
import ProjectCard from "./ProjectCard";

export default async function RecentProjects() {
  const user = await getCurrentUser();

  const projects = await projectService.findAll(user.id);

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          Recent Projects
        </h2>

        <Link
          href="/dashboard/projects"
          className="text-sm text-violet-400 hover:text-violet-300"
        >
          View All →
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center">
          <h3 className="text-xl font-semibold text-white">
            No projects yet
          </h3>

          <p className="mt-2 text-gray-400">
            Create your first movie project to begin.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={
                project.description ??
                "No description provided."
              }
              updated={project.updatedAt.toLocaleDateString()}
              status={project.status}
            />
          ))}
        </div>
      )}
    </section>
  );
}