module.exports = {
    "table": "evaporation",
    "columns": [
      {
        "name": "id",
        "type": "integer",
        "primaryKey": true,
        "notNull": true,
        "default": "autoincrement()",
        "description": "蒸发量记录唯一标识"
      },
      {
        "name": "reservoirid",
        "type": "integer",
        "notNull": true,
        "description": "水库ID"
      },
      {
        "name": "evaporation_value",
        "type": "decimal(10,2)",
        "notNull": true,
        "description": "蒸发量值"
      },
      {
        "name": "measure_date",
        "type": "date",
        "notNull": true,
        "description": "测量日期"
      },
      {
        "name": "measure_time",
        "type": "time",
        "notNull": false,
        "description": "测量时间"
      },
      {
        "name": "temperature",
        "type": "decimal(5,2)",
        "notNull": false,
        "description": "温度"
      },
      {
        "name": "humidity",
        "type": "decimal(5,2)",
        "notNull": false,
        "description": "湿度"
      },
      {
        "name": "wind_speed",
        "type": "decimal(5,2)",
        "notNull": false,
        "description": "风速"
      },
      {
        "name": "recorder_id",
        "type": "integer",
        "notNull": false,
        "description": "记录员ID"
      },
      {
        "name": "remark",
        "type": "text",
        "notNull": false,
        "description": "备注"
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