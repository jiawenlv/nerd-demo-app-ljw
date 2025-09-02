import end from './end.js';

export default async function testInputHandler(input_1) {
  // 执行工作流链
  const { output1 } = await end(input_1);

  return { output1 };

}
