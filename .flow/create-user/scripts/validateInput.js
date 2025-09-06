export default function main(inputs) {
  const { ValidateInputName, ValidateInputPassword } = inputs;
  
  if (!ValidateInputName || ValidateInputName.trim().length === 0) {
    return { ValidateInputValid: false, ValidateInputError: '姓名不能为空' };
  }
  
  if (!ValidateInputPassword || ValidateInputPassword.length < 6) {
    return { ValidateInputValid: false, ValidateInputError: '密码长度不能少于6位' };
  }
  
  return { ValidateInputValid: true, ValidateInputValidatedName: ValidateInputName.trim(), ValidateInputValidatedPassword: ValidateInputPassword };
}