export default function main(inputs) {
  // 验证必填字段
  if (!inputs.WarehouseName || inputs.WarehouseName.trim() === '') {
    throw new Error('仓库名称不能为空');
  }
  if (!inputs.WarehouseCode || inputs.WarehouseCode.trim() === '') {
    throw new Error('仓库编码不能为空');
  }
  if (!inputs.WarehouseAddress || inputs.WarehouseAddress.trim() === '') {
    throw new Error('仓库地址不能为空');
  }
  
  // 验证编码格式（示例：至少3位字母数字）
  const codeRegex = /^[A-Za-z0-9]{3,}$/;
  if (!codeRegex.test(inputs.WarehouseCode)) {
    throw new Error('仓库编码格式不正确，必须至少3位字母数字');
  }
  
  // 验证容量为正数
  if (inputs.Capacity <= 0) {
    throw new Error('仓库容量必须大于0');
  }
  
  // 返回验证后的数据
  return {
    ValidatedWarehouseName: inputs.WarehouseName.trim(),
    ValidatedWarehouseCode: inputs.WarehouseCode.trim(),
    ValidatedWarehouseAddress: inputs.WarehouseAddress.trim(),
    ValidatedContactPerson: inputs.ContactPerson ? inputs.ContactPerson.trim() : '',
    ValidatedContactPhone: inputs.ContactPhone ? inputs.ContactPhone.trim() : '',
    ValidatedCapacity: inputs.Capacity,
    ValidatedStatus: inputs.Status || 'ACTIVE'
  };
}