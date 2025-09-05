import validateInput from './validateInput.js';
import createTagRecord from './create-tag-record.js';
import end from './end.js';

export default async function testCreateTagHandler(userId, tagName) {
  // 执行工作流链
  const { validatedUserId, validatedTagName } = await validateInput("", "");
  const { TagData } = await createTagRecord("", "");
  const { code, message, data } = await end(TagData);

  return { code, message, data };

}
