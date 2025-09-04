import Router from 'koa-router'
import testConditionRouter from './test-condition.js'
import testInputRouter from './test-input.js'
import testObjectInputRouter from './test-object-input.js'
import testArrayInputRouter from './test-array-input.js'
import testCategoriesRouter from './test-categories.js'
import testRawSqlRouter from './test-raw-sql.js'
import testHelloWorldRouter from './test-hello-world.js'

const router = new Router()

router.use(testConditionRouter.routes())
router.use(testInputRouter.routes())
router.use(testObjectInputRouter.routes())
router.use(testArrayInputRouter.routes())
router.use(testCategoriesRouter.routes())
router.use(testRawSqlRouter.routes())
router.use(testHelloWorldRouter.routes())

export default router
