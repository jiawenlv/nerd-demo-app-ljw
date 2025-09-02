// src/middlewares/errorHandler.js
import { AppError } from '../common/appError.js';

export async function errorHandler(ctx, next) {
  try {
    await next();
  } catch (err) {
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    ctx.status = statusCode;
    ctx.body = {
      success: false,
      message: err.message || 'Internal Server Error',
      details: err.details || null,
    };
    ctx.app.emit('error', err, ctx); // optional logging
  }
}