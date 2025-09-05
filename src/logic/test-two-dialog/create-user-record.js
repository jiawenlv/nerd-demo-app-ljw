// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function createUserRecord(GeneratedUserId, ValidatedUserName, ValidatedUserPassword) {
  try {
    // 执行INSERT查询
    const params = [GeneratedUserId, ValidatedUserName, ValidatedUserPassword];
    const data = await prisma.$queryRawUnsafe(`INSERT INTO "user" ("id", "name", "password", "created_at") VALUES ($1, $2, $3, NOW()) RETURNING "id", "name", "created_at"`, ...params);

    // 返回结果
    return {
      CreateResult: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
