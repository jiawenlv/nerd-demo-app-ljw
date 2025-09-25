import business from './business.js';
import end from './end.js';

export default async function testHandler(input_1) {
  // 执行工作流链
  const { output2 } = await business(input_1);
  const { output1 } = await end(output2);

  return { output1 };

}
