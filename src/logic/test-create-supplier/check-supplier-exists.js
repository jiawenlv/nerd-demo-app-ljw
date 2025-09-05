// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function checkSupplierExists(code) {
  try {
    // 执行SELECT查询
    const params = [code];
    const data = await prisma.$queryRawUnsafe(`SELECT id, code, name FROM "Supplier" WHERE code = $1`, ...params);

    // 返回结果
    return {
      checkSupplierExistsExistingSupplier: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
