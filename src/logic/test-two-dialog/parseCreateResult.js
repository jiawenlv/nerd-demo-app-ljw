export default function main(inputs) {
  const { CreateResult } = inputs;
  
  // 解析创建结果
  if (CreateResult && CreateResult.length > 0) {
    return {
      CreatedUser: CreateResult[0]
    };
  }
  
  throw new Error('用户创建失败');
}