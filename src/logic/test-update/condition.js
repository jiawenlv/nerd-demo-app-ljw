import end from './end.js';
import end2 from './end2.js';

export default async function condition(data) {
  // 条件判断逻辑
  if (data.affectedRows === 1) {
    const { message } = await end();
    return { message };
  } else {
    const { message } = await end2(input_1);
    return { message };
  }

}
