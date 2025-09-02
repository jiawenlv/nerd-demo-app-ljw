#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 开始设置进销存系统数据库...\n');

try {
  // 检查是否在正确的目录
  const currentDir = process.cwd();
  const expectedDir = path.resolve('/Users/lvjiawen/Codes/work/demo-app');
  
  if (currentDir !== expectedDir) {
    console.log(`切换到项目目录: ${expectedDir}`);
    process.chdir(expectedDir);
  }

  console.log('📋 步骤 1: 生成 Prisma 客户端...');
  execSync('npx prisma generate', { stdio: 'inherit' });

  console.log('\n📋 步骤 2: 应用数据库迁移...');
  execSync('npx prisma db push', { stdio: 'inherit' });

  console.log('\n📋 步骤 3: 初始化测试数据...');
  execSync('node scripts/seed-inventory.js', { stdio: 'inherit' });

  console.log('\n✅ 进销存系统数据库设置完成！');
  console.log('\n可以使用以下命令查看数据库：');
  console.log('  npx prisma studio');

} catch (error) {
  console.error('\n❌ 设置过程中出现错误：', error.message);
  process.exit(1);
}