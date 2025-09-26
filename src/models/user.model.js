module.exports = {
    "table": "user",
    "columns": [
      {
        "name": "id",
        "type": "varchar(64)",
        "primaryKey": true,
        "notNull": true,
        "description": "用户唯一标识"
      },
      {
        "name": "name",
        "type": "varchar(32)",
        "notNull": true,
        "unique": true,
        "description": "用户名"
      },
      {
        "name": "password",
        "type": "varchar(128)",
        "notNull": true,
        "description": "密码"
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "notNull": false,
        "default": "now()",
        "description": "创建时间"
      },
      {
        "name": "dewrw",
        "type": "varchar(32)",
        "notNull": false,
        "description": "额外字段"
      }
    ]
};