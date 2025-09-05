export default function main(inputs) {
  const { supplierData } = inputs;
  
  const exists = Array.isArray(supplierData) && supplierData.length > 0;
  const supplierName = exists ? supplierData[0]?.name || '' : '';
  
  return {
    checkExistenceExists: exists,
    checkExistenceSupplierName: supplierName
  };
}