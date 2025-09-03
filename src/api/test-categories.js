import Router from 'koa-router'
import { db } from '../db/client.js'

const router = new Router()

// GET /api/categories - 查询所有商品分类
router.get('/api/categories', async (ctx) => {
    try {
        console.log('开始查询商品分类...')
        
        // 测试连接
        const result = await db.query(`
            SELECT 
                table_name,
                table_schema
            FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_type = 'BASE TABLE'
            ORDER BY table_name
        `)
        
        console.log('数据库连接成功，找到以下表:', result.rows)
        
        // 查询 Category 表（Prisma 风格的表名，首字母大写）
        let categoriesData = []
        let foundTable = null
        
        try {
            // 检查 Category 表结构
            const checkResult = await db.query(`
                SELECT column_name, data_type 
                FROM information_schema.columns 
                WHERE table_name = 'Category' AND table_schema = 'public'
                ORDER BY ordinal_position
            `)
            
            if (checkResult.rows.length > 0) {
                foundTable = 'Category'
                console.log(`找到分类表: Category，字段信息:`, checkResult.rows)
                
                // 查询分类数据
                const dataResult = await db.query('SELECT * FROM "Category" ORDER BY id LIMIT 20')
                categoriesData = dataResult.rows
            } else {
                console.log('Category 表不存在')
            }
        } catch (error) {
            console.log(`查询 Category 表失败:`, error.message)
        }
        
        if (!foundTable) {
            // 如果没有找到分类表，创建一个测试表
            console.log('没有找到分类表，创建测试表...')
            
            await db.query(`
                CREATE TABLE IF NOT EXISTS categories (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(100) NOT NULL,
                    description TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `)
            
            // 插入测试数据
            await db.query(`
                INSERT INTO categories (name, description) VALUES
                ('电子产品', '各类电子设备和配件'),
                ('服装', '男女服装和配饰'),
                ('图书', '各类书籍和电子书'),
                ('家居用品', '家庭日用品和装饰品')
                ON CONFLICT DO NOTHING
            `)
            
            const testResult = await db.query('SELECT * FROM categories')
            categoriesData = testResult.rows
            foundTable = 'categories'
            
            console.log('测试分类表创建成功，数据:', categoriesData)
        }
        
        ctx.body = {
            success: true,
            message: `成功查询商品分类 (表名: ${foundTable})`,
            data: {
                table: foundTable,
                count: categoriesData.length,
                categories: categoriesData,
                allTables: result.rows
            }
        }
        
    } catch (error) {
        console.error('查询商品分类失败:', error)
        
        ctx.status = 500
        ctx.body = {
            success: false,
            message: `查询商品分类失败: ${error.message}`,
            error: error.stack
        }
    }
})

// GET /api/test-connection - 测试数据库连接
router.get('/api/test-connection', async (ctx) => {
    try {
        console.log('测试数据库连接...')
        
        const result = await db.query('SELECT NOW() as current_time, version() as db_version')
        
        ctx.body = {
            success: true,
            message: '数据库连接正常',
            data: result.rows[0]
        }
        
    } catch (error) {
        console.error('数据库连接测试失败:', error)
        
        ctx.status = 500
        ctx.body = {
            success: false,
            message: `数据库连接失败: ${error.message}`,
            error: error.stack
        }
    }
})

export default router