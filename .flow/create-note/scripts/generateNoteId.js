export default function main(inputs) {
  // 生成一个随机数字作为笔记ID
  const noteId = Math.floor(Math.random() * 1000000) + 1;
  return { noteId };
}