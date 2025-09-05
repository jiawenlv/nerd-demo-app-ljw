import getGoodsPrice from './get-goods-price.js';
import parseGoodsPrice from './parseGoodsPrice.js';
import calculateOrderAmount from './calculateOrderAmount.js';
import generateOrderNumber from './generateOrderNumber.js';
import createOrderRecord from './create-order-record.js';
import parseOrderId from './parseOrderId.js';
import createOrderItem from './create-order-item.js';
import checkWarehouseStock from './check-warehouse-stock.js';
import parseWarehouseStock from './parseWarehouseStock.js';
import updateWarehouseStock from './update-warehouse-stock.js';
import createWarehouseRecord from './create-warehouse-record.js';
import updateGoodsStock from './update-goods-stock.js';
import endOrderSuccess from './end-order-success.js';
import endStockInsufficient from './end-stock-insufficient.js';

export default async function validateStockCondition(IsStockSufficient) {
  // 条件判断逻辑
  if (IsStockSufficient === true) {
    const { PriceData } = await getGoodsPrice(GoodsId);
    const { GoodsPrice } = await parseGoodsPrice(PriceData);
    const { TotalAmount } = await calculateOrderAmount(GoodsPrice, Quantity);
    const { OrderNumber } = await generateOrderNumber(TotalAmount);
    const { OrderData } = await createOrderRecord(UserId, OrderNumber, TotalAmount);
    const { OrderId } = await parseOrderId(OrderData);
    const { OrderItemData } = await createOrderItem(OrderId, GoodsId, Quantity, GoodsPrice);
    const { WarehouseStockData } = await checkWarehouseStock(GoodsId);
    const { SelectedWarehouseId, SelectedWarehouseName } = await parseWarehouseStock(WarehouseStockData, Quantity);
    const { WarehouseUpdateResult } = await updateWarehouseStock(WarehouseId, Quantity);
    const { WarehouseRecordData } = await createWarehouseRecord(OrderId, WarehouseId, Quantity);
    const { UpdateResult } = await updateGoodsStock(GoodsId, Quantity);
    const { Code, Message, Data } = await endOrderSuccess(UpdateResult);
    return { Code, Message, Data };
  } else {
    const { Code, Message, Data } = await endStockInsufficient(PriceData);
    return { Code, Message, Data };
  }

}
