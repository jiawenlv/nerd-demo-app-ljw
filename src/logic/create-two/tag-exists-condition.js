import tagExistsEnd from './tag-exists-end.js';
import createTagRecord from './create-tag-record.js';
import checkInsertSuccess from './check-insert-success.js';

export default async function tagExistsCondition(TagExistsConditionTagCount) {
  // 条件判断逻辑
  if (TagExistsConditionTagCount > "\"\"") {
    const { TagExistsEndCode, TagExistsEndData, TagExistsEndMessage } = await tagExistsEnd(CreateTagRecordResult);
    return { TagExistsEndCode, TagExistsEndData, TagExistsEndMessage };
  } else {
    const { CreateTagRecordResult } = await createTagRecord(CreateTagRecordUserId, CreateTagRecordTagName);
    return await checkInsertSuccess(CheckInsertSuccessResult);
  }

}
