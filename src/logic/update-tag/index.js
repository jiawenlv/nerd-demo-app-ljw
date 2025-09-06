import validateInput from './validateInput.js';
import checkTagExists from './check-tag-exists.js';
import tagExistsCondition from './tag-exists-condition.js';

export default async function updateTagHandler(tagId, userId, tagName) {
  // 执行前置节点链
  const { ValidateInputTagId, ValidateInputUserId, ValidateInputTagName } = await validateInput(tagId, userId, tagName);
  const { CheckTagExistsData } = await checkTagExists(ValidateInputTagId);

  // 执行条件节点
  return await tagExistsCondition(CheckTagExistsData);

}
