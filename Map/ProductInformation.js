const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Keyboard", price: 1500 }
];

 const productInfo = products.map((product) =>{
    return {
        name : product.name,
        price : product.price
    }
 });
 console.log(productInfo);