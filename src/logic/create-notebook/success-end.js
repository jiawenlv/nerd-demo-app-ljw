

export default async function successEnd(SuccessEndNotebookId) {
  // End节点：构造最终返回结果
  return {
    SuccessEndCode: 200,
    SuccessEndMessage: "笔记本创建成功",
    SuccessEndData: "SuccessEndData"
  };

}
