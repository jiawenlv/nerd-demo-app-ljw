module.exports = {
    "table": "StockMovement",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "primaryKey": true,
        "notNull": true,
        "default": "uuid_generate_v4()",
        "description": "库存变动记录唯一标识"
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
        "name": "type",
        "type": "varchar(20)",
        "notNull": true,
        "description": "变动类型：in, out, transfer, adjust"
      },
      {
        "name": "quantity",
        "type": "decimal(10,2)",
        "notNull": true,
        "description": "变动数量（正数表示入库，负数表示出库）"
      },
      {
        "name": "beforeQty",
        "type": "decimal(10,2)",
        "notNull": true,
        "description": "变动前数量"
      },
      {
        "name": "afterQty",
        "type": "decimal(10,2)",
        "notNull": true,
        "description": "变动后数量"
      },
      {
        "name": "unitPrice",
        "type": "decimal(10,2)",
        "notNull": false,
        "description": "单价"
      },
      {
        "name": "totalAmount",
        "type": "decimal(10,2)",
        "notNull": false,
        "description": "总金额"
      },
      {
        "name": "reason",
        "type": "text",
        "notNull": false,
        "description": "变动原因"
      },
      {
        "name": "refType",
        "type": "varchar(50)",
        "notNull": false,
        "description": "关联单据类型：purchase_order, sales_order, adjust, transfer"
      },
      {
        "name": "refId",
        "type": "uuid",
        "notNull": false,
        "description": "关联单据ID"
      },
      {
        "name": "operatorId",
        "type": "uuid",
        "notNull": false,
        "description": "操作员ID"
      },
      {
        "name": "createdAt",
        "type": "timestamp",
        "notNull": true,
        "default": "CURRENT_TIMESTAMP",
        "description": "创建时间"
      }
    ]
};