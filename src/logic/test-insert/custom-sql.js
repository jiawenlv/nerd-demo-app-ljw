// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function customSQL(output1, input_1) {
  try {
    // 执行INSERT查询
    const params = [output1];
    const data = await prisma.$queryRawUnsafe(`INSERT INTO "User" (id, name) VALUES ($1, '爱丽丝') RETURNING "id";`, ...params);

    // 返回结果
    return {
      data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
