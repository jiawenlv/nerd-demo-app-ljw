module.exports = {
    "table": "class",
    "columns": [
      {
        "name": "id",
        "type": "integer",
        "primaryKey": true,
        "notNull": true,
        "default": "autoincrement()",
        "description": "班级唯一标识"
      },
      {
        "name": "classname",
        "type": "varchar(100)",
        "notNull": true,
        "description": "班级名称"
      },
      {
        "name": "gradeid",
        "type": "integer",
        "notNull": false,
        "description": "年级ID"
      },
      {
        "name": "teacherid",
        "type": "integer",
        "notNull": false,
        "description": "教师ID"
      },
      {
        "name": "studentcount",
        "type": "integer",
        "notNull": true,
        "default": "0",
        "description": "学生人数"
      },
      {
        "name": "status",
        "type": "varchar(20)",
        "notNull": true,
        "default": "'ACTIVE'",
        "description": "状态"
      },
      {
        "name": "createdat",
        "type": "timestamp",
        "notNull": true,
        "default": "now()",
        "description": "创建时间"
      },
      {
        "name": "updatedat",
        "type": "timestamp",
        "notNull": true,
        "default": "now()",
        "description": "更新时间"
      },
      {
        "name": "description",
        "type": "text",
        "notNull": false,
        "description": "描述"
      }
    ]
};