// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function customSQL(input_1) {
  try {
    // 执行SELECT查询
    const params = [input_1];
    const data = await prisma.$queryRawUnsafe(`SELECT id, name FROM "User" WHERE id = $1;`, ...params);

    // 返回结果
    return {
      data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
