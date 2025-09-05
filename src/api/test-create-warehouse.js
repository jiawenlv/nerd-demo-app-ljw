import Router from 'koa-router'
import testCreateWarehouseHandler from '../logic/test-create-warehouse/index.js'

const router = new Router()

router.post('/test-create-warehouse', async (ctx) => {
  // 提取请求参数
  const { WarehouseName, WarehouseCode, WarehouseAddress, ContactPerson, ContactPhone, Capacity, Status } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await testCreateWarehouseHandler(WarehouseName, WarehouseCode, WarehouseAddress, ContactPerson, ContactPhone, Capacity, Status);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
