export default function main(inputs) {
  const { SupplierCode, SupplierName, ContactName, Phone, Email, Address } = inputs;
  
  if (!SupplierCode || SupplierCode.trim() === '') {
    throw new Error('供应商编码不能为空');
  }
  
  if (!SupplierName || SupplierName.trim() === '') {
    throw new Error('供应商名称不能为空');
  }
  
  if (!ContactName || ContactName.trim() === '') {
    throw new Error('联系人姓名不能为空');
  }
  
  if (!Phone || Phone.trim() === '') {
    throw new Error('联系电话不能为空');
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (Email && !emailRegex.test(Email)) {
    throw new Error('邮箱格式不正确');
  }
  
  return {
    ValidatedSupplierCode: SupplierCode,
    ValidatedSupplierName: SupplierName,
    ValidatedContactName: ContactName,
    ValidatedPhone: Phone,
    ValidatedEmail: Email,
    ValidatedAddress: Address
  };
}