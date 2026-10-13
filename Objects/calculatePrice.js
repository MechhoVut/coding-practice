
const products = [
      {
        name: "smartphone",
        price: 8000,
        quantity:7,
      },
      {
        name: "tv",
        price: 12000,
        quantity: 5,
      },
      {
        name: "laptop",
        price: 15000,
        quantity: 3,
      },
];
  const totalValue = products.reduce(
  (sum, { price, quantity }) => sum + price * quantity,
  0
);

console.log(`Total value of products: ${totalValue}`);