

export default async function successEnd(OrderId, OrderNumber) {
  // End节点：构造最终返回结果
  return {
    Code: 200,
    Message: "订单创建成功",
    Data: {"orderId":"CreateOrderRecord_OrderId_0__id","orderNumber":"GenerateOrderNumber_OrderNumber"}
  };

}
