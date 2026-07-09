import { projectRepository } from "../repositories/project.repository";

export class ProjectService {
  async createProject(data: {
    title: string;
    description?: string;
    prompt?: string;
    genre?: string;
    style?: string;
    language?: string;
    duration?: number;
    userId: string;
  }) {
    return projectRepository.create(data);
  }

  async getProjects(userId: string) {
    return projectRepository.findByUser(userId);
  }

  async getProject(id: string) {
    return projectRepository.findById(id);
  }

  async updateProject(
    id: string,
    data: Partial<{
      title: string;
      description: string;
      prompt: string;
      genre: string;
      style: string;
      language: string;
      duration: number;
      thumbnail: string;
      outputVideo: string;
    }>
  ) {
    return projectRepository.update(id, data);
  }

  async deleteProject(id: string) {
    return projectRepository.delete(id);
  }
}

export const projectService = new ProjectService();