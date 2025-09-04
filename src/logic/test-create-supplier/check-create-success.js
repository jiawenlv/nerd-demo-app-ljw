import handleCreateSuccess from './handleCreateSuccess.js';
import endSuccess from './end-success.js';
import handleCreateFailure from './handleCreateFailure.js';
import endFailure from './end-failure.js';

export default async function checkCreateSuccess(IsCreateSuccess) {
  // 条件判断逻辑
  if (IsCreateSuccess === true) {
    const { SuccessMessage, SuccessSupplierId } = await handleCreateSuccess(CreatedSupplierId, ValidatedSupplierName);
    const { code, data, message } = await endSuccess(SuccessMessage, SuccessSupplierId);
    return { code, data, message };
  } else {
    const { ErrorMessage, ErrorCode } = await handleCreateFailure(GeneratedSupplierId, ValidatedSupplierName);
    const { code, data, message } = await endFailure(ErrorMessage, ErrorCode);
    return { code, data, message };
  }

}
