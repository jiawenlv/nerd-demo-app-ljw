// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function createSupplierRecord(code, name, contactName, phone, email, address) {
  try {
    // 执行INSERT查询
    const params = [code, name, contactName, phone, email, address];
    const data = await prisma.$queryRawUnsafe(`INSERT INTO "Supplier" (id, code, name, contactName, phone, email, address, status, "createdAt", "updatedAt") VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, 'active', NOW(), NOW()) RETURNING id, code, name, contactName, phone, email, address, status, "createdAt", "updatedAt"`, ...params);

    // 返回结果
    return {
      createSupplierRecordCreatedSupplier: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
