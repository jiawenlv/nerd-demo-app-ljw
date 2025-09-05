// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function checkGoodsStock(GoodsId) {
  try {
    // 执行SELECT查询
    const params = [GoodsId];
    const data = await prisma.$queryRawUnsafe(`SELECT "stock_quantity" FROM "goods" WHERE "id" = $1`, ...params);

    // 返回结果
    return {
      StockData: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
