import { prisma } from "@repo/database";

export class SceneRepository {
  async create(data: {
    title: string;
    description?: string;
    order: number;
    prompt?: string;
    projectId: string;
  }) {
    return prisma.scene.create({
      data,
    });
  }

  async findByProject(projectId: string) {
    return prisma.scene.findMany({
      where: {
        projectId,
      },
      orderBy: {
        order: "asc",
      },
    });
  }

  async findById(id: string) {
    return prisma.scene.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    data: Partial<{
      title: string;
      description: string;
      prompt: string;
      order: number;
    }>
  ) {
    return prisma.scene.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string) {
    return prisma.scene.delete({
      where: {
        id,
      },
    });
  }

  async count(projectId: string) {
    return prisma.scene.count({
      where: {
        projectId,
      },
    });
  }
}

export const sceneRepository = new SceneRepository();