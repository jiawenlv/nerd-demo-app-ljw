export default function main(inputs) {
  const { StartTagId, StartUserId } = inputs;
  
  const isValid = StartTagId && StartTagId.trim() !== '' && 
                 StartUserId && StartUserId.trim() !== '';
  
  return {
    ValidateInputValidatedOrderId: ValidateInputOrderId,
    ValidateInputValidatedTag: ValidateInputTag,
    ValidateInputIsValid: isValid
  };
}