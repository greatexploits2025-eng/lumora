import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { projectService } from "@/lib/services/project.service";

export default async function StudioPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await getCurrentUser();

  const projects = await projectService.findAll(user.id);

  if (projects.length === 0) {
    redirect("/dashboard");
  }

  const firstProject = projects.at(0);

if (!firstProject) {
  redirect("/dashboard");
}

redirect(`/studio/${firstProject.id}`);
}