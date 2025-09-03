import condition from './condition.js';

export default async function testConditionHandler(input_1) {
  // 执行前置节点链

  // 执行条件节点
  return await condition(input_1);

}
