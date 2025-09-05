import getGoodsPrice from './get-goods-price.js';
import generateOrderNumber from './generateOrderNumber.js';
import calculateOrderAmount from './calculateOrderAmount.js';
import createOrderRecord from './create-order-record.js';
import createOrderItem from './create-order-item.js';
import updateGoodsStock from './update-goods-stock.js';
import successEnd from './success-end.js';
import stockInsufficientEnd from './stock-insufficient-end.js';

export default async function checkStockCondition(StockData, Quantity) {
  // 条件判断逻辑
  if (StockData[0].stock_quantity >= 4) {
    const { PriceData } = await getGoodsPrice(GoodsId);
    const { OrderNumber } = await generateOrderNumber(UserId);
    const { TotalAmount, UnitPrice } = await calculateOrderAmount(PriceData, Quantity);
    const { OrderId } = await createOrderRecord(UserId, OrderNumber, TotalAmount);
    const { OrderItemId } = await createOrderItem(OrderId, GoodsId, Quantity, UnitPrice, Subtotal);
    const { UpdatedRows } = await updateGoodsStock(GoodsId, Quantity);
    const { Code, Message, Data } = await successEnd(OrderId, OrderNumber);
    return { Code, Message, Data };
  } else {
    const { Code, Message, Data } = await stockInsufficientEnd(UserId, GoodsId, Quantity);
    return { Code, Message, Data };
  }

}
