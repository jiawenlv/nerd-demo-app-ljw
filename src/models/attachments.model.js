module.exports = {
    "table": "attachments",
    "columns": [
      {
        "name": "attachment_id",
        "type": "bigint",
        "primaryKey": true,
        "notNull": true,
        "default": "autoincrement()",
        "description": "附件唯一标识"
      },
      {
        "name": "note_id",
        "type": "bigint",
        "notNull": true,
        "description": "笔记ID",
        "relation": {
          "table": "notes",
          "field": "note_id"
        }
      },
      {
        "name": "user_id",
        "type": "bigint",
        "notNull": true,
        "description": "用户ID"
      },
      {
        "name": "file_name",
        "type": "varchar(255)",
        "notNull": true,
        "description": "文件名"
      },
      {
        "name": "storage_path",
        "type": "text",
        "notNull": true,
        "description": "存储路径"
      },
      {
        "name": "file_type",
        "type": "varchar(100)",
        "notNull": false,
        "description": "文件类型"
      },
      {
        "name": "file_size",
        "type": "bigint",
        "notNull": true,
        "default": "0",
        "description": "文件大小"
      },
      {
        "name": "uploaded_at",
        "type": "timestamptz",
        "notNull": true,
        "default": "now()",
        "description": "上传时间"
      }
    ]
};