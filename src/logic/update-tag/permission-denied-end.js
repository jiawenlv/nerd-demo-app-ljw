

export default async function permissionDeniedEnd(UpdateTagUpdatedRows) {
  // End节点：构造最终返回结果
  return {
    PermissionDeniedEndCode: 403,
    PermissionDeniedEndData: {},
    PermissionDeniedEndMessage: "没有权限修改该标签"
  };

}
