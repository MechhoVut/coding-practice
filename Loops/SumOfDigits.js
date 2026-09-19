let num = 122456;
let sum = 0;

for( let temp = num; temp > 0; temp = Math.floor( temp / 10)){
    let lastDigit = temp % 10;
    sum += lastDigit;
}

console.log(`Sum of the digits ${sum}`);
