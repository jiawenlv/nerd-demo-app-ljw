// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function checkTagExists(CheckTagExistsUserId, CheckTagExistsTagName) {
  try {
    // 执行SELECT查询
    const params = [CheckTagExistsUserId, CheckTagExistsTagName];
    const data = await prisma.$queryRawUnsafe(`SELECT "tag_id" FROM "tags" WHERE "user_id" = $1 AND "name" = $2`, ...params);

    // 返回结果
    return {
      CheckTagExistsResult: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
