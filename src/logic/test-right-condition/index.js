import condition from './condition.js';

export default async function testRightConditionHandler(a, b) {
  // 执行前置节点链

  // 执行条件节点
  return await condition(a, b);

}
