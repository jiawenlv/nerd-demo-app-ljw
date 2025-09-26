module.exports = {
    "table": "purchase_order_item",
    "columns": [
      {
        "name": "id",
        "type": "integer",
        "primaryKey": true,
        "notNull": true,
        "default": "autoincrement()",
        "description": "采购订单项唯一标识"
      },
      {
        "name": "purchase_order_id",
        "type": "integer",
        "notNull": true,
        "description": "采购订单ID"
      },
      {
        "name": "goods_id",
        "type": "integer",
        "notNull": true,
        "description": "商品ID"
      },
      {
        "name": "quantity",
        "type": "integer",
        "notNull": true,
        "description": "数量"
      },
      {
        "name": "unit_price",
        "type": "decimal(10,2)",
        "notNull": true,
        "description": "单价"
      },
      {
        "name": "total_price",
        "type": "decimal(12,2)",
        "notNull": true,
        "description": "总价"
      },
      {
        "name": "warehouse_id",
        "type": "integer",
        "notNull": false,
        "description": "仓库ID"
      },
      {
        "name": "remark",
        "type": "text",
        "notNull": false,
        "description": "备注"
      }
    ]
};