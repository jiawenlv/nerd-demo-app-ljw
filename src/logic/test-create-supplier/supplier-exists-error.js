

export default async function supplierExistsError(createSupplierRecordCreatedSupplier) {
  // End节点：构造最终返回结果
  return {
    code: "409",
    data: "data",
    message: "供应商编码已存在"
  };

}
