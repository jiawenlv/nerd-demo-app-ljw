import Router from 'koa-router'
import testCreateTagHandler from '../logic/test-create-tag/index.js'

const router = new Router()

router.post('/test-create-tag', async (ctx) => {
  // 提取请求参数
  const { userId, tagName } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await testCreateTagHandler(userId, tagName);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
