import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function checkData() {
  console.log('📊 检查进销存系统数据...\n');

  try {
    // 统计各表数据量
    const stats = {
      suppliers: await prisma.supplier.count(),
      customers: await prisma.customer.count(),
      categories: await prisma.category.count(),
      warehouses: await prisma.warehouse.count(),
      products: await prisma.product.count(),
      stocks: await prisma.stock.count(),
      purchaseOrders: await prisma.purchaseOrder.count(),
      salesOrders: await prisma.salesOrder.count(),
      stockMovements: await prisma.stockMovement.count()
    };

    console.log('数据统计：');
    console.log(`✓ 供应商：${stats.suppliers} 个`);
    console.log(`✓ 客户：${stats.customers} 个`);
    console.log(`✓ 商品分类：${stats.categories} 个`);
    console.log(`✓ 仓库：${stats.warehouses} 个`);
    console.log(`✓ 商品：${stats.products} 个`);
    console.log(`✓ 库存记录：${stats.stocks} 条`);
    console.log(`✓ 采购订单：${stats.purchaseOrders} 个`);
    console.log(`✓ 销售订单：${stats.salesOrders} 个`);
    console.log(`✓ 库存变动记录：${stats.stockMovements} 条`);

    // 显示一些示例数据
    console.log('\n📋 示例数据：');
    
    // 显示前3个供应商
    const suppliers = await prisma.supplier.findMany({ take: 3 });
    console.log('\n供应商示例：');
    suppliers.forEach(s => console.log(`  ${s.code} - ${s.name} (${s.phone})`));

    // 显示前3个客户
    const customers = await prisma.customer.findMany({ take: 3 });
    console.log('\n客户示例：');
    customers.forEach(c => console.log(`  ${c.code} - ${c.name} (${c.type})`));

    // 显示商品及其库存
    const productsWithStock = await prisma.product.findMany({
      take: 5,
      include: {
        category: true,
        supplier: true,
        stocks: {
          include: {
            warehouse: true
          }
        }
      }
    });

    console.log('\n商品库存示例：');
    productsWithStock.forEach(p => {
      console.log(`  ${p.code} - ${p.name} (分类: ${p.category.name}, 供应商: ${p.supplier.name})`);
      p.stocks.forEach(s => {
        console.log(`    ${s.warehouse.name}: ${s.quantity} ${p.unit}`);
      });
    });

    // 显示最近的订单
    const recentPurchaseOrders = await prisma.purchaseOrder.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
      include: {
        supplier: true,
        warehouse: true,
        items: {
          include: {
            product: true
          }
        }
      }
    });

    console.log('\n最近采购订单示例：');
    recentPurchaseOrders.forEach(po => {
      console.log(`  ${po.orderNo} - ${po.supplier.name} → ${po.warehouse.name} (${po.status}) ￥${po.totalAmount}`);
      po.items.forEach(item => {
        console.log(`    ${item.product.name}: ${item.quantity} ${item.product.unit} @ ￥${item.unitPrice}`);
      });
    });

    const recentSalesOrders = await prisma.salesOrder.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
      include: {
        customer: true,
        warehouse: true,
        items: {
          include: {
            product: true
          }
        }
      }
    });

    console.log('\n最近销售订单示例：');
    recentSalesOrders.forEach(so => {
      console.log(`  ${so.orderNo} - ${so.customer.name} ← ${so.warehouse.name} (${so.status}) ￥${so.totalAmount}`);
      so.items.forEach(item => {
        console.log(`    ${item.product.name}: ${item.quantity} ${item.product.unit} @ ￥${item.unitPrice}`);
      });
    });

    console.log('\n✅ 数据检查完成！');

  } catch (error) {
    console.error('❌ 检查数据时出错：', error);
  }
}

checkData()
  .finally(async () => {
    await prisma.$disconnect();
  });