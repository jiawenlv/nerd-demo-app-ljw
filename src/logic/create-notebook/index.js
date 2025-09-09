import validateUserExists from './validate-user-exists.js';
import checkUserExistence from './check-user-existence.js';

export default async function createNotebookHandler(StartUserId, StartNotebookName) {
  // 执行前置节点链
  const { ValidateUserExistsUserData } = await validateUserExists(StartUserId);

  // 执行条件节点
  return await checkUserExistence(ValidateUserExistsUserData);

}
