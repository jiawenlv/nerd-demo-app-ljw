import returnErrorCodeExists from './return-error-code-exists.js';
import createWarehouseRecord from './create-warehouse-record.js';
import returnWarehouseId from './return-warehouse-id.js';

export default async function checkCodeCondition(CodeCount) {
  // 条件判断逻辑
  if (CodeCount > "\"\"") {
    const { code, data, message } = await returnErrorCodeExists(WarehouseIdData);
    return { code, data, message };
  } else if (CodeCount === "\"\"") {
    const { WarehouseIdData } = await createWarehouseRecord(WarehouseName, WarehouseCode, WarehouseAddress, ContactPerson, ContactPhone, Capacity, Status);
    const { code, data, message } = await returnWarehouseId(WarehouseId);
    return { code, data, message };
  }
  // 没有匹配的条件，返回空结果
  return {};

}
