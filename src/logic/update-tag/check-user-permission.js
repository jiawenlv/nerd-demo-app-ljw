// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function checkUserPermission(CheckUserPermissionTagId, CheckUserPermissionUserId) {
  try {
    // 执行SELECT查询
    const params = [CheckUserPermissionTagId, CheckUserPermissionUserId];
    const data = await prisma.$queryRawUnsafe(`SELECT "tag_id", "user_id" FROM "tags" WHERE "tag_id" = $1 AND "user_id" = $2`, ...params);

    // 返回结果
    return {
      CheckUserPermissionData: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
