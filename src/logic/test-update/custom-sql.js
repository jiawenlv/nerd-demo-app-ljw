// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function customSQL(id, name) {
  try {
    // 执行UPDATE操作
    const params = [name, id];
    const affectedRows = await prisma.$executeRawUnsafe(`UPDATE "User" SET name = $1 WHERE id = $2;`, ...params);
    const data = { affectedRows };

    // 返回结果
    return {
      data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
