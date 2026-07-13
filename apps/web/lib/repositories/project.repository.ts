import { prisma } from "@repo/database";

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
  return prisma.project.update({
    where: {
      id,
    },
    data,
  });
}

  async delete(id: string, userId: string) {
    return prisma.project.delete({
      where: {
        id,
      },
    });
  }
}

export const projectRepository = new ProjectRepository();