export default function main(inputs) {
  const { CalculateSumFirstNumber, CalculateSumSecondNumber } = inputs;
  const sum = CalculateSumFirstNumber + CalculateSumSecondNumber;
  return { CalculateSumResult: sum };
}