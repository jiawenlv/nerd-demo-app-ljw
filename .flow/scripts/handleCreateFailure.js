export default function main(inputs) {
  const { GeneratedSupplierId, ValidatedSupplierName } = inputs;
  
  return {
    ErrorMessage: `供应商 ${ValidatedSupplierName} 创建失败，尝试的ID: ${GeneratedSupplierId}`,
    ErrorCode: "CREATE_SUPPLIER_FAILED"
  };
}