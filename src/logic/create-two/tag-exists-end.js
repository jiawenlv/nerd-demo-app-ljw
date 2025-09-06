

export default async function tagExistsEnd(CreateTagRecordResult) {
  // End节点：构造最终返回结果
  return {
    TagExistsEndCode: 409,
    TagExistsEndData: "TagExistsEndData",
    TagExistsEndMessage: "标签已存在，无法重复创建"
  };

}
