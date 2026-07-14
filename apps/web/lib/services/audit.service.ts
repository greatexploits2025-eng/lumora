import {
  auditRepository,
  type CreateAuditLogDTO,
} from "../repositories/audit.repository";

class AuditService {
  async log(data: CreateAuditLogDTO) {
    return auditRepository.create(data);
  }
}

export const auditService = new AuditService();