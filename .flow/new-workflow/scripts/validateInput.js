export default function main(inputs) {
  const { ValidateInputName, ValidateInputPassword } = inputs;
  
  if (!ValidateInputName || ValidateInputName.trim().length === 0) {
    return {
      ValidateInputIsValid: false,
      ValidateInputErrorMessage: '用户姓名不能为空'
    };
  }
  
  if (!ValidateInputPassword || ValidateInputPassword.length < 6) {
    return {
      ValidateInputIsValid: false,
      ValidateInputErrorMessage: '密码长度不能少于6位'
    };
  }
  
  return {
    ValidateInputIsValid: true,
    ValidateInputErrorMessage: ''
  };
}