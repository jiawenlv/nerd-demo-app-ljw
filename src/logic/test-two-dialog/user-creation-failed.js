

export default async function userCreationFailed(GeneratedUserId) {
  // End节点：构造最终返回结果
  return {
    Code: 409,
    Message: "用户已存在，创建失败",
    Data: {"userId":"GenerateUserId_GeneratedUserId"}
  };

}
