import javascript1 from './javascript1.js';
import end from './end.js';

export default async function testLogicHandler() {
  // 执行工作流链
  const { result } = await javascript1("111111");
  const { output1 } = await end(result);

  return { output1 };

}
