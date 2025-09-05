// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function createOrderRecord(UserId, OrderNumber, TotalAmount) {
  try {
    // 执行INSERT查询
    const params = [UserId, OrderNumber, TotalAmount];
    const data = await prisma.$queryRawUnsafe(`INSERT INTO "order" ("user_id", "order_number", "total_amount", "status", "created_at", "updated_at") VALUES ($1, $2, $3, 'pending', NOW(), NOW()) RETURNING "id"`, ...params);

    // 返回结果
    return {
      OrderId: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
