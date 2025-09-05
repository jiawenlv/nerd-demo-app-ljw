import checkSupplierExists from './check-supplier-exists.js';
import checkExistenceResult from './checkExistenceResult.js';
import checkSupplierExistenceCondition from './check-supplier-existence-condition.js';
import validationFailed from './validation-failed.js';

export default async function checkValidationResult(isValid) {
  // 条件判断逻辑
  if (isValid === true) {
    const { checkSupplierExistsExistingSupplier } = await checkSupplierExists(code);
    const { checkExistenceResultSupplierExists } = await checkExistenceResult(existingSupplier);
    return await checkSupplierExistenceCondition(supplierExists);
  } else {
    const { code, data, message } = await validationFailed(checkSupplierExistsExistingSupplier);
    return { code, data, message };
  }

}
