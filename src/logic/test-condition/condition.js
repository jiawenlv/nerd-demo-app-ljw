import end from './end.js';
import end2 from './end2.js';

export default async function condition(field1) {
  // 条件判断逻辑
  if (field1 > 100) {
    const { output1, output2 } = await end(field1);
    return { output1, output2 };
  } else {
    const { output1, output2 } = await end2(field1);
    return { output1, output2 };
  }

}
