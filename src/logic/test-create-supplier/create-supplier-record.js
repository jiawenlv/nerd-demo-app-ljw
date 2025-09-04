// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function createSupplierRecord(GeneratedSupplierId, ValidatedSupplierCode, ValidatedSupplierName, ValidatedContactName, ValidatedPhone, ValidatedEmail, ValidatedAddress) {
  try {
    // 执行INSERT查询
    const params = [GeneratedSupplierId, ValidatedSupplierCode, ValidatedSupplierName, ValidatedContactName, ValidatedPhone, ValidatedEmail, ValidatedAddress];
    const data = await prisma.$queryRawUnsafe(`INSERT INTO "Supplier" ("id", "code", "name", "contactName", "phone", "email", "address", "status", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7, 'active', NOW(), NOW()) RETURNING "id"`, ...params);

    // 返回结果
    return {
      CreateResult: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
