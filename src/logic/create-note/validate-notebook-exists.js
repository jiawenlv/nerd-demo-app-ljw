// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function validateNotebookExists(ValidateNotebookExistsNotebookId, ValidateNotebookExistsUserId) {
  try {
    // 执行SELECT查询
    const params = [ValidateNotebookExistsNotebookId, ValidateNotebookExistsUserId];
    const data = await prisma.$queryRawUnsafe(`SELECT "notebook_id", "user_id" FROM "notebooks" WHERE "notebook_id" = $1 AND "user_id" = $2`, ...params);

    // 返回结果
    return {
      NotebookData: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
