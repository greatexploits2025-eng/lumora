import { createProject, getProjects } from "../repositories/project.repository";

export async function createNewProject(data: {
  title: string;
  description?: string;
  genre?: string;
  language?: string;
  userId: string;
}) {
  return createProject(data);
}

export async function listProjects(userId: string) {
  return getProjects(userId);
}