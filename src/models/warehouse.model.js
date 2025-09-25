module.exports = {
    "table": "Warehouse",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "primaryKey": true,
        "notNull": true,
        "default": "uuid_generate_v4()",
        "description": "仓库唯一标识"
      },
      {
        "name": "code",
        "type": "varchar(100)",
        "notNull": true,
        "unique": true,
        "description": "仓库编号"
      },
      {
        "name": "name",
        "type": "varchar(255)",
        "notNull": true,
        "description": "仓库名称"
      },
      {
        "name": "address",
        "type": "text",
        "notNull": false,
        "description": "仓库地址"
      },
      {
        "name": "managerId",
        "type": "uuid",
        "notNull": false,
        "description": "管理员ID"
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