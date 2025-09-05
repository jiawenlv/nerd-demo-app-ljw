export default function main(inputs) {
  const { CheckResult } = inputs;
  
  // 解析SQL查询结果
  const exists = CheckResult && CheckResult.length > 0 && CheckResult[0].count > 0;
  
  return {
    CodeExists: exists
  };
}