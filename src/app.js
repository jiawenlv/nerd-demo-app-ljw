import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import router from './api/index.js';
import logger from './middlewares/logger.js';
import authMiddleware from './middlewares/auth.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = new Koa();

app.use(errorHandler);
app.use(logger);
app.use(serve('public')); // Serve static files from public directory
app.use(bodyParser());
app.use(authMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});