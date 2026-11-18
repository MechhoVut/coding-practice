const prices = [100, 200, 500, 1000];

const newPrice = prices.map((price) =>{
  const  x = ((price * 18 /100 ) + price ) ;
    return x ;
})

console.log(newPrice);