// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function checkTagExists(CheckTagExistsTagId) {
  try {
    // 执行SELECT查询
    const params = [CheckTagExistsTagId];
    const data = await prisma.$queryRawUnsafe(`SELECT "tag_id", "user_id" FROM "tags" WHERE "tag_id" = $1`, ...params);

    // 返回结果
    return {
      CheckTagExistsData: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
