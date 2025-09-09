import Router from 'koa-router'
import createNoteHandler from '../logic/create-note/index.js'

const router = new Router()

router.post('/create-note', async (ctx) => {
  // 提取请求参数
  const { UserId, NotebookId, NoteTitle, NoteContent } = ctx.request.body
  
  // 调用主处理函数（平铺参数）
  const result = await createNoteHandler(UserId, NotebookId, NoteTitle, NoteContent);
  
  // 返回结果
  ctx.body = result;
  ctx.status = 200;
})

export default router
