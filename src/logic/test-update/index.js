import customSQL from './custom-sql.js';
import condition from './condition.js';

export default async function testUpdateHandler(id, name) {
  // 执行前置节点链
  const { data } = await customSQL(id, name);

  // 执行条件节点
  return await condition(data);

}
