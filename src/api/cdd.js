import Router from 'koa-router'
import cddHandler from '../logic/cdd/index.js'

const router = new Router()

router.post('/cdd', async (ctx) => {
  // 提取请求参数
  const { UserId, GoodsId, Quantity } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await cddHandler(UserId, GoodsId, Quantity);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
