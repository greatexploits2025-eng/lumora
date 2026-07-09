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

  async findById(id: string) {
    return prisma.project.findUnique({
      where: { id },
    });
  }

  async findByUser(userId: string) {
    return prisma.project.findMany({
      where: { userId },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }

  async update(
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
    return prisma.project.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.project.delete({
      where: { id },
    });
  }
}

export const projectRepository = new ProjectRepository();