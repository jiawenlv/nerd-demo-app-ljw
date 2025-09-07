// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function customSQL() {
  try {
    // 执行SELECT查询
    const data = await prisma.$queryRawUnsafe(`SELECT * FROM user`);

    // 返回结果
    return {
      data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
