

export default async function userNotFoundEnd() {
  // End节点：构造最终返回结果
  return {
    UserNotFoundEndCode: 404,
    UserNotFoundEndMessage: "用户不存在",
    UserNotFoundEndData: {}
  };

}
