import end from './end.js';
import end2 from './end2.js';

export default async function condition(data) {
  // 条件判断逻辑
  if (input_1.length >= 2) {
    const { output1 } = await end();
    return { output1 };
  } else {
    const { output1 } = await end2(input_1);
    return { output1 };
  }

}
