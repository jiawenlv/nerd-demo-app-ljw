import userCreationFailed from './user-creation-failed.js';
import createUserRecord from './create-user-record.js';
import parseCreateResult from './parseCreateResult.js';
import returnSuccess from './return-success.js';

export default async function userExistsCondition(UserExists) {
  // 条件判断逻辑
  if (UserExists === true) {
    const { Code, Message, Data } = await userCreationFailed(GeneratedUserId);
    return { Code, Message, Data };
  } else if (UserExists === false) {
    const { CreateResult } = await createUserRecord(GeneratedUserId, ValidatedUserName, ValidatedUserPassword);
    const { CreatedUser } = await parseCreateResult(CreateResult);
    const { Code, Message, Data } = await returnSuccess(CreatedUser);
    return { Code, Message, Data };
  }
  // 没有匹配的条件，返回空结果
  return {};

}
