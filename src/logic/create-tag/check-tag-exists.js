// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function checkTagExists(ValidatedTagName, ValidatedTagType) {
  try {
    // 执行SELECT查询
    const params = [ValidatedTagName, ValidatedTagType];
    const data = await prisma.$queryRawUnsafe(`SELECT "id", "name", "type" FROM "employee" WHERE "name" = $1 AND "type" = $2 LIMIT 1`, ...params);

    // 返回结果
    return {
      TagExistsData: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
