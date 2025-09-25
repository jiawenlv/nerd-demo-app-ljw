module.exports = {
    "table": "SalesOrderItem",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "primaryKey": true,
        "notNull": true,
        "default": "uuid_generate_v4()",
        "description": "销售订单明细唯一标识"
      },
      {
        "name": "salesOrderId",
        "type": "uuid",
        "notNull": true,
        "description": "销售订单ID",
        "relation": {
          "table": "SalesOrder",
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
        "description": "销售数量"
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
        "name": "shippedQty",
        "type": "decimal(10,2)",
        "notNull": true,
        "default": "0",
        "description": "已发货数量"
      }
    ]
};