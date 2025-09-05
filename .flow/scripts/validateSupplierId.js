export default function main(inputs) {
  const { supplierId } = inputs;
  
  if (!supplierId || supplierId.trim() === '') {
    return {
      validateSupplierIdIsValid: false,
      validateSupplierIdErrorMessage: '供应商ID不能为空'
    };
  }
  
  if (supplierId.length > 100) {
    return {
      validateSupplierIdIsValid: false,
      validateSupplierIdErrorMessage: '供应商ID长度不能超过100个字符'
    };
  }
  
  return {
    validateSupplierIdIsValid: true,
    validateSupplierIdErrorMessage: ''
  };
}