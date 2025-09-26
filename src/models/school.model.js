module.exports = {
    "table": "school",
    "columns": [
      {
        "name": "id",
        "type": "integer",
        "primaryKey": true,
        "notNull": true,
        "default": "autoincrement()",
        "description": "学校唯一标识"
      },
      {
        "name": "name",
        "type": "varchar(100)",
        "notNull": true,
        "description": "学校名称"
      },
      {
        "name": "code",
        "type": "varchar(20)",
        "notNull": false,
        "description": "学校代码"
      },
      {
        "name": "address",
        "type": "varchar(200)",
        "notNull": false,
        "description": "地址"
      },
      {
        "name": "phone",
        "type": "varchar(20)",
        "notNull": false,
        "description": "电话"
      },
      {
        "name": "principal",
        "type": "varchar(50)",
        "notNull": false,
        "description": "校长"
      },
      {
        "name": "established_date",
        "type": "date",
        "notNull": false,
        "description": "建立日期"
      },
      {
        "name": "type",
        "type": "varchar(20)",
        "notNull": false,
        "description": "类型"
      },
      {
        "name": "status",
        "type": "varchar(10)",
        "notNull": true,
        "default": "'active'",
        "description": "状态"
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
      }
    ]
};