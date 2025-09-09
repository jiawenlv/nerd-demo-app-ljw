import validateInput from './validateInput.js';
import checkTagExists from './check-tag-exists.js';
import tagExistsCondition from './tag-exists-condition.js';

export default async function createTagHandler(TagName, TagType, CreatedBy) {
  // 执行前置节点链
  const { ValidatedTagName, ValidatedTagType, ValidatedCreatedBy } = await validateInput(TagName, TagType, CreatedBy);
  const { TagExistsData } = await checkTagExists(ValidatedTagName, ValidatedTagType);

  // 执行条件节点
  return await tagExistsCondition(TagExistsData);

}
