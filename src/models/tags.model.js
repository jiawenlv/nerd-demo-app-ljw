module.exports = {
    "table": "tags",
    "columns": [
      {
        "name": "tag_id",
        "type": "bigint",
        "primaryKey": true,
        "notNull": true,
        "default": "autoincrement()",
        "description": "标签唯一标识"
      },
      {
        "name": "user_id",
        "type": "varchar(64)",
        "notNull": true,
        "description": "用户ID"
      },
      {
        "name": "name",
        "type": "varchar(50)",
        "notNull": true,
        "description": "标签名称"
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "notNull": true,
        "default": "now()",
        "description": "创建时间"
      }
    ]
};