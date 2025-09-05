export default function main(inputs) {
  const stockData = inputs.StockData;
  const requestQuantity = inputs.RequestQuantity;
  
  if (!stockData || stockData.length === 0) {
    return {
      CurrentStock: 0,
      IsStockSufficient: false
    };
  }
  
  const currentStock = stockData[0].stock_quantity;
  const isSufficient = currentStock >= requestQuantity;
  
  return {
    CurrentStock: currentStock,
    IsStockSufficient: isSufficient
  };
}