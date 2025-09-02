# my-app
1. npm install
2. prisma generat # 生成 Prisma 客户端
3. prisma migrate dev # 执行数据库迁移（从本地schema.prisma生成数据库） 
   - 如果是第一次运行，可以使用 `prisma migrate dev --name init` 来初始化数据库
   - 如果已经有数据库了，可以使用 `prisma migrate dev --create-only` 来创建迁移文件，但不执行迁移
   - 如果需要从现有数据库生成 Prisma 模型，可以使用 `prisma db pull`
   - 如果需要手动修改 Prisma 模型，可以直接编辑 `schema.prisma` 文件
   - 如果需要重新生成 Prisma 客户端，可以使用 `prisma generate`
5. npm run dev # 启动应用