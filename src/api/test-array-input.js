import Router from 'koa-router'
import testArrayInputHandler from '../logic/test-array-input/index.js'

const router = new Router()

router.post('/test-array-input', async (ctx) => {
  // 提取请求参数
  const { input_1, input_2, input_3 } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await testArrayInputHandler(input_1, input_2, input_3);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
