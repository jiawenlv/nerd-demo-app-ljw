import javascript1 from './javascript1.js';
import end from './end.js';

export default async function testScriptHandler(input_1, input_2) {
  // 执行工作流链
  const { result } = await javascript1(input_1, input_2);
  const { output1, output2, output3 } = await end(result);

  return { output1, output2, output3 };

}
