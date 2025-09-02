import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// 生成随机数据的工具函数
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomNumber = (min, max) => Math.random() * (max - min) + min;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

// 基础数据
const supplierNames = ['华润供应商', '阿里巴巴供应商', '京东供应商', '顺丰供应商', '中通供应商', '韵达供应商'];
const customerNames = ['张三公司', '李四商贸', '王五超市', '赵六便利店', '孙七批发部', '周八零售店', '吴九连锁店'];
const categoryData = [
  { code: 'ELEC', name: '电子产品', children: [
    { code: 'PHONE', name: '手机' },
    { code: 'LAPTOP', name: '笔记本电脑' },
    { code: 'TABLET', name: '平板电脑' }
  ]},
  { code: 'CLOTH', name: '服装鞋帽', children: [
    { code: 'SHIRT', name: '衬衫' },
    { code: 'PANTS', name: '裤子' },
    { code: 'SHOES', name: '鞋子' }
  ]},
  { code: 'FOOD', name: '食品饮料', children: [
    { code: 'SNACK', name: '零食' },
    { code: 'DRINK', name: '饮料' },
    { code: 'FRUIT', name: '水果' }
  ]},
  { code: 'HOME', name: '家居用品', children: [
    { code: 'FURNITURE', name: '家具' },
    { code: 'DECOR', name: '装饰品' },
    { code: 'KITCHEN', name: '厨具' }
  ]}
];

const productData = [
  // 电子产品
  { code: 'P001', name: 'iPhone 15 Pro', category: 'PHONE', unit: 'piece', costPrice: 7000, salePrice: 8999 },
  { code: 'P002', name: '华为 Mate 60', category: 'PHONE', unit: 'piece', costPrice: 5500, salePrice: 6999 },
  { code: 'P003', name: 'MacBook Pro 16', category: 'LAPTOP', unit: 'piece', costPrice: 18000, salePrice: 22999 },
  { code: 'P004', name: 'Dell XPS 13', category: 'LAPTOP', unit: 'piece', costPrice: 8000, salePrice: 12999 },
  { code: 'P005', name: 'iPad Pro 12.9', category: 'TABLET', unit: 'piece', costPrice: 7000, salePrice: 9999 },
  
  // 服装鞋帽
  { code: 'P006', name: '男士商务衬衫', category: 'SHIRT', unit: 'piece', costPrice: 80, salePrice: 199 },
  { code: 'P007', name: '女士休闲裤', category: 'PANTS', unit: 'piece', costPrice: 120, salePrice: 299 },
  { code: 'P008', name: '运动鞋', category: 'SHOES', unit: 'pair', costPrice: 200, salePrice: 499 },
  
  // 食品饮料
  { code: 'P009', name: '薯片', category: 'SNACK', unit: 'bag', costPrice: 3, salePrice: 8 },
  { code: 'P010', name: '可口可乐', category: 'DRINK', unit: 'bottle', costPrice: 2, salePrice: 5 },
  { code: 'P011', name: '苹果', category: 'FRUIT', unit: 'kg', costPrice: 8, salePrice: 15 },
  
  // 家居用品
  { code: 'P012', name: '办公椅', category: 'FURNITURE', unit: 'piece', costPrice: 300, salePrice: 699 },
  { code: 'P013', name: '装饰画', category: 'DECOR', unit: 'piece', costPrice: 50, salePrice: 199 },
  { code: 'P014', name: '不锈钢锅具套装', category: 'KITCHEN', unit: 'set', costPrice: 200, salePrice: 599 }
];

