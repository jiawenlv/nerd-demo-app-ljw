import end from './end.js';

export default async function testArrayInputHandler(input_1) {
  // 执行工作流链
  const { output1, output2 } = await end(input_1);

  return { output1, output2 };

}
