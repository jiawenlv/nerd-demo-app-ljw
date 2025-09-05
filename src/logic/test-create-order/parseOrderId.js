export default function main(inputs) {
  const orderData = inputs.OrderData;
  
  if (!orderData || orderData.length === 0) {
    throw new Error('订单创建失败');
  }
  
  return {
    OrderId: orderData[0].id
  };
}