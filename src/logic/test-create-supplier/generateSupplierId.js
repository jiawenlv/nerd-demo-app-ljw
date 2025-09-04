export default function main(inputs) {
  const { ValidatedSupplierCode } = inputs;
  
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substr(2, 5);
  const supplierId = `SUP_${ValidatedSupplierCode}_${timestamp}_${randomStr}`;
  
  return {
    GeneratedSupplierId: supplierId
  };
}