module.exports = {
    "table": "User",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "primaryKey": true,
        "notNull": true,
        "default": "uuid_generate_v4()",
        "description": "用户唯一标识"
      },
      {
        "name": "name",
        "type": "varchar(255)",
        "notNull": true,
        "description": "用户姓名"
      },
      {
        "name": "email",
        "type": "varchar(255)",
        "notNull": true,
        "unique": true,
        "description": "用户邮箱"
      },
      {
        "name": "isVip",
        "type": "boolean",
        "notNull": true,
        "default": "false",
        "description": "是否VIP用户"
      },
      {
        "name": "roles",
        "type": "text[]",
        "notNull": true,
        "default": "'{}'",
        "description": "用户角色列表"
      }
    ]
};