module.exports = {
    "table": "grade",
    "columns": [
      {
        "name": "id",
        "type": "integer",
        "primaryKey": true,
        "notNull": true,
        "default": "autoincrement()",
        "description": "成绩记录唯一标识"
      },
      {
        "name": "studentid",
        "type": "integer",
        "notNull": true,
        "description": "学生ID"
      },
      {
        "name": "courseid",
        "type": "integer",
        "notNull": true,
        "description": "课程ID"
      },
      {
        "name": "score",
        "type": "decimal(5,2)",
        "notNull": false,
        "description": "分数"
      },
      {
        "name": "semester",
        "type": "varchar(20)",
        "notNull": true,
        "description": "学期"
      },
      {
        "name": "academicyear",
        "type": "varchar(10)",
        "notNull": true,
        "description": "学年"
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
      },
      {
        "name": "updatedby",
        "type": "integer",
        "notNull": false,
        "description": "更新人ID"
      }
    ]
};