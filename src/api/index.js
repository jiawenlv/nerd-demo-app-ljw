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
import cddRouter from './cdd.js'
import testRightConditionRouter from './test-right-condition.js'
import testCreateOrderRouter from './test-create-order.js'
import testTwoDialogRouter from './test-two-dialog.js'
import testMultipleRouter from './test-multiple.js'
import testCreateWarehouseRouter from './test-create-warehouse.js'
import testCreateTagRouter from './test-create-tag.js'
import createTagRouter from './create-tag.js'
import updateTagRouter from './update-tag.js'
import createTwoRouter from './create-two.js'
import refactorNodeRouter from './refactor-node.js'

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
router.use(cddRouter.routes())
router.use(testRightConditionRouter.routes())
router.use(testCreateOrderRouter.routes())
router.use(testTwoDialogRouter.routes())
router.use(testMultipleRouter.routes())
router.use(testCreateWarehouseRouter.routes())
router.use(testCreateTagRouter.routes())
router.use(createTagRouter.routes())
router.use(updateTagRouter.routes())
router.use(createTwoRouter.routes())
router.use(refactorNodeRouter.routes())

export default router
