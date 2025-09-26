module.exports = {
    "table": "order_item",
    "columns": [
      {
        "name": "id",
        "type": "varchar(64)",
        "primaryKey": true,
        "notNull": true,
        "description": "订单项唯一标识"
      },
      {
        "name": "order_id",
        "type": "varchar(64)",
        "notNull": true,
        "description": "订单ID",
        "relation": {
          "table": "order",
          "field": "id"
        }
      },
      {
        "name": "goods_id",
        "type": "varchar(64)",
        "notNull": true,
        "description": "商品ID",
        "relation": {
          "table": "goods",
          "field": "id"
        }
      },
      {
        "name": "quantity",
        "type": "integer",
        "notNull": true,
        "description": "数量"
      },
      {
        "name": "price_at_purchase",
        "type": "decimal(10,2)",
        "notNull": true,
        "description": "购买时价格"
      },
      {
        "name": "subtotal",
        "type": "decimal(10,2)",
        "notNull": true,
        "description": "小计"
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "notNull": true,
        "default": "now()",
        "description": "创建时间"
      },
      {
        "name": "updated_at",
        "type": "timestamptz",
        "notNull": true,
        "default": "now()",
        "description": "更新时间"
      }
    ]
};