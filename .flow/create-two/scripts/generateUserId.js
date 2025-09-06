export default function main(inputs) {
  const { validatedName } = inputs;
  
  // 生成基于时间戳和随机数的用户ID
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substr(2, 6);
  const userId = `user_${timestamp}_${randomStr}_${validatedName.substr(0, 3)}`;
  
  return {
    generatedUserId: userId
  };
}