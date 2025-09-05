import validateInput from './validateInput.js';
import checkWarehouseCodeExists from './check-warehouse-code-exists.js';
import checkCodeCondition from './check-code-condition.js';

export default async function testCreateWarehouseHandler(WarehouseName, WarehouseCode, WarehouseAddress, ContactPerson, ContactPhone, Capacity, Status) {
  // 执行前置节点链
  const { ValidatedWarehouseName, ValidatedWarehouseCode, ValidatedWarehouseAddress, ValidatedContactPerson, ValidatedContactPhone, ValidatedCapacity, ValidatedStatus } = await validateInput(WarehouseName, WarehouseCode, WarehouseAddress, ContactPerson, ContactPhone, Capacity, Status);
  const { CodeExistsData } = await checkWarehouseCodeExists(ValidatedWarehouseCode);

  // 执行条件节点
  return await checkCodeCondition($.CheckWarehouseCodeExists.outputs.CodeExistsData[0].count);

}
