import end from './end.js';

export default async function testHandler() {
  // 执行工作流链
  const { output1, output2, output3 } = await end($.API.inputs.body.field1, $.API.inputs.body.field2, $.API.inputs.body.field3);

  return { output1, output2, output3 };

}
