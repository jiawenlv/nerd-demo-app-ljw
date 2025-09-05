import end from './end.js';
import end2 from './end2.js';

export default async function condition(a, b) {
  // 条件判断逻辑
  if (a > "${b}") {
    const { output1 } = await end();
    return { output1 };
  } else {
    const { output1 } = await end2(a, b);
    return { output1 };
  }

}
