export default function main(inputs) {
  const { existingSupplier } = inputs;
  return {
    checkExistenceResultSupplierExists: Array.isArray(existingSupplier) && existingSupplier.length > 0
  };
}