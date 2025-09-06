import successEnd from './success-end.js';
import insertFailedEnd from './insert-failed-end.js';

export default async function checkInsertSuccess(CheckInsertSuccessResult) {
  // 条件判断逻辑
  if (CheckInsertSuccessResult != null) {
    const { SuccessEndCode, SuccessEndData, SuccessEndMessage } = await successEnd(SuccessEndTagId);
    return { SuccessEndCode, SuccessEndData, SuccessEndMessage };
  } else {
    const { InsertFailedEndCode, InsertFailedEndData, InsertFailedEndMessage } = await insertFailedEnd();
    return { InsertFailedEndCode, InsertFailedEndData, InsertFailedEndMessage };
  }

}
