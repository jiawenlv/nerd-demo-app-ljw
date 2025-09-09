import tagAlreadyExists from './tag-already-exists.js';
import createTagRecord from './create-tag-record.js';
import tagCreationSuccess from './tag-creation-success.js';

export default async function tagExistsCondition(TagExistsData) {
  // 条件判断逻辑
  if (TagExistsData != null) {
    const { Code, Message, Data } = await tagAlreadyExists(CreatedTagData);
    return { Code, Message, Data };
  } else {
    const { CreatedTagData } = await createTagRecord(ValidatedTagName, ValidatedTagType, ValidatedCreatedBy);
    const { Code, Message, Data } = await tagCreationSuccess(Code, Message, Data);
    return { Code, Message, Data };
  }

}
