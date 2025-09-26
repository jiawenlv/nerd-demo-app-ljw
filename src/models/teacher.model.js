module.exports = {
    "table": "teacher",
    "columns": [
      {
        "name": "id",
        "type": "integer",
        "primaryKey": true,
        "notNull": true,
        "default": "autoincrement()",
        "description": "教师唯一标识"
      },
      {
        "name": "name",
        "type": "varchar(100)",
        "notNull": true,
        "description": "教师姓名"
      },
      {
        "name": "employeeid",
        "type": "integer",
        "notNull": false,
        "description": "员工ID"
      },
      {
        "name": "title",
        "type": "varchar(50)",
        "notNull": false,
        "description": "职称"
      },
      {
        "name": "subject",
        "type": "varchar(100)",
        "notNull": false,
        "description": "任教科目"
      },
      {
        "name": "status",
        "type": "varchar(20)",
        "notNull": true,
        "default": "'ACTIVE'",
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