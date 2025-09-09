import Router from 'koa-router'
import createNotebookHandler from '../logic/create-notebook/index.js'

const router = new Router()

router.post('/create-notebook', async (ctx) => {
  // 提取请求参数
  const { StartUserId, StartNotebookName } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await createNotebookHandler(StartUserId, StartNotebookName);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
