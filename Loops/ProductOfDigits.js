let num = 12345;
let sum = 1;

for ( let temp = num; temp > 0; temp = Math.floor(temp / 10)){
    let lastDigit = temp % 10;
    sum *= lastDigit;
}

console.log(`the product of ${num} is ${sum}`);