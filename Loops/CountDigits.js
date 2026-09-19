function counting(number) {
    let count = 0;
    for (let n = number; n > 0; n = Math.floor(n / 10)) {
        count++;
    }
    return count;
}

let num = 12345;
let result = counting(num);
console.log(`Number of digits in ${num}: ${result}`);