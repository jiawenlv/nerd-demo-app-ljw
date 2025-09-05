

export default async function returnWarehouseId(WarehouseId) {
  // End节点：构造最终返回结果
  return {
    code: 200,
    data: {"warehouseId":"CreateWarehouseRecord_WarehouseIdData_0__id"},
    message: "仓库创建成功"
  };

}
