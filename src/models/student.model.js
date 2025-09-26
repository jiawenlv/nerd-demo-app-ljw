module.exports = {
    "table": "student",
    "columns": [
      {
        "name": "id",
        "type": "integer",
        "primaryKey": true,
        "notNull": true,
        "default": "autoincrement()",
        "description": "学生唯一标识"
      },
      {
        "name": "name",
        "type": "varchar(100)",
        "notNull": true,
        "description": "学生姓名"
      },
      {
        "name": "studentnumber",
        "type": "varchar(50)",
        "notNull": true,
        "unique": true,
        "description": "学号"
      },
      {
        "name": "classid",
        "type": "integer",
        "notNull": false,
        "description": "班级ID"
      },
      {
        "name": "createdat",
        "type": "timestamp",
        "notNull": false,
        "default": "now()",
        "description": "创建时间"
      },
      {
        "name": "updatedat",
        "type": "timestamp",
        "notNull": false,
        "default": "now()",
        "description": "更新时间"
      }
    ]
};