export default function main(inputs) {
  const { UserData } = inputs;
  const user = UserData[0];
  
  // 生成用户信息和令牌（这里简化处理）
  return {
    GenerateLoginResponseUserInfo: {
      userId: user.userId,
      username: user.username,
      email: user.email
    },
    GenerateLoginResponseToken: 'mock-jwt-token-' + Date.now()
  };
}