

export default async function returnSuccess(CreatedUser) {
  // End节点：构造最终返回结果
  return {
    Code: 200,
    Message: "用户创建成功",
    Data: "Data"
  };

}
