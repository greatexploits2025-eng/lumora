import { projectRepository } from "../repositories/project.repository";

export interface CreateProjectDTO {
  title: string;
  description?: string;
  prompt?: string;
  genre?: string;
  style?: string;
  language?: string;
  duration?: number;
  userId: string;
}

export interface UpdateProjectDTO {
  title?: string;
  description?: string;
  prompt?: string;
  genre?: string;
  style?: string;
  language?: string;
  duration?: number;
  thumbnail?: string;
  outputVideo?: string;
}

export class ProjectService {
  async create(data: CreateProjectDTO) {
    return projectRepository.create(data);
  }

  async findAll(userId: string) {
    return projectRepository.findByUser(userId);
  }

  async findById(id: string) {
    return projectRepository.findById(id);
  }

  async update(id: string, data: UpdateProjectDTO) {
    return projectRepository.update(id, data);
  }

  async delete(id: string) {
    return projectRepository.delete(id);
  }
}

export const projectService = new ProjectService();