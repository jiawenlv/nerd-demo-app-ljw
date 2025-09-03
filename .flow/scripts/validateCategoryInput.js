export default function main(inputs) {
  const { categoryName, parentId, sortOrder } = inputs;
  const errors = [];
  
  if (!categoryName || categoryName.trim().length === 0) {
    errors.push('分类名称不能为空');
  }
  
  if (categoryName && categoryName.length > 100) {
    errors.push('分类名称长度不能超过100个字符');
  }
  
  if (parentId && parentId.length > 50) {
    errors.push('父级分类ID格式不正确');
  }
  
  if (sortOrder < 0) {
    errors.push('排序序号不能为负数');
  }
  
  return {
    validateCategoryInputIsValid: errors.length === 0,
    validateCategoryInputErrorMessage: errors.join('; ') || ''
  };
}