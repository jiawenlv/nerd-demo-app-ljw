// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function updateGoodsStock(GoodsId, Quantity) {
  try {
    // 执行UPDATE操作
    const params = [Quantity, GoodsId];
    const affectedRows = await prisma.$executeRawUnsafe(`UPDATE "goods" SET "stock_quantity" = "stock_quantity" - $1, "updated_at" = NOW() WHERE "id" = $2`, ...params);
    const data = { affectedRows };

    // 返回结果
    return {
      UpdatedRows: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
