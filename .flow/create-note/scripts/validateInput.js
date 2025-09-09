export default function main(inputs) {
  const { ValidateInputUserId, ValidateInputNotebookId, ValidateInputTitle, ValidateInputContent } = inputs;

  if (!ValidateInputUserId || typeof ValidateInputUserId !== 'string') {
    throw new Error('用户ID不能为空且必须是字符串');
  }
  
  if (!ValidateInputNotebookId || typeof ValidateInputNotebookId !== 'number') {
    throw new Error('笔记本ID不能为空且必须是数字');
  }
  
  if (!ValidateInputTitle || typeof ValidateInputTitle !== 'string') {
    throw new Error('笔记标题不能为空且必须是字符串');
  }
  
  if (!ValidateInputContent || typeof ValidateInputContent !== 'string') {
    throw new Error('笔记内容不能为空且必须是字符串');
  }
  
  return {
    ValidateInputValidatedUserId: ValidateInputUserId,
    ValidateInputValidatedNotebookId: ValidateInputNotebookId,
    ValidateInputValidatedTitle: ValidateInputTitle,
    ValidateInputValidatedContent: ValidateInputContent
  };
}