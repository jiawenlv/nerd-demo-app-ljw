export default function main(inputs) {
  const { CheckResult } = inputs;
  
  // 解析SQL查询结果
  const userExists = CheckResult && CheckResult.length > 0 && CheckResult[0].count > 0;
  
  return {
    UserExists: userExists
  };
}