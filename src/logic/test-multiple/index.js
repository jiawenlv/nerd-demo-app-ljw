import calculateSum from './calculateSum.js';
import end from './end.js';

export default async function testMultipleHandler(Number1, Number2) {
  // 执行工作流链
  const { CalculateSumResult } = await calculateSum(Number1, Number2);
  const { code, data, message } = await end(CalculateSumResult);

  return { code, data, message };

}
