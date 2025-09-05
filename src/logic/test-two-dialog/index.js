import validateInput from './validateInput.js';
import generateUserId from './generateUserId.js';
import checkUserExists from './check-user-exists.js';
import parseCheckResult from './parseCheckResult.js';
import userExistsCondition from './user-exists-condition.js';

export default async function testTwoDialogHandler(UserName, UserPassword) {
  // 执行前置节点链
  const { ValidatedUserName, ValidatedUserPassword } = await validateInput(UserName, UserPassword);
  const { GeneratedUserId } = await generateUserId(ValidatedUserName);
  const { CheckResult } = await checkUserExists(GeneratedUserId);
  const { UserExists } = await parseCheckResult(CheckResult);

  // 执行条件节点
  return await userExistsCondition(UserExists);

}
