export default function main(inputs) {
  const { WarehouseName, WarehouseCode, WarehouseAddress, ContactPerson, ContactPhone, Capacity, Status } = inputs;
  
  // 基本验证逻辑
  if (!WarehouseName || WarehouseName.trim().length === 0) {
    throw new Error('仓库名称不能为空');
  }
  
  if (!WarehouseCode || WarehouseCode.trim().length === 0) {
    throw new Error('仓库编码不能为空');
  }
  
  if (Capacity < 0) {
    throw new Error('仓库容量不能为负数');
  }
  
  // 返回验证后的数据
  return {
    ValidatedWarehouseName: WarehouseName.trim(),
    ValidatedWarehouseCode: WarehouseCode.trim(),
    ValidatedWarehouseAddress: WarehouseAddress ? WarehouseAddress.trim() : '',
    ValidatedContactPerson: ContactPerson ? ContactPerson.trim() : '',
    ValidatedContactPhone: ContactPhone ? ContactPhone.trim() : '',
    ValidatedCapacity: Capacity,
    ValidatedStatus: Status ? Status.trim() : 'active'
  };
}