import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// 生成随机数据的工具函数
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 新增商品数据
const newProductsData = [
  // 电子产品扩展
  { code: 'P015', name: '小米13 Pro', category: 'PHONE', unit: 'piece', costPrice: 4000, salePrice: 5499 },
  { code: 'P016', name: 'OPPO Find X6', category: 'PHONE', unit: 'piece', costPrice: 4500, salePrice: 5999 },
  { code: 'P017', name: 'vivo X90 Pro', category: 'PHONE', unit: 'piece', costPrice: 4200, salePrice: 5699 },
  { code: 'P018', name: 'ThinkPad X1 Carbon', category: 'LAPTOP', unit: 'piece', costPrice: 12000, salePrice: 15999 },
  { code: 'P019', name: 'HP EliteBook', category: 'LAPTOP', unit: 'piece', costPrice: 9000, salePrice: 12999 },
  { code: 'P020', name: 'Surface Pro 9', category: 'TABLET', unit: 'piece', costPrice: 6500, salePrice: 8999 },
  { code: 'P021', name: '华为MatePad Pro', category: 'TABLET', unit: 'piece', costPrice: 3500, salePrice: 4999 },

  // 服装鞋帽扩展
  { code: 'P022', name: '女士职业西装', category: 'SHIRT', unit: 'piece', costPrice: 150, salePrice: 399 },
  { code: 'P023', name: '男士T恤', category: 'SHIRT', unit: 'piece', costPrice: 45, salePrice: 99 },
  { code: 'P024', name: '牛仔裤', category: 'PANTS', unit: 'piece', costPrice: 80, salePrice: 199 },
  { code: 'P025', name: '运动裤', category: 'PANTS', unit: 'piece', costPrice: 60, salePrice: 149 },
  { code: 'P026', name: '皮鞋', category: 'SHOES', unit: 'pair', costPrice: 180, salePrice: 399 },
  { code: 'P027', name: '帆布鞋', category: 'SHOES', unit: 'pair', costPrice: 120, salePrice: 259 },
  { code: 'P028', name: '高跟鞋', category: 'SHOES', unit: 'pair', costPrice: 200, salePrice: 459 },

  // 食品饮料扩展
  { code: 'P029', name: '巧克力', category: 'SNACK', unit: 'box', costPrice: 8, salePrice: 18 },
  { code: 'P030', name: '饼干', category: 'SNACK', unit: 'pack', costPrice: 5, salePrice: 12 },
  { code: 'P031', name: '坚果礼盒', category: 'SNACK', unit: 'box', costPrice: 25, salePrice: 59 },
  { code: 'P032', name: '矿泉水', category: 'DRINK', unit: 'bottle', costPrice: 1, salePrice: 3 },
  { code: 'P033', name: '果汁', category: 'DRINK', unit: 'bottle', costPrice: 4, salePrice: 8 },
  { code: 'P034', name: '咖啡', category: 'DRINK', unit: 'cup', costPrice: 8, salePrice: 18 },
  { code: 'P035', name: '香蕉', category: 'FRUIT', unit: 'kg', costPrice: 4, salePrice: 8 },
  { code: 'P036', name: '橙子', category: 'FRUIT', unit: 'kg', costPrice: 6, salePrice: 12 },
  { code: 'P037', name: '草莓', category: 'FRUIT', unit: 'box', costPrice: 15, salePrice: 28 },

  // 家居用品扩展
  { code: 'P038', name: '书桌', category: 'FURNITURE', unit: 'piece', costPrice: 400, salePrice: 899 },
  { code: 'P039', name: '沙发', category: 'FURNITURE', unit: 'piece', costPrice: 1200, salePrice: 2599 },
  { code: 'P040', name: '床垫', category: 'FURNITURE', unit: 'piece', costPrice: 800, salePrice: 1699 },
  { code: 'P041', name: '台灯', category: 'DECOR', unit: 'piece', costPrice: 80, salePrice: 199 },
  { code: 'P042', name: '花瓶', category: 'DECOR', unit: 'piece', costPrice: 30, salePrice: 89 },
  { code: 'P043', name: '地毯', category: 'DECOR', unit: 'piece', costPrice: 120, salePrice: 299 },
  { code: 'P044', name: '电饭煲', category: 'KITCHEN', unit: 'piece', costPrice: 150, salePrice: 399 },
  { code: 'P045', name: '微波炉', category: 'KITCHEN', unit: 'piece', costPrice: 250, salePrice: 599 },
  { code: 'P046', name: '榨汁机', category: 'KITCHEN', unit: 'piece', costPrice: 100, salePrice: 249 },

  // 新增文具办公用品分类的商品 (需要先检查分类是否存在)
  { code: 'P047', name: '笔记本', category: 'OFFICE', unit: 'piece', costPrice: 8, salePrice: 20, needsNewCategory: true },
  { code: 'P048', name: '钢笔', category: 'OFFICE', unit: 'piece', costPrice: 15, salePrice: 35, needsNewCategory: true },
  { code: 'P049', name: '文件夹', category: 'OFFICE', unit: 'piece', costPrice: 5, salePrice: 15, needsNewCategory: true },
  { code: 'P050', name: '计算器', category: 'OFFICE', unit: 'piece', costPrice: 25, salePrice: 59, needsNewCategory: true },
];

