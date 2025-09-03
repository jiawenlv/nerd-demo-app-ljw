export default function main(inputs) {
  const { createdCategory } = inputs;
  
  if (!Array.isArray(createdCategory) || createdCategory.length === 0) {
    return {
      extractCategoryIdCategoryId: '',
      extractCategoryIdCategoryData: {}
    };
  }
  
  const categoryData = createdCategory[0];
  
  return {
    extractCategoryIdCategoryId: categoryData.id || '',
    extractCategoryIdCategoryData: categoryData
  };
}