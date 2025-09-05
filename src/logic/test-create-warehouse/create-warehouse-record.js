// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function createWarehouseRecord(WarehouseName, WarehouseCode, WarehouseAddress, ContactPerson, ContactPhone, Capacity, Status) {
  try {
    // 执行INSERT查询
    const params = [WarehouseName, WarehouseCode, WarehouseAddress, ContactPerson, ContactPhone, Capacity, Status];
    const data = await prisma.$queryRawUnsafe(`INSERT INTO "warehouse" ("name", "code", "address", "contact_person", "contact_phone", "capacity", "status", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW()) RETURNING "id"`, ...params);

    // 返回结果
    return {
      WarehouseIdData: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
