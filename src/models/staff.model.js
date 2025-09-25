module.exports = {
    "table": "Staff",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "primaryKey": true,
        "notNull": true,
        "default": "uuid_generate_v4()",
        "description": "员工唯一标识"
      },
      {
        "name": "name",
        "type": "varchar(255)",
        "notNull": true,
        "description": "员工姓名"
      },
      {
        "name": "email",
        "type": "varchar(255)",
        "notNull": true,
        "unique": true,
        "description": "员工邮箱"
      },
      {
        "name": "position",
        "type": "varchar(255)",
        "notNull": true,
        "description": "职位"
      },
      {
        "name": "salary",
        "type": "decimal(10,2)",
        "notNull": false,
        "description": "薪资"
      },
      {
        "name": "joinDate",
        "type": "timestamp",
        "notNull": true,
        "default": "CURRENT_TIMESTAMP",
        "description": "入职日期"
      }
    ]
};