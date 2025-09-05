

export default async function returnErrorCodeExists(WarehouseIdData) {
  // End节点：构造最终返回结果
  return {
    code: 400,
    data: {},
    message: "仓库编码已存在，请使用其他编码"
  };

}
