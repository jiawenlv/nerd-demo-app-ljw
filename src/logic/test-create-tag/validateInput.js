export default function main(inputs) {
  const { StartLoginCredential, StartLoginPassword } = inputs;
  
  if (!StartLoginCredential || StartLoginCredential.trim() === '') {
    throw new Error('登录凭证不能为空');
  }
  
  if (!StartLoginPassword || StartLoginPassword.trim() === '') {
    throw new Error('密码不能为空');
  }
  
  return {
    ValidateInputCredential: StartLoginCredential.trim(),
    ValidateInputPassword: StartLoginPassword.trim()
  };
}