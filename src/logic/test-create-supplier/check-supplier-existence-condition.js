import supplierExistsError from './supplier-exists-error.js';
import createSupplierRecord from './create-supplier-record.js';
import createSuccess from './create-success.js';

export default async function checkSupplierExistenceCondition(supplierExists) {
  // 条件判断逻辑
  if (supplierExists === true) {
    const { code, data, message } = await supplierExistsError(createSupplierRecordCreatedSupplier);
    return { code, data, message };
  } else {
    const { createSupplierRecordCreatedSupplier } = await createSupplierRecord(code, name, contactName, phone, email, address);
    const { code, data, message } = await createSuccess(createdSupplier);
    return { code, data, message };
  }

}
