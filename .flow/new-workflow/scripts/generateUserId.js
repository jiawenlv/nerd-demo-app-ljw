export default function main(inputs) {
  const { GenerateUserName } = inputs;
  
  // 生成基于时间戳和随机数的唯一ID
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  const userId = `user_${timestamp}_${randomStr}`;
  
  return {
    GenerateUserId: userId
  };
}