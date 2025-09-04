import Router from 'koa-router'
import testReactHandler from '../logic/test-react/index.js'

const router = new Router()

router.post('/test-react', async (ctx) => {
  // 提取请求参数
  const { input_1 } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await testReactHandler(input_1);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
