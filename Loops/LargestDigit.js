let num = 47528;
let largest = 0;

for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
    let lastDigit = temp % 10;
    if (lastDigit > largest) {
        largest = lastDigit;
    }
}

console.log(`Largest digit in ${num} is ${largest}`);