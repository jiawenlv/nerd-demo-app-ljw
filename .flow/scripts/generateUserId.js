export default function main(inputs) {
  const { ValidatedUserName } = inputs;
  
  // 基于时间戳和用户名生成唯一ID
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substr(2, 5);
  const userId = `${timestamp}_${ValidatedUserName.substr(0, 3)}_${randomStr}`;
  
  return {
    GeneratedUserId: userId
  };
}