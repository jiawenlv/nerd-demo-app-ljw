const authMiddleware = async (ctx, next) => {
  ctx.state.user = {
    id: 'user-abc',
    name: '张三',
    roles: ['user'],
  };
  await next();
};

export default authMiddleware;