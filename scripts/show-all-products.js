import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function showAllProducts() {
  console.log('📦 显示所有商品信息...\n');

  try {
    // 按分类分组查询所有商品
    const categories = await prisma.category.findMany({
      where: {
        level: 2 // 只显示子分类
      },
      include: {
        products: {
          include: {
            supplier: true,
            stocks: {
              include: {
                warehouse: true
              }
            }
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    });

    let totalProducts = 0;
    let totalStockValue = 0;

    console.log('🏷️  按分类查看所有商品：\n');

    for (const category of categories) {
      if (category.products.length > 0) {
        console.log(`📂 ${category.name} (${category.code}) - ${category.products.length}个商品`);
        console.log('─'.repeat(60));

        for (const product of category.products) {
          const totalStock = product.stocks.reduce((sum, s) => sum + s.quantity, 0);
          const stockValue = totalStock * product.costPrice;
          totalStockValue += stockValue;

          console.log(`  📦 ${product.code} - ${product.name}`);
          console.log(`      供应商: ${product.supplier.name}`);
          console.log(`      成本价: ￥${product.costPrice} | 售价: ￥${product.salePrice} | 单位: ${product.unit}`);
          console.log(`      总库存: ${totalStock} ${product.unit} (价值: ￥${stockValue.toFixed(2)})`);
          
          // 显示各仓库库存分布
          console.log('      仓库分布: ', product.stocks.map(s => 
            `${s.warehouse.name}:${s.quantity}`
          ).join(' | '));
          console.log('');

          totalProducts++;
        }
        console.log('');
      }
    }

    // 统计信息
    console.log('📊 商品统计总览：');
    console.log('═'.repeat(50));
    console.log(`总商品数量: ${totalProducts} 个`);
    console.log(`库存总价值: ￥${totalStockValue.toFixed(2)}`);
    console.log(`平均库存价值: ￥${(totalStockValue / totalProducts).toFixed(2)}/商品`);

    // 按分类统计
    console.log('\n📈 分类统计：');
    console.log('─'.repeat(30));
    for (const category of categories.filter(c => c.products.length > 0)) {
      const categoryValue = category.products.reduce((sum, p) => {
        const stock = p.stocks.reduce((s, st) => s + st.quantity, 0);
        return sum + (stock * p.costPrice);
      }, 0);
      
      console.log(`${category.name}: ${category.products.length}个商品, 价值￥${categoryValue.toFixed(2)}`);
    }

    // 价值最高的前10个商品
    const allProducts = await prisma.product.findMany({
      include: {
        stocks: true,
        category: true,
        supplier: true
      }
    });

    const productValues = allProducts.map(p => {
      const totalStock = p.stocks.reduce((sum, s) => sum + s.quantity, 0);
      return {
        ...p,
        totalStock,
        totalValue: totalStock * p.costPrice
      };
    }).sort((a, b) => b.totalValue - a.totalValue);

    console.log('\n💰 库存价值TOP10商品：');
    console.log('─'.repeat(60));
    productValues.slice(0, 10).forEach((p, index) => {
      console.log(`${index + 1}. ${p.name} - 库存:${p.totalStock}${p.unit}, 价值:￥${p.totalValue.toFixed(2)}`);
    });

  } catch (error) {
    console.error('❌ 查询商品信息时出错：', error);
  }
}

showAllProducts()
  .finally(async () => {
    await prisma.$disconnect();
  });