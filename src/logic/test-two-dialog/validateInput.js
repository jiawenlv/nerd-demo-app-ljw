export default function main(inputs) {
  const { UserName, UserPassword } = inputs;
  
  if (!UserName || UserName.trim().length === 0) {
    throw new Error('用户名称不能为空');
  }
  
  if (!UserPassword || UserPassword.length < 6) {
    throw new Error('用户密码长度不能少于6位');
  }
  
  return {
    ValidatedUserName: UserName.trim(),
    ValidatedUserPassword: UserPassword
  };
}