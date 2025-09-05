import Router from 'koa-router'
import testRightConditionHandler from '../logic/test-right-condition/index.js'

const router = new Router()

router.post('/test-right-condition', async (ctx) => {
  // 提取请求参数
  const { a, b } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await testRightConditionHandler(a, b);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
