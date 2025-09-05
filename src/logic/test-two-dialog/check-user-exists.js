// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function checkUserExists(GeneratedUserId) {
  try {
    // 执行SELECT查询
    const params = [GeneratedUserId];
    const data = await prisma.$queryRawUnsafe(`SELECT COUNT(*) as count FROM "user" WHERE "id" = $1`, ...params);

    // 返回结果
    return {
      CheckResult: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
