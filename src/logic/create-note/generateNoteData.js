export default function main(inputs) {
  const now = new Date().toISOString();
  
  const noteData = {
    user_id: inputs.GenerateNoteDataUserId,
    notebook_id: inputs.GenerateNoteDataNotebookId,
    title: inputs.GenerateNoteDataNoteTitle,
    content: inputs.GenerateNoteDataNoteContent,
    content_format: 'markdown',
    is_pinned: false,
    is_archived: false,
    is_trashed: false,
    tags: '[]',
    created_at: now,
    updated_at: now
  };
  
  return {
    NoteData: noteData
  };
}