
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 100000,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 50000,
        category: "Electronics"
    },
    {
        id: 3,
        name: "Shoes",
        price: 799,
        category: "Footwear",
    },
];
products
.filter((product) => product.price > 1000)
.forEach((product) => console.log(product.name));
