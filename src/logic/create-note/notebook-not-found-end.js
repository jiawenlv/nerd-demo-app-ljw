

export default async function notebookNotFoundEnd() {
  // End节点：构造最终返回结果
  return {
    NotebookNotFoundEndCode: 404,
    NotebookNotFoundEndMessage: "笔记本不存在",
    NotebookNotFoundEndData: {}
  };

}
