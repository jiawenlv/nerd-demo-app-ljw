module.exports = {
    "table": "goods",
    "columns": [
      {
        "name": "id",
        "type": "varchar(64)",
        "primaryKey": true,
        "notNull": true,
        "description": "商品唯一标识"
      },
      {
        "name": "name",
        "type": "varchar(255)",
        "notNull": true,
        "unique": true,
        "description": "商品名称"
      },
      {
        "name": "price",
        "type": "decimal(10,2)",
        "notNull": true,
        "description": "价格"
      },
      {
        "name": "stock_quantity",
        "type": "integer",
        "notNull": true,
        "description": "库存数量"
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