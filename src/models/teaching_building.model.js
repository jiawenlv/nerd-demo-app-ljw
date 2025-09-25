module.exports = {
  "table": "teaching_building",
  "columns": [
    {
      "name": "id",
      "type": "uuid",
      "primaryKey": true,
      "notNull": true,
      "default": "uuid_generate_v4()"
    },
    {
      "name": "buildingName",
      "type": "varchar(100)",
      "notNull": true,
      "description": "教学楼名称"
    },
    {
      "name": "buildingCode",
      "type": "varchar(20)",
      "notNull": true,
      "description": "教学楼编号"
    },
    {
      "name": "schoolId",
      "type": "uuid",
      "notNull": true,
      "description": "所属学校ID",
      "relation": {
        "table": "school",
        "field": "id"
      }
    },
    {
      "name": "location",
      "type": "varchar(200)",
      "notNull": false,
      "description": "教学楼位置"
    },
    {
      "name": "floors",
      "type": "integer",
      "notNull": false,
      "description": "楼层数"
    },
    {
      "name": "classroomCount",
      "type": "integer",
      "notNull": false,
      "description": "教室数量"
    },
    {
      "name": "builtYear",
      "type": "integer",
      "notNull": false,
      "description": "建造年份"
    },
    {
      "name": "status",
      "type": "varchar(20)",
      "notNull": true,
      "default": "'active'",
      "description": "状态：active/inactive"
    },
    {
      "name": "description",
      "type": "text",
      "notNull": false,
      "description": "描述信息"
    },
    {
      "name": "createdAt",
      "type": "timestamp",
      "notNull": true,
      "default": "CURRENT_TIMESTAMP"
    },
    {
      "name": "updatedAt",
      "type": "timestamp",
      "notNull": true,
      "default": "CURRENT_TIMESTAMP"
    }
  ]
};
