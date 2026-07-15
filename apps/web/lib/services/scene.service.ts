import { sceneRepository } from "../repositories/scene.repository";
import { auditService } from "./audit.service";

export interface CreateSceneDTO {
  title: string;
  description?: string;
  prompt?: string;
  projectId: string;
  userId: string;
}

export interface UpdateSceneDTO {
  title?: string;
  description?: string;
 prompt?: string;
  order?: number;
}

export class SceneService {
  async create(data: CreateSceneDTO) {
    const count = await sceneRepository.count(data.projectId);

    const scene = await sceneRepository.create({
      ...data,
      order: count + 1,
    });

    await auditService.log({
  action: "SCENE_CREATED",
  entityType: "Scene",
  entityId: scene.id,
  userId: data.userId,
  metadata: {
    title: scene.title,
    projectId: scene.projectId,
  },
});

    return scene;
  }

  async findAll(projectId: string) {
    return sceneRepository.findByProject(projectId);
  }

  async findById(id: string) {
    return sceneRepository.findById(id);
  }

  async update(
  id: string,
  userId: string,
  data: UpdateSceneDTO
) {
    const scene = await sceneRepository.update(
      id,
      data
    );

    await auditService.log({
  action: "SCENE_UPDATED",
  entityType: "Scene",
  entityId: scene.id,
  userId,
  metadata: {
    ...data,
  },
});

    return scene;
  }

  async delete(
  id: string,
  userId: string
) {
  await auditService.log({
    action: "SCENE_DELETED",
    entityType: "Scene",
    entityId: id,
    userId,
  });

  return sceneRepository.delete(id);
}
}

export const sceneService = new SceneService();