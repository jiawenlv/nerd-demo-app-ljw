

export default async function tagCreationSuccess(Code, Message, Data) {
  // End节点：构造最终返回结果
  return {
    Code: 200,
    Message: "标签创建成功",
    Data: "Data"
  };

}
