import createUsesr from './create-usesr.js';
import end from './end.js';

export default async function testCreateHandler() {
  // 执行工作流链
  const { user } = await createUsesr({"name":"llv5","password":"123456"});
  const { output1 } = await end(user);

  return { output1 };

}
