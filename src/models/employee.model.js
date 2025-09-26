module.exports = {
    "table": "employee",
    "columns": [
      {
        "name": "id",
        "type": "integer",
        "primaryKey": true,
        "notNull": true,
        "default": "autoincrement()",
        "description": "员工唯一标识"
      },
      {
        "name": "name",
        "type": "varchar(100)",
        "notNull": true,
        "description": "员工姓名"
      },
      {
        "name": "employee_number",
        "type": "varchar(50)",
        "notNull": true,
        "unique": true,
        "description": "员工号"
      },
      {
        "name": "department",
        "type": "varchar(100)",
        "notNull": false,
        "description": "部门"
      },
      {
        "name": "position",
        "type": "varchar(100)",
        "notNull": false,
        "description": "职位"
      },
      {
        "name": "hire_date",
        "type": "date",
        "notNull": false,
        "description": "入职日期"
      },
      {
        "name": "status",
        "type": "varchar(20)",
        "notNull": false,
        "default": "'active'",
        "description": "状态"
      },
      {
        "name": "created_at",
        "type": "timestamp",
        "notNull": false,
        "default": "now()",
        "description": "创建时间"
      },
      {
        "name": "updated_at",
        "type": "timestamp",
        "notNull": false,
        "default": "now()",
        "description": "更新时间"
      }
    ]
};