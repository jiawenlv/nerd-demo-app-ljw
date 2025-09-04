import Router from 'koa-router'
import testUpdateHandler from '../logic/test-update/index.js'

const router = new Router()

router.post('/test-update', async (ctx) => {
  // 提取请求参数
  const { id, name } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await testUpdateHandler(id, name);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
