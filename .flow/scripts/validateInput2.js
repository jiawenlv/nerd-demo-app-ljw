export default function main(inputs) {
  if (!inputs.UserId || typeof inputs.UserId !== 'string') {
    throw new Error('用户ID不能为空且必须是字符串');
  }
  if (!inputs.GoodsId || typeof inputs.GoodsId !== 'string') {
    throw new Error('商品ID不能为空且必须是字符串');
  }
  if (!inputs.Quantity || inputs.Quantity <= 0) {
    throw new Error('购买数量必须大于0');
  }

  return {
    ValidatedUserId: inputs.UserId,
    ValidatedGoodsId: inputs.GoodsId,
    ValidatedQuantity: inputs.Quantity
  };
}