// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function checkWarehouseStock(GoodsId) {
  try {
    // 执行SELECT查询
    const params = [GoodsId];
    const data = await prisma.$queryRawUnsafe(`SELECT "id", "goods_id", "warehouse_name", "stock_quantity", "location" FROM "warehouse" WHERE "goods_id" = $1 AND "stock_quantity" > 0 ORDER BY "stock_quantity" DESC`, ...params);

    // 返回结果
    return {
      WarehouseStockData: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
