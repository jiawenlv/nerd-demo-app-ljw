import validateInput from './validateInput.js';
import createTagRecord from './create-tag-record.js';
import end from './end.js';

export default async function createTagHandler(UserId, TagName) {
  // 执行工作流链
  const { ValidateInputValidatedUserId, ValidateInputValidatedTagName } = await validateInput(UserId, TagName);
  const { CreateTagRecordTagId } = await createTagRecord(ValidateInputValidatedUserId, ValidateInputValidatedTagName);
  const { EndCode, EndMessage, EndData } = await end(CreateTagRecordTagId);

  return { EndCode, EndMessage, EndData };

}
