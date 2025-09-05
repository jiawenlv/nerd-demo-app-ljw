import Router from 'koa-router'
import testCreateOrderHandler from '../logic/test-create-order/index.js'

const router = new Router()

router.post('/test-create-order', async (ctx) => {
  // 提取请求参数
  const { UserId, GoodsId, Quantity } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await testCreateOrderHandler(UserId, GoodsId, Quantity);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
