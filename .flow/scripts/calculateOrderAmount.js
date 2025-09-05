export default function main(inputs) {
  const goodsPrice = inputs.GoodsPrice;
  const quantity = inputs.Quantity;
  
  const totalAmount = goodsPrice * quantity;
  
  return {
    TotalAmount: parseFloat(totalAmount.toFixed(2))
  };
}