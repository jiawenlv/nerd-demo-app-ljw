import Router from 'koa-router'
import refactorNodeHandler from '../logic/refactor-node/index.js'

const router = new Router()

router.post('/refactor-node', async (ctx) => {
  // 提取请求参数
  // 无需提取参数
  
  // 调用主处理函数（平铺参数）
  const result = await refactorNodeHandler();
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
