export default function main(inputs) {
  const { TagName, TagType, CreatedBy } = inputs;
  
  if (!TagName || typeof TagName !== 'string' || TagName.trim().length === 0) {
    throw new Error('标签名称不能为空');
  }
  
  if (!TagType || typeof TagType !== 'string' || TagType.trim().length === 0) {
    throw new Error('标签类型不能为空');
  }
  
  if (!CreatedBy || typeof CreatedBy !== 'string' || CreatedBy.trim().length === 0) {
    throw new Error('创建者ID不能为空');
  }
  
  return {
    ValidatedTagName: TagName.trim(),
    ValidatedTagType: TagType.trim(),
    ValidatedCreatedBy: CreatedBy.trim()
  };
}