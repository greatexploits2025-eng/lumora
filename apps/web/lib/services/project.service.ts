import { projectRepository } from "../repositories/project.repository";
import { auditService } from "./audit.service";
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
  const project = await projectRepository.create(data);

  await auditService.log({
    action: "PROJECT_CREATED",
    entityType: "Project",
    entityId: project.id,
    userId: data.userId,
    metadata: {
      title: project.title,
    },
  });

  return project;
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
  const project = await projectRepository.update(
    id,
    userId,
    data
  );

  await auditService.log({
    action: "PROJECT_UPDATED",
    entityType: "Project",
    entityId: project.id,
    userId,
    metadata: { ...data },
  });

  return project;
}

  async delete(id: string, userId: string) {
  await auditService.log({
    action: "PROJECT_DELETED",
    entityType: "Project",
    entityId: id,
    userId,
  });

  return projectRepository.delete(id, userId);
}
}

export const projectService = new ProjectService();