module.exports = {
    "table": "Order",
    "columns": [
      {
        "name": "id",
        "type": "uuid",
        "primaryKey": true,
        "notNull": true,
        "default": "uuid_generate_v4()",
        "description": "订单唯一标识"
      },
      {
        "name": "userId",
        "type": "uuid",
        "notNull": true,
        "description": "用户ID",
        "relation": {
          "table": "User",
          "field": "id"
        }
      },
      {
        "name": "userName",
        "type": "varchar(255)",
        "notNull": true,
        "description": "用户姓名"
      },
      {
        "name": "total",
        "type": "decimal(10,2)",
        "notNull": true,
        "description": "订单总金额"
      },
      {
        "name": "createdAt",
        "type": "timestamp",
        "notNull": true,
        "default": "CURRENT_TIMESTAMP",
        "description": "创建时间"
      },
      {
        "name": "couponCode",
        "type": "varchar(100)",
        "notNull": false,
        "description": "优惠券代码"
      }
    ]
};