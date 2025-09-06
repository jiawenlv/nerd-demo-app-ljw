import validateInput from './validateInput.js';
import checkTagExists from './check-tag-exists.js';
import tagExistsCondition from './tag-exists-condition.js';

export default async function createTwoHandler(UserId, TagName) {
  // 执行前置节点链
  const { ValidateInputValidatedUserId, ValidateInputValidatedTagName } = await validateInput(UserId, TagName);
  const { CheckTagExistsResult } = await checkTagExists(ValidateInputValidatedUserId, ValidateInputValidatedTagName);

  // 执行条件节点
  return await tagExistsCondition(CheckTagExistsResult);

}
