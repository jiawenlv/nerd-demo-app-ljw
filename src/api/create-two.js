import Router from 'koa-router'
import createTwoHandler from '../logic/create-two/index.js'

const router = new Router()

router.post('/create-two', async (ctx) => {
  // 提取请求参数
  const { UserId, TagName } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await createTwoHandler(UserId, TagName);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
