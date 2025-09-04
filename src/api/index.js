import Router from 'koa-router'
import testConditionRouter from './test-condition.js'
import testInputRouter from './test-input.js'
import testObjectInputRouter from './test-object-input.js'
import testArrayInputRouter from './test-array-input.js'
import testCategoriesRouter from './test-categories.js'
import testRawSqlRouter from './test-raw-sql.js'
import testHelloWorldRouter from './test-hello-world.js'
import testReactRouter from './test-react.js'
import testInsertRouter from './test-insert.js'
import testQueryRouter from './test-query.js'
import testDeleteRouter from './test-delete.js'
import testUpdateRouter from './test-update.js'
import testCreateSupplierRouter from './test-create-supplier.js'

const router = new Router()

router.use(testConditionRouter.routes())
router.use(testInputRouter.routes())
router.use(testObjectInputRouter.routes())
router.use(testArrayInputRouter.routes())
router.use(testCategoriesRouter.routes())
router.use(testRawSqlRouter.routes())
router.use(testHelloWorldRouter.routes())
router.use(testReactRouter.routes())
router.use(testInsertRouter.routes())
router.use(testQueryRouter.routes())
router.use(testDeleteRouter.routes())
router.use(testUpdateRouter.routes())
router.use(testCreateSupplierRouter.routes())

export default router
