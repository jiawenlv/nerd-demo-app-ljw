import Router from 'koa-router'
import testCreateHandler from '../logic/test-create/index.js'

const router = new Router()

router.post('/test-create', async (ctx) => {
  // 提取请求参数
  // 无需提取参数

  // 调用主处理函数（平铺参数）
  const result = await testCreateHandler();

  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
