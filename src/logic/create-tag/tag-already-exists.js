

export default async function tagAlreadyExists(CreatedTagData) {
  // End节点：构造最终返回结果
  return {
    Code: 409,
    Message: "标签已存在",
    Data: "Data"
  };

}
