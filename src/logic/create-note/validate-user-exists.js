// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function validateUserExists(ValidateUserExistsUserId) {
  try {
    // 执行SELECT查询
    const params = [ValidateUserExistsUserId];
    const data = await prisma.$queryRawUnsafe(`SELECT "id", "name" FROM "user" WHERE "id" = $1`, ...params);

    // 返回结果
    return {
      UserData: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
