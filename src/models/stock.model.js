module.exports = {
    "table": "Stock",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "primaryKey": true,
        "notNull": true,
        "default": "uuid_generate_v4()",
        "description": "库存记录唯一标识"
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
        "name": "warehouseId",
        "type": "uuid",
        "notNull": true,
        "description": "仓库ID",
        "relation": {
          "table": "Warehouse",
          "field": "id"
        }
      },
      {
        "name": "quantity",
        "type": "decimal(10,2)",
        "notNull": true,
        "default": "0",
        "description": "库存数量"
      },
      {
        "name": "lockedQty",
        "type": "decimal(10,2)",
        "notNull": true,
        "default": "0",
        "description": "锁定数量（待发货等）"
      },
      {
        "name": "updatedAt",
        "type": "timestamp",
        "notNull": true,
        "default": "CURRENT_TIMESTAMP",
        "description": "更新时间"
      }
    ]
};