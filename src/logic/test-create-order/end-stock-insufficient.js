

export default async function endStockInsufficient(PriceData) {
  // End节点：构造最终返回结果
  return {
    Code: "400",
    Message: "库存不足",
    Data: {"CurrentStock":"ParseStockResult_CurrentStock","RequestQuantity":"StartOrderProcess_Quantity"}
  };

}
