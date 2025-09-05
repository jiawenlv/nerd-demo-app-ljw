import validateInput2 from './validateInput2.js';
import checkGoodsStock from './check-goods-stock.js';
import checkStockCondition from './check-stock-condition.js';

export default async function cddHandler(UserId, GoodsId, Quantity) {
  // 执行前置节点链
  const { ValidatedUserId, ValidatedGoodsId, ValidatedQuantity } = await validateInput2(UserId, GoodsId, Quantity);
  const { StockData } = await checkGoodsStock(ValidatedGoodsId);

  // 执行条件节点
  return await checkStockCondition(StockData, ValidatedQuantity);

}
