export default function main(inputs) {
  const { code, name, contactName, phone, email } = inputs;
  const errors = [];
  
  if (!code || code.trim().length === 0) {
    errors.push('供应商编码不能为空');
  }
  
  if (!name || name.trim().length === 0) {
    errors.push('供应商名称不能为空');
  }
  
  if (!contactName || contactName.trim().length === 0) {
    errors.push('联系人姓名不能为空');
  }
  
  if (!phone || phone.trim().length === 0) {
    errors.push('联系电话不能为空');
  }
  
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('邮箱格式不正确');
  }
  
  return {
    validateSupplierInputIsValid: errors.length === 0,
    validateSupplierInputErrorMessage: errors.length > 0 ? errors.join('; ') : ''
  };
}