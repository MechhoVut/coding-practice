const products = new Map([
  ["Laptop", 55000],
  ["Mobile", 20000],
  ["Tablet", 15000],
  ["Keyboard", 2000]
]);

products.forEach((name,price) =>{
  console.log(`${name} : ${price}`)
})