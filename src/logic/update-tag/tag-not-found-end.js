

export default async function tagNotFoundEnd(CheckUserPermissionData) {
  // End节点：构造最终返回结果
  return {
    TagNotFoundEndCode: 404,
    TagNotFoundEndData: {},
    TagNotFoundEndMessage: "标签不存在"
  };

}
