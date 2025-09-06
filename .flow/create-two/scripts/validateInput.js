export default function main(inputs) {
  const { ValidateInputUserId, ValidateInputTagName } = inputs;
  
  if (!ValidateInputUserId || ValidateInputUserId <= 0) {
    throw new Error('用户ID必须为正整数');
  }
  
  if (!ValidateInputTagName || ValidateInputTagName.trim().length === 0) {
    throw new Error('标签名称不能为空');
  }
  
  if (ValidateInputTagName.length > 50) {
    throw new Error('标签名称长度不能超过50个字符');
  }
  
  return {
    ValidateInputValidatedUserId: ValidateInputUserId,
    ValidateInputValidatedTagName: ValidateInputTagName.trim()
  };
}