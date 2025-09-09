// 需要导入数据库连接模块
import { prisma } from "../../db/client.js";
import { AppError } from "../../common/appError.js";

export default async function createNoteRecord(CreateNoteRecordNoteData) {
  try {
    // 执行INSERT查询
    const data = await prisma.$queryRawUnsafe(`INSERT INTO "notes" ("user_id", "notebook_id", "title", "content", "content_format", "is_pinned", "is_archived", "is_trashed", "tags", "created_at", "updated_at") VALUES ('${CreateNoteRecordNoteData.user_id}', ${CreateNoteRecordNoteData.notebook_id}, '${CreateNoteRecordNoteData.title}', '${CreateNoteRecordNoteData.content}', '${CreateNoteRecordNoteData.content_format}', ${CreateNoteRecordNoteData.is_pinned}, ${CreateNoteRecordNoteData.is_archived}, ${CreateNoteRecordNoteData.is_trashed}, '${CreateNoteRecordNoteData.tags}', '${CreateNoteRecordNoteData.created_at}', '${CreateNoteRecordNoteData.updated_at}') RETURNING "note_id"`);

    // 返回结果
    return {
      NoteId: data,
    };
  } catch (error) {
    throw new AppError(`数据库操作失败: ${error.message}`, 500);
  }

}
