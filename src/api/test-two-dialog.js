import Router from 'koa-router'
import testTwoDialogHandler from '../logic/test-two-dialog/index.js'

const router = new Router()

router.post('/test-two-dialog', async (ctx) => {
  // 提取请求参数
  const { UserName, UserPassword } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await testTwoDialogHandler(UserName, UserPassword);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