async function main() {
  console.log('开始初始化进销存系统测试数据...');

  // 清空现有数据（按依赖关系顺序）
  console.log('清空现有数据...');
  await prisma.stockMovement.deleteMany();
  await prisma.salesOrderItem.deleteMany();
  await prisma.salesOrder.deleteMany();
  await prisma.purchaseOrderItem.deleteMany();
  await prisma.purchaseOrder.deleteMany();
  await prisma.stock.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.warehouse.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.supplier.deleteMany();

  // 1. 创建供应商
  console.log('创建供应商数据...');
  const suppliers = [];
  for (let i = 0; i < supplierNames.length; i++) {
    const supplier = await prisma.supplier.create({
      data: {
        code: `SUP${String(i + 1).padStart(3, '0')}`,
        name: supplierNames[i],
        contactName: `联系人${i + 1}`,
        phone: `1380000${String(i + 1).padStart(4, '0')}`,
        email: `supplier${i + 1}@example.com`,
        address: `供应商地址${i + 1}号`,
        status: 'active'
      }
    });
    suppliers.push(supplier);
  }
  console.log(`已创建 ${suppliers.length} 个供应商`);

  // 2. 创建客户
  console.log('创建客户数据...');
  const customers = [];
  for (let i = 0; i < customerNames.length; i++) {
    const customer = await prisma.customer.create({
      data: {
        code: `CUS${String(i + 1).padStart(3, '0')}`,
        name: customerNames[i],
        phone: `1390000${String(i + 1).padStart(4, '0')}`,
        email: `customer${i + 1}@example.com`,
        address: `客户地址${i + 1}号`,
        type: getRandomItem(['retail', 'wholesale']),
        creditLimit: getRandomNumber(10000, 100000),
        status: 'active'
      }
    });
    customers.push(customer);
  }
  console.log(`已创建 ${customers.length} 个客户`);

  // 3. 创建商品分类
  console.log('创建商品分类数据...');
  const categories = [];
  for (const parentCat of categoryData) {
    // 创建父分类
    const parent = await prisma.category.create({
      data: {
        code: parentCat.code,
        name: parentCat.name,
        level: 1,
        status: 'active'
      }
    });
    categories.push(parent);

    // 创建子分类
    for (const childCat of parentCat.children) {
      const child = await prisma.category.create({
        data: {
          code: childCat.code,
          name: childCat.name,
          parentId: parent.id,
          level: 2,
          status: 'active'
        }
      });
      categories.push(child);
    }
  }
  console.log(`已创建 ${categories.length} 个商品分类`);

  // 4. 创建仓库
  console.log('创建仓库数据...');
  const warehouses = [];
  const warehouseNames = ['总仓库', '北京仓库', '上海仓库', '广州仓库', '深圳仓库'];
  for (let i = 0; i < warehouseNames.length; i++) {
    const warehouse = await prisma.warehouse.create({
      data: {
        code: `WH${String(i + 1).padStart(3, '0')}`,
        name: warehouseNames[i],
        address: `${warehouseNames[i]}地址`,
        status: 'active'
      }
    });
    warehouses.push(warehouse);
  }
  console.log(`已创建 ${warehouses.length} 个仓库`);

  // 5. 创建商品
  console.log('创建商品数据...');
  const products = [];
  for (const productInfo of productData) {
    // 查找对应的分类
    const category = categories.find(cat => cat.code === productInfo.category);
    if (!category) continue;

    const product = await prisma.product.create({
      data: {
        code: productInfo.code,
        name: productInfo.name,
        description: `${productInfo.name}的详细描述`,
        categoryId: category.id,
        supplierId: getRandomItem(suppliers).id,
        unit: productInfo.unit,
        costPrice: productInfo.costPrice,
        salePrice: productInfo.salePrice,
        minStock: 10,
        maxStock: 1000,
        status: 'active'
      }
    });
    products.push(product);
  }
  console.log(`已创建 ${products.length} 个商品`);

  // 6. 创建初始库存
  console.log('创建初始库存数据...');
  let stockCount = 0;
  for (const product of products) {
    for (const warehouse of warehouses) {
      const initialQty = getRandomInt(50, 500);
      await prisma.stock.create({
        data: {
          productId: product.id,
          warehouseId: warehouse.id,
          quantity: initialQty,
          lockedQty: 0
        }
      });

      // 创建初始入库记录
      await prisma.stockMovement.create({
        data: {
          productId: product.id,
          warehouseId: warehouse.id,
          type: 'in',
          quantity: initialQty,
          beforeQty: 0,
          afterQty: initialQty,
          unitPrice: product.costPrice,
          totalAmount: product.costPrice * initialQty,
          reason: '期初建账',
          refType: 'adjust',
          operatorId: null
        }
      });
      stockCount++;
    }
  }
  console.log(`已创建 ${stockCount} 条库存记录`);

  // 7. 创建采购订单
  console.log('创建采购订单数据...');
  const purchaseOrders = [];
  for (let i = 0; i < 10; i++) {
    const supplier = getRandomItem(suppliers);
    const warehouse = getRandomItem(warehouses);
    const orderDate = getRandomDate(new Date(2024, 0, 1), new Date());
    
    // 创建采购订单
    const purchaseOrder = await prisma.purchaseOrder.create({
      data: {
        orderNo: `PO${new Date().getFullYear()}${String(i + 1).padStart(4, '0')}`,
        supplierId: supplier.id,
        warehouseId: warehouse.id,
        orderDate: orderDate,
        expectedDate: new Date(orderDate.getTime() + 7 * 24 * 60 * 60 * 1000),
        status: getRandomItem(['pending', 'confirmed', 'received']),
        totalAmount: 0,
        paidAmount: 0,
        remarks: `采购订单${i + 1}备注`
      }
    });

    // 创建采购订单明细
    let totalAmount = 0;
    const itemCount = getRandomInt(2, 5);
    for (let j = 0; j < itemCount; j++) {
      const product = getRandomItem(products.filter(p => p.supplierId === supplier.id));
      if (!product) continue;

      const quantity = getRandomInt(10, 100);
      const unitPrice = product.costPrice;
      const totalPrice = quantity * unitPrice;

      await prisma.purchaseOrderItem.create({
        data: {
          purchaseOrderId: purchaseOrder.id,
          productId: product.id,
          quantity: quantity,
          unitPrice: unitPrice,
          totalPrice: totalPrice,
          receivedQty: purchaseOrder.status === 'received' ? quantity : 0
        }
      });

      totalAmount += totalPrice;

      // 如果订单已收货，更新库存
      if (purchaseOrder.status === 'received') {
        await prisma.stock.updateMany({
          where: {
            productId: product.id,
            warehouseId: warehouse.id
          },
          data: {
            quantity: {
              increment: quantity
            }
          }
        });

        // 添加库存变动记录
        const stock = await prisma.stock.findFirst({
          where: {
            productId: product.id,
            warehouseId: warehouse.id
          }
        });

        await prisma.stockMovement.create({
          data: {
            productId: product.id,
            warehouseId: warehouse.id,
            type: 'in',
            quantity: quantity,
            beforeQty: stock.quantity - quantity,
            afterQty: stock.quantity,
            unitPrice: unitPrice,
            totalAmount: totalPrice,
            reason: '采购入库',
            refType: 'purchase_order',
            refId: purchaseOrder.id
          }
        });
      }
    }

    // 更新采购订单总金额
    await prisma.purchaseOrder.update({
      where: { id: purchaseOrder.id },
      data: { totalAmount: totalAmount }
    });

    purchaseOrders.push(purchaseOrder);
  }
  console.log(`已创建 ${purchaseOrders.length} 个采购订单`);

  // 8. 创建销售订单
  console.log('创建销售订单数据...');
  const salesOrders = [];
  for (let i = 0; i < 15; i++) {
    const customer = getRandomItem(customers);
    const warehouse = getRandomItem(warehouses);
    const orderDate = getRandomDate(new Date(2024, 0, 1), new Date());
    
    const salesOrder = await prisma.salesOrder.create({
      data: {
        orderNo: `SO${new Date().getFullYear()}${String(i + 1).padStart(4, '0')}`,
        customerId: customer.id,
        warehouseId: warehouse.id,
        orderDate: orderDate,
        deliveryDate: new Date(orderDate.getTime() + 3 * 24 * 60 * 60 * 1000),
        status: getRandomItem(['pending', 'confirmed', 'shipped', 'delivered']),
        totalAmount: 0,
        paidAmount: 0,
        discount: getRandomNumber(0, 500),
        remarks: `销售订单${i + 1}备注`
      }
    });

    // 创建销售订单明细
    let totalAmount = 0;
    const itemCount = getRandomInt(1, 4);
    for (let j = 0; j < itemCount; j++) {
      const product = getRandomItem(products);
      const quantity = getRandomInt(1, 20);
      const unitPrice = product.salePrice;
      const totalPrice = quantity * unitPrice;

      await prisma.salesOrderItem.create({
        data: {
          salesOrderId: salesOrder.id,
          productId: product.id,
          quantity: quantity,
          unitPrice: unitPrice,
          totalPrice: totalPrice,
          shippedQty: ['shipped', 'delivered'].includes(salesOrder.status) ? quantity : 0
        }
      });

      totalAmount += totalPrice;

      // 如果订单已发货，更新库存
      if (['shipped', 'delivered'].includes(salesOrder.status)) {
        const currentStock = await prisma.stock.findFirst({
          where: {
            productId: product.id,
            warehouseId: warehouse.id
          }
        });

        if (currentStock && currentStock.quantity >= quantity) {
          await prisma.stock.update({
            where: { id: currentStock.id },
            data: {
              quantity: {
                decrement: quantity
              }
            }
          });

          // 添加库存变动记录
          await prisma.stockMovement.create({
            data: {
              productId: product.id,
              warehouseId: warehouse.id,
              type: 'out',
              quantity: -quantity,
              beforeQty: currentStock.quantity,
              afterQty: currentStock.quantity - quantity,
              unitPrice: unitPrice,
              totalAmount: totalPrice,
              reason: '销售出库',
              refType: 'sales_order',
              refId: salesOrder.id
            }
          });
        }
      }
    }

    // 更新销售订单总金额
    const finalAmount = totalAmount - salesOrder.discount;
    await prisma.salesOrder.update({
      where: { id: salesOrder.id },
      data: { 
        totalAmount: finalAmount,
        paidAmount: salesOrder.status === 'delivered' ? finalAmount : getRandomNumber(0, finalAmount)
      }
    });

    salesOrders.push(salesOrder);
  }
  console.log(`已创建 ${salesOrders.length} 个销售订单`);

  console.log('测试数据初始化完成！');
  console.log('\n数据统计：');
  console.log(`- 供应商：${suppliers.length} 个`);
  console.log(`- 客户：${customers.length} 个`);
  console.log(`- 商品分类：${categories.length} 个`);
  console.log(`- 仓库：${warehouses.length} 个`);
  console.log(`- 商品：${products.length} 个`);
  console.log(`- 库存记录：${stockCount} 条`);
  console.log(`- 采购订单：${purchaseOrders.length} 个`);
  console.log(`- 销售订单：${salesOrders.length} 个`);
}

main()
  .catch((e) => {
    console.error('初始化数据时出错：', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });