import Router from 'koa-router'
import testRouter from './test.js'
import testHelloWorldRouter from './test-hello-world.js'
import testScriptRouter from './test-script.js'
import testConditionRouter from './test-condition.js'
import testLogicRouter from './test-logic.js'
import testInputsRouter from './test-inputs.js'

const router = new Router()

router.use(testRouter.routes())
router.use(testHelloWorldRouter.routes())
router.use(testScriptRouter.routes())
router.use(testConditionRouter.routes())
router.use(testLogicRouter.routes())
router.use(testInputsRouter.routes())

export default router
