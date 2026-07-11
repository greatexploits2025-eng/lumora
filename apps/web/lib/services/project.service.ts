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

  async findById(id: string, userId: string) {
    return projectRepository.findById(id, userId);
  }

  async update(
    id: string,
    userId: string,
    data: UpdateProjectDTO
  ) {
    return projectRepository.update(id, userId, data);
  }

  async delete(id: string, userId: string) {
    return projectRepository.delete(id, userId);
  }
}

export const projectService = new ProjectService();