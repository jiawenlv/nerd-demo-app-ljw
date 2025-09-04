

export default async function endSuccess(SuccessMessage, SuccessSupplierId) {
  // End节点：构造最终返回结果
  return {
    code: 200,
    data: {"message":"HandleCreateSuccess_SuccessMessage","supplierId":"HandleCreateSuccess_SuccessSupplierId"},
    message: "供应商创建成功"
  };

}
