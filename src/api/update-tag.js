import Router from 'koa-router'
import updateTagHandler from '../logic/update-tag/index.js'

const router = new Router()

router.post('/update-tag', async (ctx) => {
  // 提取请求参数
  const { tagId, userId, tagName } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await updateTagHandler(tagId, userId, tagName);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
