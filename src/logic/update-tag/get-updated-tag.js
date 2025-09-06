// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function getUpdatedTag(GetUpdatedTagTagId) {
  try {
    // 执行SELECT查询
    const params = [GetUpdatedTagTagId];
    const data = await prisma.$queryRawUnsafe(`SELECT "tag_id", "user_id", "name", "created_at" FROM "tags" WHERE "tag_id" = $1`, ...params);

    // 返回结果
    return {
      GetUpdatedTagData: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
