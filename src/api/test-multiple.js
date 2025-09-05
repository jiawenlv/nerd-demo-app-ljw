import Router from 'koa-router'
import testMultipleHandler from '../logic/test-multiple/index.js'

const router = new Router()

router.post('/test-multiple', async (ctx) => {
  // 提取请求参数
  const { Number1, Number2 } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await testMultipleHandler(Number1, Number2);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
