module.exports = {
    "table": "notebooks",
    "columns": [
      {
        "name": "notebook_id",
        "type": "varchar(64)",
        "primaryKey": true,
        "notNull": true,
        "default": "nextval('notebooks_notebook_id_seq'::regclass)",
        "description": "笔记本唯一标识"
      },
      {
        "name": "user_id",
        "type": "varchar(64)",
        "notNull": true,
        "description": "用户ID"
      },
      {
        "name": "name",
        "type": "varchar(100)",
        "notNull": true,
        "description": "笔记本名称"
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