import validateUserExists from './validate-user-exists.js';
import checkUserCondition from './check-user-condition.js';

export default async function createNoteHandler(UserId, NotebookId, NoteTitle, NoteContent) {
  // 执行前置节点链
  const { UserData } = await validateUserExists(UserId);

  // 执行条件节点
  return await checkUserCondition(UserData);

}
