export default function main(inputs) {
  const { CreatedWarehouse } = inputs;
  
  // 解析创建结果
  if (!CreatedWarehouse || CreatedWarehouse.length === 0) {
    throw new Error('创建仓库记录失败');
  }
  
  const warehouse = CreatedWarehouse[0];
  
  return {
    WarehouseData: {
      id: warehouse.id,
      name: warehouse.name,
      code: warehouse.code,
      address: warehouse.address,
      contactPerson: warehouse.contact_person,
      contactPhone: warehouse.contact_phone,
      capacity: warehouse.capacity,
      status: warehouse.status,
      createdAt: warehouse.created_at,
      updatedAt: warehouse.updated_at
    }
  };
}