import { prisma } from "../prisma";

export class ProjectRepository {
  async create(data: {
    title: string;
    description?: string;
    prompt?: string;
    genre?: string;
    style?: string;
    language?: string;
    duration?: number;
    userId: string;
  }) {
    return prisma.project.create({
      data,
    });
  }

  async findById(id: string, userId: string) {
    return prisma.project.findFirst({
      where: {
        id,
        userId,
      },
    });
  }

  async findByUser(userId: string) {
    return prisma.project.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }

  async update(
    id: string,
    userId: string,
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
    return prisma.project.updateMany({
      where: {
        id,
        userId,
      },
      data,
    });
  }

  async delete(id: string, userId: string) {
    return prisma.project.deleteMany({
      where: {
        id,
        userId,
      },
    });
  }
}

export const projectRepository = new ProjectRepository();