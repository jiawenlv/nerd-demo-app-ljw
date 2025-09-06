import updateTag from './update-tag.js';
import getUpdatedTag from './get-updated-tag.js';
import successEnd from './success-end.js';
import permissionDeniedEnd from './permission-denied-end.js';

export default async function permissionCondition(CheckUserPermissionDataLength) {
  // 条件判断逻辑
  if (CheckUserPermissionDataLength > "\"\"") {
    const { UpdateTagUpdatedRows } = await updateTag(UpdateTagTagId, UpdateTagTagName);
    const { GetUpdatedTagData } = await getUpdatedTag(GetUpdatedTagTagId);
    const { SuccessEndCode, SuccessEndData, SuccessEndMessage } = await successEnd(GetUpdatedTagData);
    return { SuccessEndCode, SuccessEndData, SuccessEndMessage };
  } else {
    const { PermissionDeniedEndCode, PermissionDeniedEndData, PermissionDeniedEndMessage } = await permissionDeniedEnd(UpdateTagUpdatedRows);
    return { PermissionDeniedEndCode, PermissionDeniedEndData, PermissionDeniedEndMessage };
  }

}
