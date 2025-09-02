import Router from 'koa-router'
import testConditionRouter from './test-condition.js'
import testInputRouter from './test-input.js'

const router = new Router()

router.use(testConditionRouter.routes())
router.use(testInputRouter.routes())

export default router
