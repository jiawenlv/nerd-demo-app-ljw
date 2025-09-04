export default function main(inputs) {
  const { CreateResult } = inputs;
  
  const isSuccess = CreateResult && CreateResult.length > 0 && CreateResult[0].id;
  const createdId = isSuccess ? CreateResult[0].id : null;
  
  return {
    IsCreateSuccess: isSuccess,
    CreatedSupplierId: createdId
  };
}