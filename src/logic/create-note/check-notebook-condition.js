import notebookNotFoundEnd from './notebook-not-found-end.js';
import generateNoteData from './generateNoteData.js';

export default async function checkNotebookCondition(CheckNotebookConditionNotebookData) {
  // 条件判断逻辑
  if (CheckNotebookConditionNotebookData == null) {
    const { NotebookNotFoundEndCode, NotebookNotFoundEndMessage, NotebookNotFoundEndData } = await notebookNotFoundEnd();
    return { NotebookNotFoundEndCode, NotebookNotFoundEndMessage, NotebookNotFoundEndData };
  } else if (CheckNotebookConditionNotebookData != null) {
    const { NoteData } = await generateNoteData(GenerateNoteDataUserId, GenerateNoteDataNotebookId, GenerateNoteDataNoteTitle, GenerateNoteDataNoteContent);
    return { NoteData };
  }
  // 没有匹配的条件，返回空结果
  return {};

}
