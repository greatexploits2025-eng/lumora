import { prisma } from "../prisma";

export async function createProject(data: {
  title: string;
  description?: string;
  genre?: string;
  language?: string;
  userId: string;
}) {
  return prisma.project.create({
    data,
  });
}

export async function getProjects(userId: string) {
  return prisma.project.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}