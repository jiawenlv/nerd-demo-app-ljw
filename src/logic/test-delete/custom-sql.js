// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function customSQL(input_1) {
  try {
    // 执行DELETE操作
    const params = [input_1];
    const affectedRows = await prisma.$executeRawUnsafe(`DELETE FROM "User" WHERE id = $1;`, ...params);
    const data = { affectedRows };

    // 返回结果
    return {
      data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
