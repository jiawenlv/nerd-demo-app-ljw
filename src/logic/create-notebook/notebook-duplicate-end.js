

export default async function notebookDuplicateEnd() {
  // End节点：构造最终返回结果
  return {
    NotebookDuplicateEndCode: 409,
    NotebookDuplicateEndMessage: "笔记本名称已存在",
    NotebookDuplicateEndData: {}
  };

}
