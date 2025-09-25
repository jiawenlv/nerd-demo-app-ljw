module.exports = {
    "table": "Supplier",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "primaryKey": true,
        "notNull": true,
        "default": "uuid_generate_v4()",
        "description": "供应商唯一标识"
      },
      {
        "name": "code",
        "type": "varchar(100)",
        "notNull": true,
        "unique": true,
        "description": "供应商编号"
      },
      {
        "name": "name",
        "type": "varchar(255)",
        "notNull": true,
        "description": "供应商名称"
      },
      {
        "name": "contactName",
        "type": "varchar(255)",
        "notNull": false,
        "description": "联系人姓名"
      },
      {
        "name": "phone",
        "type": "varchar(50)",
        "notNull": false,
        "description": "联系电话"
      },
      {
        "name": "email",
        "type": "varchar(255)",
        "notNull": false,
        "description": "联系邮箱"
      },
      {
        "name": "address",
        "type": "text",
        "notNull": false,
        "description": "地址"
      },
      {
        "name": "status",
        "type": "varchar(20)",
        "notNull": true,
        "default": "'active'",
        "description": "状态：active, inactive"
      },
      {
        "name": "createdAt",
        "type": "timestamp",
        "notNull": true,
        "default": "CURRENT_TIMESTAMP",
        "description": "创建时间"
      },
      {
        "name": "updatedAt",
        "type": "timestamp",
        "notNull": true,
        "default": "CURRENT_TIMESTAMP",
        "description": "更新时间"
      }
    ]
};