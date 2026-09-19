let num = 12345;
let reversed = 0;

for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
    let lastDigit = temp % 10;
    reversed = reversed * 10 + lastDigit;
}

console.log(`Reversed number is ${reversed}`);