

export default async function endOrderSuccess(UpdateResult) {
  // End节点：构造最终返回结果
  return {
    Code: "200",
    Message: "订单创建成功",
    Data: {"OrderId":"ParseOrderId_OrderId","OrderNumber":"GenerateOrderNumber_OrderNumber","TotalAmount":"CalculateOrderAmount_TotalAmount","WarehouseId":"ParseWarehouseStock_SelectedWarehouseId","WarehouseName":"ParseWarehouseStock_SelectedWarehouseName"}
  };

}
