module.exports = {
    "table": "reservoir",
    "columns": [
      {
        "name": "id",
        "type": "integer",
        "primaryKey": true,
        "notNull": true,
        "default": "autoincrement()",
        "description": "水库唯一标识"
      },
      {
        "name": "name",
        "type": "varchar(100)",
        "notNull": true,
        "description": "水库名称"
      },
      {
        "name": "code",
        "type": "varchar(50)",
        "notNull": false,
        "description": "水库代码"
      },
      {
        "name": "location",
        "type": "varchar(200)",
        "notNull": false,
        "description": "位置"
      },
      {
        "name": "capacity",
        "type": "decimal(12,2)",
        "notNull": false,
        "description": "容量"
      },
      {
        "name": "area",
        "type": "decimal(10,2)",
        "notNull": false,
        "description": "面积"
      },
      {
        "name": "status",
        "type": "varchar(20)",
        "notNull": true,
        "default": "'active'",
        "description": "状态"
      },
      {
        "name": "description",
        "type": "text",
        "notNull": false,
        "description": "描述"
      },
      {
        "name": "created_at",
        "type": "timestamp",
        "notNull": true,
        "default": "now()",
        "description": "创建时间"
      },
      {
        "name": "updated_at",
        "type": "timestamp",
        "notNull": true,
        "default": "now()",
        "description": "更新时间"
      },
      {
        "name": "created_by",
        "type": "integer",
        "notNull": false,
        "description": "创建人ID"
      },
      {
        "name": "updated_by",
        "type": "integer",
        "notNull": false,
        "description": "更新人ID"
      }
    ]
};