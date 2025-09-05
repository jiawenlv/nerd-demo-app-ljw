// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function createOrderItem(OrderId, GoodsId, Quantity, UnitPrice, Subtotal) {
  try {
    // 执行INSERT查询
    const params = [OrderId, GoodsId, Quantity, UnitPrice, Subtotal];
    const data = await prisma.$queryRawUnsafe(`INSERT INTO "order_item" ("order_id", "goods_id", "quantity", "price_at_purchase", "subtotal", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5, NOW(), NOW()) RETURNING "id"`, ...params);

    // 返回结果
    return {
      OrderItemId: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
