const products = [
  {
    price: 100,
    name: "x",
  },
  {
    price: 200,
    name: "y",
  },
  {
    price: 300,
    name: "z",
  },
];

function CalculateBill(product) {
  // ? finding gst of items
  const withGst = products.map((product) => {
    return (product.price = product.price + product.price * (6 / 100));
  });

  const FinalBill = withGst.reduce((each, billAmount) => {
    return each + billAmount;
  }, 0);

  //   return FinalBill;
  return console.log(
    `Your final Bill with GST for ${products.length} items is ${FinalBill}`
  );
}

CalculateBill();
let items = [324, 540, 675, 435, 555];
