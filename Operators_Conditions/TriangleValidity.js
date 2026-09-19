let a = 5 ;
let b = 5;
let c = 8;

if (a + b > c && b + c > a && a + c > b) {
    console.log(`${a}, ${b}, ${c} can form a triangle`);
} else {
    console.log(`${a}, ${b}, ${c} cannot form a triangle`);
}