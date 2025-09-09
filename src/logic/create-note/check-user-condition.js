import userNotFoundEnd from './user-not-found-end.js';
import validateNotebookExists from './validate-notebook-exists.js';
import checkNotebookCondition from './check-notebook-condition.js';

export default async function checkUserCondition(CheckUserConditionUserData) {
  // 条件判断逻辑
  if (CheckUserConditionUserData == null) {
    const { UserNotFoundEndCode, UserNotFoundEndMessage, UserNotFoundEndData } = await userNotFoundEnd();
    return { UserNotFoundEndCode, UserNotFoundEndMessage, UserNotFoundEndData };
  } else if (CheckUserConditionUserData != null) {
    const { NotebookData } = await validateNotebookExists(ValidateNotebookExistsNotebookId, ValidateNotebookExistsUserId);
    return await checkNotebookCondition(CheckNotebookConditionNotebookData);
  }
  // 没有匹配的条件，返回空结果
  return {};

}
