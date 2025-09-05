export default function main(inputs) {
  const priceData = inputs.PriceData;
  
  if (!priceData || priceData.length === 0) {
    throw new Error('商品价格信息不存在');
  }
  
  return {
    GoodsPrice: priceData[0].price
  };
}