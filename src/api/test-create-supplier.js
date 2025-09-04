import Router from 'koa-router'
import testCreateSupplierHandler from '../logic/test-create-supplier/index.js'

const router = new Router()

router.post('/test-create-supplier', async (ctx) => {
  // 提取请求参数
  const { SupplierCode, SupplierName, ContactName, Phone, Email, Address } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await testCreateSupplierHandler(SupplierCode, SupplierName, ContactName, Phone, Email, Address);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