async function addMoreProducts() {
  console.log('📦 开始添加更多商品到进销存系统...\n');

  try {
    // 获取所有现有的分类、供应商和仓库
    const categories = await prisma.category.findMany();
    const suppliers = await prisma.supplier.findMany();
    const warehouses = await prisma.warehouse.findMany();

    console.log(`找到 ${categories.length} 个分类，${suppliers.length} 个供应商，${warehouses.length} 个仓库`);

    // 检查是否需要创建新分类
    const officeCategory = categories.find(cat => cat.code === 'OFFICE');
    if (!officeCategory) {
      console.log('创建办公用品分类...');
      const newCategory = await prisma.category.create({
        data: {
          code: 'OFFICE',
          name: '办公用品',
          level: 2,
          status: 'active'
        }
      });
      categories.push(newCategory);
    }

    let addedCount = 0;
    let skippedCount = 0;

    console.log('\n开始添加商品...');
    for (const productInfo of newProductsData) {
      // 检查商品是否已存在
      const existingProduct = await prisma.product.findUnique({
        where: { code: productInfo.code }
      });

      if (existingProduct) {
        console.log(`⏭️  商品 ${productInfo.code} 已存在，跳过`);
        skippedCount++;
        continue;
      }

      // 查找对应的分类
      const category = categories.find(cat => cat.code === productInfo.category);
      if (!category) {
        console.log(`❌ 找不到分类 ${productInfo.category}，跳过商品 ${productInfo.code}`);
        skippedCount++;
        continue;
      }

      // 随机选择供应商
      const supplier = getRandomItem(suppliers);

      // 创建商品
      const product = await prisma.product.create({
        data: {
          code: productInfo.code,
          name: productInfo.name,
          description: `${productInfo.name}的详细描述`,
          categoryId: category.id,
          supplierId: supplier.id,
          unit: productInfo.unit,
          costPrice: productInfo.costPrice,
          salePrice: productInfo.salePrice,
          minStock: 20,
          maxStock: 1000,
          status: 'active'
        }
      });

      console.log(`✅ 添加商品: ${product.code} - ${product.name}`);

      // 为每个仓库创建初始库存
      for (const warehouse of warehouses) {
        const initialQty = getRandomInt(30, 200);
        
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
      }

      addedCount++;
    }

    console.log(`\n📊 商品添加完成！`);
    console.log(`✅ 成功添加: ${addedCount} 个商品`);
    console.log(`⏭️  跳过已存在: ${skippedCount} 个商品`);

    // 显示最新的数据统计
    const stats = {
      products: await prisma.product.count(),
      stocks: await prisma.stock.count(),
      stockMovements: await prisma.stockMovement.count()
    };

    console.log(`\n当前系统数据：`);
    console.log(`📦 商品总数: ${stats.products} 个`);
    console.log(`📋 库存记录: ${stats.stocks} 条`);
    console.log(`📝 库存变动记录: ${stats.stockMovements} 条`);

    // 显示一些新添加的商品示例
    console.log('\n🆕 新添加的商品示例：');
    const newProducts = await prisma.product.findMany({
      where: {
        code: {
          in: newProductsData.slice(0, 5).map(p => p.code)
        }
      },
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

    newProducts.forEach(p => {
      console.log(`  ${p.code} - ${p.name} (分类: ${p.category.name}, 供应商: ${p.supplier.name})`);
      const totalStock = p.stocks.reduce((sum, s) => sum + s.quantity, 0);
      console.log(`    总库存: ${totalStock} ${p.unit}`);
    });

  } catch (error) {
    console.error('❌ 添加商品时出错：', error);
    throw error;
  }
}

addMoreProducts()
  .then(() => {
    console.log('\n🎉 商品添加任务完成！');
  })
  .catch((e) => {
    console.error('❌ 添加商品失败：', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });