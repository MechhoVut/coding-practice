let str = "Hello World, how are you";
let count = 0;

for (let char of str) {
    if (char === ' ') {
        count++;
    }
}

console.log(`Number of spaces in "${str}" is ${count}`);