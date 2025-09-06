// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function createTagRecord(CreateTagRecordUserId, CreateTagRecordTagName) {
  try {
    // 执行INSERT查询
    const params = [CreateTagRecordUserId, CreateTagRecordTagName];
    const data = await prisma.$queryRawUnsafe(`INSERT INTO "tags" ("user_id", "name", "created_at") VALUES ($1, $2, NOW()) RETURNING "tag_id" as "id"`, ...params);

    // 返回结果
    return {
      CreateTagRecordResult: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
