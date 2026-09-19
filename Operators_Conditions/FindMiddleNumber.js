let a = 15;
let b = 12;
let c = 10;

let middle;

if ((a > b && a < c) || (a < b && a > c)) {
    middle = a;
}
else if ((b > a && b < c) || (b < a && b > c)) {
    middle = b;
}
else {
    middle = c;
}

console.log(`The middle number is ${middle}`);