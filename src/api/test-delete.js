import Router from 'koa-router'
import testDeleteHandler from '../logic/test-delete/index.js'

const router = new Router()

router.post('/test-delete', async (ctx) => {
  // 提取请求参数
  const { input_1 } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await testDeleteHandler(input_1);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
