import Router from 'koa-router'
import testConditionHandler from '../logic/test-condition/index.js'

const router = new Router()

router.post('/test-condition', async (ctx) => {
  // 提取请求参数
  const { obj } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await testConditionHandler(obj);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
