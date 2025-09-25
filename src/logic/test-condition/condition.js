import end from './end.js';
import end2 from './end2.js';

export default async function condition(input_1) {
  // 条件判断逻辑
  if (input_1 > 100) {
    const { output1, output2 } = await end(input_1);
    return { output1, output2 };
  } else {
    const { output1, output2 } = await end2(input_1);
    return { output1, output2 };
  }

}
