module.exports = {
    "table": "PurchaseOrder",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "primaryKey": true,
        "notNull": true,
        "default": "uuid_generate_v4()",
        "description": "采购订单唯一标识"
      },
      {
        "name": "orderNo",
        "type": "varchar(100)",
        "notNull": true,
        "unique": true,
        "description": "订单编号"
      },
      {
        "name": "supplierId",
        "type": "uuid",
        "notNull": true,
        "description": "供应商ID",
        "relation": {
          "table": "Supplier",
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
        "name": "orderDate",
        "type": "timestamp",
        "notNull": true,
        "default": "CURRENT_TIMESTAMP",
        "description": "订单日期"
      },
      {
        "name": "expectedDate",
        "type": "timestamp",
        "notNull": false,
        "description": "预期到货日期"
      },
      {
        "name": "status",
        "type": "varchar(20)",
        "notNull": true,
        "default": "'pending'",
        "description": "状态：pending, confirmed, received, cancelled"
      },
      {
        "name": "totalAmount",
        "type": "decimal(10,2)",
        "notNull": true,
        "default": "0",
        "description": "订单总金额"
      },
      {
        "name": "paidAmount",
        "type": "decimal(10,2)",
        "notNull": true,
        "default": "0",
        "description": "已付金额"
      },
      {
        "name": "remarks",
        "type": "text",
        "notNull": false,
        "description": "备注"
      },
      {
        "name": "createdAt",
        "type": "timestamp",
        "notNull": true,
        "default": "CURRENT_TIMESTAMP",
        "description": "创建时间"
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