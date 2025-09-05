

export default async function stockInsufficientEnd(UserId, GoodsId, Quantity) {
  // End节点：构造最终返回结果
  return {
    Code: 400,
    Message: "库存不足",
    Data: {}
  };

}
