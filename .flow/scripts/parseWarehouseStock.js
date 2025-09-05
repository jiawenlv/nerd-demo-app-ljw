function main(inputs) {
  const warehouseData = inputs.WarehouseStockData;
  const quantity = inputs.Quantity;
  
  if (!warehouseData || warehouseData.length === 0) {
    throw new Error('没有找到可用的仓库库存');
  }
  
  // 选择库存充足的仓库，优先选择库存最多的仓库
  const suitableWarehouses = warehouseData.filter(warehouse => 
    warehouse.stock_quantity >= quantity
  );
  
  let selectedWarehouse;
  
  if (suitableWarehouses.length > 0) {
    // 选择库存最多的仓库
    selectedWarehouse = suitableWarehouses.reduce((max, warehouse) => 
      warehouse.stock_quantity > max.stock_quantity ? warehouse : max
    );
  } else {
    // 如果没有库存充足的仓库，选择库存最多的仓库
    selectedWarehouse = warehouseData.reduce((max, warehouse) => 
      warehouse.stock_quantity > max.stock_quantity ? warehouse : max
    );
  }
  
  return {
    SelectedWarehouseId: selectedWarehouse.id,
    SelectedWarehouseName: selectedWarehouse.warehouse_name
  };
}