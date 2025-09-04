

export default async function endFailure(ErrorMessage, ErrorCode) {
  // End节点：构造最终返回结果
  return {
    code: 500,
    data: {"error":"HandleCreateFailure_ErrorMessage","errorCode":"HandleCreateFailure_ErrorCode"},
    message: "供应商创建失败"
  };

}
