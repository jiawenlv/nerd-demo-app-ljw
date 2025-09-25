module.exports = {
    "table": "Category",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "primaryKey": true,
        "notNull": true,
        "default": "uuid_generate_v4()",
        "description": "商品分类唯一标识"
      },
      {
        "name": "code",
        "type": "varchar(100)",
        "notNull": true,
        "unique": true,
        "description": "分类编号"
      },
      {
        "name": "name",
        "type": "varchar(255)",
        "notNull": true,
        "description": "分类名称"
      },
      {
        "name": "parentId",
        "type": "uuid",
        "notNull": false,
        "description": "父分类ID",
        "relation": {
          "table": "Category",
          "field": "id"
        }
      },
      {
        "name": "level",
        "type": "integer",
        "notNull": true,
        "default": "1",
        "description": "分类层级"
      },
      {
        "name": "status",
        "type": "varchar(20)",
        "notNull": true,
        "default": "'active'",
        "description": "状态：active, inactive"
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