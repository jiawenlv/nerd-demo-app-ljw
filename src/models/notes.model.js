module.exports = {
    "table": "notes",
    "columns": [
      {
        "name": "note_id",
        "type": "bigint",
        "primaryKey": true,
        "notNull": true,
        "default": "autoincrement()",
        "description": "笔记唯一标识"
      },
      {
        "name": "user_id",
        "type": "varchar(64)",
        "notNull": true,
        "description": "用户ID"
      },
      {
        "name": "notebook_id",
        "type": "bigint",
        "notNull": false,
        "description": "笔记本ID"
      },
      {
        "name": "title",
        "type": "varchar(255)",
        "notNull": true,
        "description": "标题"
      },
      {
        "name": "content",
        "type": "text",
        "notNull": false,
        "description": "内容"
      },
      {
        "name": "content_format",
        "type": "enum",
        "notNull": true,
        "default": "markdown",
        "description": "内容格式"
      },
      {
        "name": "is_pinned",
        "type": "boolean",
        "notNull": true,
        "default": "false",
        "description": "是否置顶"
      },
      {
        "name": "is_archived",
        "type": "boolean",
        "notNull": true,
        "default": "false",
        "description": "是否归档"
      },
      {
        "name": "is_trashed",
        "type": "boolean",
        "notNull": true,
        "default": "false",
        "description": "是否删除"
      },
      {
        "name": "trashed_at",
        "type": "timestamptz",
        "notNull": false,
        "description": "删除时间"
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
      },
      {
        "name": "tags",
        "type": "text",
        "notNull": false,
        "description": "标签"
      }
    ]
};