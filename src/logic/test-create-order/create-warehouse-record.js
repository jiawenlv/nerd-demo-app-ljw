// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function createWarehouseRecord(OrderId, WarehouseId, Quantity) {
  try {
    // 执行INSERT查询
    const params = [OrderId, WarehouseId, Quantity];
    const data = await prisma.$queryRawUnsafe(`INSERT INTO "warehouse_record" ("id", "order_id", "warehouse_id", "outbound_quantity", "record_type", "created_at") VALUES (gen_random_uuid()::varchar(64), $1, $2, $3, 'outbound', NOW()) RETURNING "id"`, ...params);

    // 返回结果
    return {
      WarehouseRecordData: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
