

export default async function end(input_1) {
  // End节点：构造最终返回结果
  return {
    field1: input_1.a,
    field2: input_1.field3.field2
  };

}
