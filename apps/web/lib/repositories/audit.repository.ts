import { prisma, Prisma } from "@repo/database";

export interface CreateAuditLogDTO {
  action: string;
  entityType: string;
  entityId: string;
  metadata?: Prisma.InputJsonValue;
  userId: string;
}

export class AuditRepository {
  async create(data: CreateAuditLogDTO) {
    return prisma.auditLog.create({
      data,
    });
  }

  async findByUser(userId: string) {
    return prisma.auditLog.findMany({
      where: { userId },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findLatest(userId: string, take = 50) {
    return prisma.auditLog.findMany({
      where: { userId },
      orderBy: {
        createdAt: "desc",
      },
      take,
    });
  }
}

export const auditRepository = new AuditRepository();