import end from './end.js';

export default async function testObjectInputHandler(input_1) {
  // 执行工作流链
  const { field1, field2 } = await end(input_1);

  return { field1, field2 };

}
