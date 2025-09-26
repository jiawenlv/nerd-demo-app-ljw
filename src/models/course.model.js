module.exports = {
    "table": "course",
    "columns": [
      {
        "name": "id",
        "type": "integer",
        "primaryKey": true,
        "notNull": true,
        "default": "autoincrement()",
        "description": "课程唯一标识"
      },
      {
        "name": "coursename",
        "type": "varchar(100)",
        "notNull": true,
        "description": "课程名称"
      },
      {
        "name": "coursecode",
        "type": "varchar(50)",
        "notNull": true,
        "unique": true,
        "description": "课程代码"
      },
      {
        "name": "teacherid",
        "type": "integer",
        "notNull": false,
        "description": "教师ID"
      },
      {
        "name": "createdat",
        "type": "timestamp",
        "notNull": false,
        "default": "now()",
        "description": "创建时间"
      }
    ]
};