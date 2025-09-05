import validateSupplierInput from './validateSupplierInput.js';
import checkValidationResult from './check-validation-result.js';

export default async function testCreateSupplierHandler(supplierCode, name, contactName, phone, email, address) {
  // 执行前置节点链
  const { validateSupplierInputIsValid, validateSupplierInputErrorMessage } = await validateSupplierInput(supplierCode, name, contactName, phone, email);

  // 执行条件节点
  return await checkValidationResult(validateSupplierInputIsValid);

}
