import notebookDuplicateEnd from './notebook-duplicate-end.js';
import createNotebookRecord from './create-notebook-record.js';
import successEnd from './success-end.js';

export default async function checkNotebookDuplicateCondition(CheckNotebookDuplicateConditionNotebookData) {
  // 条件判断逻辑
  if (CheckNotebookDuplicateConditionNotebookData.length > "\"\"") {
    const { NotebookDuplicateEndCode, NotebookDuplicateEndMessage, NotebookDuplicateEndData } = await notebookDuplicateEnd();
    return { NotebookDuplicateEndCode, NotebookDuplicateEndMessage, NotebookDuplicateEndData };
  } else if (CheckNotebookDuplicateConditionNotebookData == null) {
    const { CreateNotebookRecordNotebookId } = await createNotebookRecord(CreateNotebookRecordUserId, CreateNotebookRecordName);
    const { SuccessEndCode, SuccessEndMessage, SuccessEndData } = await successEnd(SuccessEndNotebookId);
    return { SuccessEndCode, SuccessEndMessage, SuccessEndData };
  }
  // 没有匹配的条件，返回空结果
  return {};

}
