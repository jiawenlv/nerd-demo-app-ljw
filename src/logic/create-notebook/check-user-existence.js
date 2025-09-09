import userNotFoundEnd from './user-not-found-end.js';
import checkNotebookNameDuplicate from './check-notebook-name-duplicate.js';
import checkNotebookDuplicateCondition from './check-notebook-duplicate-condition.js';

export default async function checkUserExistence(CheckUserExistenceUserData) {
  // 条件判断逻辑
  if (CheckUserExistenceUserData == null) {
    const { UserNotFoundEndCode, UserNotFoundEndMessage, UserNotFoundEndData } = await userNotFoundEnd();
    return { UserNotFoundEndCode, UserNotFoundEndMessage, UserNotFoundEndData };
  } else if (CheckUserExistenceUserData !== "\"\"") {
    const { CheckNotebookNameDuplicateNotebookData } = await checkNotebookNameDuplicate(CheckNotebookNameDuplicateUserId, CheckNotebookNameDuplicateNotebookName);
    return await checkNotebookDuplicateCondition(CheckNotebookDuplicateConditionNotebookData);
  }
  // 没有匹配的条件，返回空结果
  return {};

}
