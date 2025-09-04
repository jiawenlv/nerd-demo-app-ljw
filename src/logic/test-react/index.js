import _javascript_2 from './+javascript#2.js';
import end from './end.js';

export default async function testReactHandler(input_1) {
  // 执行工作流链
  const { result } = await _javascript_2(input_1);
  const { output1 } = await end($.Javascript #2.outputs.result);

  return { output1 };

}
