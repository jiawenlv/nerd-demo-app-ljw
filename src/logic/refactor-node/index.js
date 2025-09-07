import customSQL from './custom-sql.js';
import end from './end.js';

export default async function refactorNodeHandler() {
  // 执行工作流链
  const { data } = await customSQL();
  const { output1 } = await end(data);

  return { output1 };

}
