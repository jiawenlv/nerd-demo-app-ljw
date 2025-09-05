

export default async function createSuccess(createdSupplier) {
  // End节点：构造最终返回结果
  return {
    code: "201",
    data: "data",
    message: "供应商创建成功"
  };

}
