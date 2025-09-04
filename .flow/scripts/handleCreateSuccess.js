export default function main(inputs) {
  const { CreatedSupplierId, ValidatedSupplierName } = inputs;
  
  return {
    SuccessMessage: `供应商 ${ValidatedSupplierName} 创建成功，ID: ${CreatedSupplierId}`,
    SuccessSupplierId: CreatedSupplierId
  };
}