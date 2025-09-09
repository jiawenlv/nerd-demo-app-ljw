// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function checkNotebookNameDuplicate(CheckNotebookNameDuplicateUserId, CheckNotebookNameDuplicateNotebookName) {
  try {
    // 执行SELECT查询
    const params = [CheckNotebookNameDuplicateUserId, CheckNotebookNameDuplicateNotebookName];
    const data = await prisma.$queryRawUnsafe(`SELECT "notebook_id" FROM "notebooks" WHERE "user_id" = $1 AND "name" = $2`, ...params);

    // 返回结果
    return {
      CheckNotebookNameDuplicateNotebookData: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
