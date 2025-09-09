

export default async function end(NoteId) {
  // End节点：构造最终返回结果
  return {
    EndCode: 200,
    EndMessage: "笔记创建成功",
    EndData: {"noteId":"CreateNoteRecord_NoteId_0__note_id"}
  };

}
