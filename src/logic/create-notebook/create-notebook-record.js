// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function createNotebookRecord(CreateNotebookRecordUserId, CreateNotebookRecordName) {
  try {
    // 执行INSERT查询
    const params = [CreateNotebookRecordUserId, CreateNotebookRecordName];
    const data = await prisma.$queryRawUnsafe(`INSERT INTO "notebooks" ("user_id", "name", "created_at", "updated_at") VALUES ($1, $2, NOW(), NOW()) RETURNING "notebook_id"`, ...params);

    // 返回结果
    return {
      CreateNotebookRecordNotebookId: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
