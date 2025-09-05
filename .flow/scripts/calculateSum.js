export default function main(inputs) {
  const { ValidatedFirstNumber, ValidatedSecondNumber } = inputs;
  
  const sum = ValidatedFirstNumber + ValidatedSecondNumber;
  
  return {
    CalculationResult: sum
  };
}