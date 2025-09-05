import checkGoodsStock from './check-goods-stock.js';
import parseStockResult from './parseStockResult.js';
import validateStockCondition from './validate-stock-condition.js';

export default async function testCreateOrderHandler(UserId, GoodsId, Quantity) {
  // 执行前置节点链
  const { StockData } = await checkGoodsStock(GoodsId);
  const { CurrentStock, IsStockSufficient } = await parseStockResult(StockData, Quantity);

  // 执行条件节点
  return await validateStockCondition(IsStockSufficient);

}
