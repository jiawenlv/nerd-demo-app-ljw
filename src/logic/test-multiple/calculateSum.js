export default function main(inputs) {
  const { CalculateSumNumber1, CalculateSumNumber2 } = inputs;
  const sum = CalculateSumNumber1 + CalculateSumNumber2;
  return { CalculateSumResult: sum };
}