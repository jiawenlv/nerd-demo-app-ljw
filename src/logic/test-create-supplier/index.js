import validateInput from './validateInput.js';
import generateSupplierId from './generateSupplierId.js';
import createSupplierRecord from './create-supplier-record.js';
import parseCreateResult from './parseCreateResult.js';
import checkCreateSuccess from './check-create-success.js';

export default async function testCreateSupplierHandler(SupplierCode, SupplierName, ContactName, Phone, Email, Address) {
  // 执行前置节点链
  const { ValidatedSupplierCode, ValidatedSupplierName, ValidatedContactName, ValidatedPhone, ValidatedEmail, ValidatedAddress } = await validateInput(SupplierCode, SupplierName, ContactName, Phone, Email, Address);
  const { GeneratedSupplierId } = await generateSupplierId(ValidatedSupplierCode);
  const { CreateResult } = await createSupplierRecord(GeneratedSupplierId, ValidatedSupplierCode, ValidatedSupplierName, ValidatedContactName, ValidatedPhone, ValidatedEmail, ValidatedAddress);
  const { IsCreateSuccess, CreatedSupplierId } = await parseCreateResult(CreateResult);

  // 执行条件节点
  return await checkCreateSuccess(IsCreateSuccess);

}
