module.exports = {
    "table": "Product",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "primaryKey": true,
        "notNull": true,
        "default": "uuid_generate_v4()",
        "description": "商品唯一标识"
      },
      {
        "name": "code",
        "type": "varchar(100)",
        "notNull": true,
        "unique": true,
        "description": "商品编号"
      },
      {
        "name": "name",
        "type": "varchar(255)",
        "notNull": true,
        "description": "商品名称"
      },
      {
        "name": "description",
        "type": "text",
        "notNull": false,
        "description": "商品描述"
      },
      {
        "name": "categoryId",
        "type": "uuid",
        "notNull": true,
        "description": "分类ID",
        "relation": {
          "table": "Category",
          "field": "id"
        }
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
        "name": "unit",
        "type": "varchar(20)",
        "notNull": true,
        "default": "'piece'",
        "description": "单位：piece, kg, box, etc."
      },
      {
        "name": "costPrice",
        "type": "decimal(10,2)",
        "notNull": true,
        "default": "0",
        "description": "成本价"
      },
      {
        "name": "salePrice",
        "type": "decimal(10,2)",
        "notNull": true,
        "default": "0",
        "description": "销售价"
      },
      {
        "name": "minStock",
        "type": "decimal(10,2)",
        "notNull": true,
        "default": "0",
        "description": "最小库存"
      },
      {
        "name": "maxStock",
        "type": "decimal(10,2)",
        "notNull": true,
        "default": "1000",
        "description": "最大库存"
      },
      {
        "name": "status",
        "type": "varchar(20)",
        "notNull": true,
        "default": "'active'",
        "description": "状态：active, inactive, discontinued"
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