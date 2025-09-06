import checkUserPermission from './check-user-permission.js';
import permissionCondition from './permission-condition.js';
import tagNotFoundEnd from './tag-not-found-end.js';

export default async function tagExistsCondition(CheckTagExistsDataLength) {
  // 条件判断逻辑
  if (CheckTagExistsDataLength > "\"\"") {
    const { CheckUserPermissionData } = await checkUserPermission(CheckUserPermissionTagId, CheckUserPermissionUserId);
    return await permissionCondition(CheckUserPermissionDataLength);
  } else {
    const { TagNotFoundEndCode, TagNotFoundEndData, TagNotFoundEndMessage } = await tagNotFoundEnd(CheckUserPermissionData);
    return { TagNotFoundEndCode, TagNotFoundEndData, TagNotFoundEndMessage };
  }

}
