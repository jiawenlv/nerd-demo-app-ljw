

export default async function end2(obj) {
  // End节点：构造最终返回结果
  return {
    output1: "不等于1",
    output2: obj[0].a.b
  };

}
