export default function main(inputs) {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  const orderNumber = `ORD_${inputs.UserId}_${timestamp}_${random}`;

  return {
    OrderNumber: orderNumber
  };
}
