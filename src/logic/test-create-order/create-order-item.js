// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function createOrderItem(OrderId, GoodsId, Quantity, GoodsPrice) {
  try {
    // 执行INSERT查询
    const params = [OrderId, GoodsId, Quantity, GoodsPrice];
    const data = await prisma.$queryRawUnsafe(`INSERT INTO "order_item" ("id", "order_id", "goods_id", "quantity", "price_at_purchase", "subtotal", "created_at", "updated_at") VALUES (gen_random_uuid()::varchar(64), $1, $2, $3, $4, $3 * $4, NOW(), NOW()) RETURNING "id"`, ...params);

    // 返回结果
    return {
      OrderItemData: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
