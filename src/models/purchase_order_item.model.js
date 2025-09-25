module.exports = {
    "table": "PurchaseOrderItem",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "primaryKey": true,
        "notNull": true,
        "default": "uuid_generate_v4()",
        "description": "采购订单明细唯一标识"
      },
      {
        "name": "purchaseOrderId",
        "type": "uuid",
        "notNull": true,
        "description": "采购订单ID",
        "relation": {
          "table": "PurchaseOrder",
          "field": "id"
        }
      },
      {
        "name": "productId",
        "type": "uuid",
        "notNull": true,
        "description": "商品ID",
        "relation": {
          "table": "Product",
          "field": "id"
        }
      },
      {
        "name": "quantity",
        "type": "decimal(10,2)",
        "notNull": true,
        "description": "采购数量"
      },
      {
        "name": "unitPrice",
        "type": "decimal(10,2)",
        "notNull": true,
        "description": "单价"
      },
      {
        "name": "totalPrice",
        "type": "decimal(10,2)",
        "notNull": true,
        "description": "小计金额"
      },
      {
        "name": "receivedQty",
        "type": "decimal(10,2)",
        "notNull": true,
        "default": "0",
        "description": "已收货数量"
      }
    ]
};