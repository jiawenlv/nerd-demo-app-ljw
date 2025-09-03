import customSQL from './custom-sql.js';
import end from './end.js';

export default async function testRawSqlHandler(input_1) {
  // 执行工作流链
  const { data } = await customSQL(input_1);
  const { output1 } = await end(data);

  return { output1 };

}
